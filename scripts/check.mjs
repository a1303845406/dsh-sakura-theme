import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const patch = await readFile(join(root, "cordis.patch.yml"), "utf8");
const client = await readFile(join(root, "lib", "client.js"), "utf8");

const required = [
  "assets/sakura-frame-day.webp",
  "assets/sakura-frame-night.webp",
  "assets/petal-layer.svg",
  "assets/lxgw-wenkai-gb-screen.woff",
  "assets/OFL-LXGW-WenKai.txt",
  "assets/sakura-send.svg",
  "assets/sakura-new-chat.svg",
  "lib/index.js",
  "lib/client.js",
  "README.md",
  "README.en.md",
  "THIRD_PARTY_NOTICES.md"
];

for (const file of required) await access(join(root, file));

if (pkg.name !== "dsh-sakura-theme") throw new Error("unexpected package name");
if (pkg.dsh?.bundle?.patch !== "./cordis.patch.yml") throw new Error("missing dsh.bundle patch");
if (pkg.publishConfig?.access !== "public") throw new Error("npm package must publish publicly");
if (pkg.publishConfig?.registry !== "https://registry.npmjs.org/") throw new Error("npm package must publish to the official registry");
if (!pkg.files?.includes("lib")) throw new Error("npm package must include prebuilt lib output");
if (pkg.scripts?.prepack !== "npm run build && npm run check") throw new Error("prepack must build and validate the package");
if (!pkg.dsh?.client?.inject?.includes("@deepseek-ai/dsh-client-ui-theme")) {
  throw new Error("theme client dependency is not declared");
}
for (const dependency of [
  "@deepseek-ai/dsh-client-runtime",
  "@deepseek-ai/dsh-client-ui-conversation",
  "@deepseek-ai/dsh-client-ui-sidebar"
]) {
  if (!pkg.dsh?.client?.inject?.includes(dependency)) {
    throw new Error(`brand client dependency is not declared: ${dependency}`);
  }
}
for (const dependency of Object.keys(pkg.peerDependencies ?? {})) {
  if (pkg.peerDependenciesMeta?.[dependency]?.optional !== true) {
    throw new Error(`host-provided peer dependency must be optional: ${dependency}`);
  }
}
if (!patch.includes("name: dsh-sakura-theme")) throw new Error("bundle patch does not mount the package");
if (!patch.includes("id: ui-brand-official") || !patch.includes("disabled: true")) {
  throw new Error("official brand occupant is not disabled");
}
if (!client.includes('id: "dsh-sakura-theme"')) throw new Error("client module id mismatch");
if (!client.includes("overrideTokens(PACKAGE_ID, TOKENS)")) throw new Error("theme override is missing");
if (!client.includes('children: "Sakura"') || !client.includes('children: "HARNESS"')) {
  throw new Error("Sakura Harness wordmark is missing");
}
if (!client.includes("sidebar.brand.mark") || !client.includes("conversation.hero.brand.mark")) {
  throw new Error("Sakura brand slot registrations are missing");
}
if (!client.includes("data-sakura-send") || !client.includes("data-sakura-new-session")) {
  throw new Error("semantic Sakura icon decorators are missing");
}
if (!client.includes('const HERO_HEADLINE = "一起探索今天的美好吧😊"')) {
  throw new Error("Sakura hero headline replacement is missing");
}
if (!client.includes("data-sakura-hero-mark") || !client.includes("restoreHeroHeadline")) {
  throw new Error("reversible Sakura hero headline decoration is missing");
}
if (!client.includes('data-slot="conversation.hero.brand.mark"')) {
  throw new Error("hero headline decorator is not anchored to the semantic slot wrapper");
}
if (!client.includes("Sakura WenKai")) throw new Error("bundled Sakura font is missing");
if (!client.includes("prefers-reduced-motion")) throw new Error("reduced-motion fallback is missing");
if (/__[A-Z0-9_]+__/.test(client)) throw new Error("client bundle contains unresolved placeholders");

for (const token of [
  "--dsw-alias-button-primary-fill",
  "--dsw-shadow-lv1",
  "--dsw-shadow-lv2",
  "--dsw-shadow-lv3",
  "--dsw-alias-button-primary-hover",
  "--dsw-alias-interactive-bg-hover",
  "--dsw-specific-sidebar-nav-item-active",
  "--dsw-specific-input-major",
  "--dsw-alias-state-success-primary",
  "--dsw-alias-state-warn-primary",
  "--dsw-alias-state-error-primary"
]) {
  if (!client.includes(token)) throw new Error(`required token missing: ${token}`);
}

console.log("sakura theme package checks passed");
