import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const source = await readFile(join(root, "src", "client.template.js"), "utf8");
let css = await readFile(join(root, "src", "theme.css"), "utf8");

async function dataUri(relativePath, mime) {
  const bytes = await readFile(join(root, relativePath));
  return `data:${mime};base64,${bytes.toString("base64")}`;
}

const replacements = {
  "__DAY_FRAME_DATA_URI__": await dataUri("assets/sakura-frame-day.webp", "image/webp"),
  "__NIGHT_FRAME_DATA_URI__": await dataUri("assets/sakura-frame-night.webp", "image/webp"),
  "__PETAL_LAYER_DATA_URI__": await dataUri("assets/petal-layer.svg", "image/svg+xml"),
  "__SAKURA_FONT_DATA_URI__": await dataUri("assets/lxgw-wenkai-gb-screen.woff", "font/woff"),
  "__SAKURA_SEND_ICON_DATA_URI__": await dataUri("assets/sakura-send.svg", "image/svg+xml"),
  "__SAKURA_NEW_CHAT_ICON_DATA_URI__": await dataUri("assets/sakura-new-chat.svg", "image/svg+xml")
};

for (const [placeholder, value] of Object.entries(replacements)) {
  css = css.replaceAll(placeholder, value);
}

if (/__[A-Z0-9_]+__/.test(css)) {
  throw new Error("theme.css contains an unresolved build placeholder");
}

const body = source.replace("__THEME_CSS__", JSON.stringify(css));
if (body === source) throw new Error("client template marker was not replaced");

const clientBundle = `window.__ModuleLoader__.load({\n  id: ${JSON.stringify(packageJson.name)},\n  factory: (require) => {\n    const module = { exports: {} };\n    const exports = module.exports;\n${body.split("\n").map((line) => `    ${line}`).join("\n")}\n    exports.apply = apply;\n    exports.inject = inject;\n    return module.exports;\n  }\n});\n`;

const hostBundle = `/** Host half: the bundle patch mounts the browser contribution. */\nexport function apply() {}\n`;

await mkdir(join(root, "lib"), { recursive: true });
await writeFile(join(root, "lib", "client.js"), clientBundle);
await writeFile(join(root, "lib", "index.js"), hostBundle);

console.log(`built ${packageJson.name}: ${Buffer.byteLength(clientBundle)} byte client bundle`);
