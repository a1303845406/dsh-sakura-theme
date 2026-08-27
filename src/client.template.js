const { jsx, jsxs } = require("react/jsx-runtime");

const PACKAGE_ID = "dsh-sakura-theme";
const STYLE_ID = `${PACKAGE_ID}/global.css`;
const THEME_CSS = __THEME_CSS__;
const HERO_HEADLINE = "一起探索今天的美好吧😊";

const TOKENS = Object.freeze({
  "--dsw-alias-bg-base": {
    light: "rgba(255, 252, 253, 0.68)",
    dark: "rgba(11, 8, 17, 0.62)"
  },
  "--dsw-alias-bg-layer-1": {
    light: "rgba(255, 255, 255, 0.90)",
    dark: "rgba(20, 15, 27, 0.82)"
  },
  "--dsw-alias-bg-layer-2": {
    light: "rgba(255, 248, 251, 0.94)",
    dark: "rgba(29, 21, 37, 0.88)"
  },
  "--dsw-alias-bg-layer-3": {
    light: "rgba(255, 255, 255, 0.97)",
    dark: "rgba(37, 27, 46, 0.94)"
  },
  "--dsw-alias-bg-overlay": {
    light: "rgba(255, 252, 253, 0.97)",
    dark: "rgba(23, 17, 30, 0.97)"
  },
  "--dsw-alias-bg-module-platform": {
    light: "rgba(255, 238, 245, 0.90)",
    dark: "rgba(58, 29, 48, 0.88)"
  },
  "--dsw-alias-bg-multi-select": {
    light: "rgba(252, 219, 232, 0.84)",
    dark: "rgba(112, 48, 78, 0.72)"
  },
  "--dsw-alias-bg-mask-1": {
    light: "rgba(255, 255, 255, 0.76)",
    dark: "rgba(7, 5, 11, 0.64)"
  },
  "--dsw-alias-bg-mask-2": {
    light: "rgba(255, 255, 255, 0.84)",
    dark: "rgba(7, 5, 11, 0.72)"
  },
  "--dsw-alias-bg-mask-3": {
    light: "rgba(255, 255, 255, 0.91)",
    dark: "rgba(7, 5, 11, 0.80)"
  },
  "--dsw-shadow-lv1": {
    light: "0 2px 5px rgba(126, 42, 75, 0.14), 0 6px 16px rgba(126, 42, 75, 0.08)",
    dark: "0 2px 6px rgba(0, 0, 0, 0.36), 0 6px 18px rgba(255, 105, 161, 0.08)"
  },
  "--dsw-shadow-lv1-blur": {
    light: "0 5px 18px rgba(126, 42, 75, 0.12)",
    dark: "0 6px 20px rgba(0, 0, 0, 0.38), 0 0 18px rgba(255, 105, 161, 0.06)"
  },
  "--dsw-shadow-lv2": {
    light: "0 4px 12px rgba(126, 42, 75, 0.17), 0 14px 32px rgba(126, 42, 75, 0.11)",
    dark: "0 5px 16px rgba(0, 0, 0, 0.48), 0 16px 38px rgba(0, 0, 0, 0.30), 0 0 22px rgba(255, 105, 161, 0.08)"
  },
  "--dsw-shadow-lv3": {
    light: "0 8px 22px rgba(105, 31, 61, 0.20), 0 24px 56px rgba(105, 31, 61, 0.15)",
    dark: "0 10px 28px rgba(0, 0, 0, 0.58), 0 28px 68px rgba(0, 0, 0, 0.42), 0 0 28px rgba(255, 112, 164, 0.11)"
  },
  "--dsw-alias-border-l1": {
    light: "rgba(214, 133, 163, 0.24)",
    dark: "rgba(255, 135, 177, 0.18)"
  },
  "--dsw-alias-border-l2": {
    light: "rgba(191, 92, 130, 0.34)",
    dark: "rgba(255, 142, 181, 0.30)"
  },
  "--dsw-alias-border-l3": {
    light: "rgba(164, 69, 107, 0.50)",
    dark: "rgba(255, 155, 191, 0.45)"
  },
  "--dsw-alias-border-l4": {
    light: "rgba(132, 45, 82, 0.66)",
    dark: "rgba(255, 177, 205, 0.64)"
  },
  "--dsw-alias-label-primary": {
    light: "#321923",
    dark: "#fff2f7"
  },
  "--dsw-alias-label-secondary": {
    light: "#6d4555",
    dark: "#dcc5d0"
  },
  "--dsw-alias-label-tertiary": {
    light: "#966b7b",
    dark: "#b99aa9"
  },
  "--dsw-alias-label-caption": {
    light: "#a47788",
    dark: "#a98797"
  },
  "--dsw-alias-label-primary-foreground": {
    light: "#34101f",
    dark: "#34101f"
  },
  "--dsw-alias-label-primary-bluish": {
    light: "#b51f5d",
    dark: "#ff8db5"
  },
  "--dsw-alias-brand-primary": {
    light: "#f05b91",
    dark: "#ff78a8"
  },
  "--dsw-alias-brand-primary-invert": {
    light: "#c72d68",
    dark: "#ff9cbd"
  },
  "--dsw-alias-brand-text": {
    light: "#a91f55",
    dark: "#ff91b7"
  },
  "--dsw-alias-button-primary-fill": {
    light: "#f05b91",
    dark: "#ff78a8"
  },
  "--dsw-alias-button-primary-hover": {
    light: "#df477f",
    dark: "#ff91b8"
  },
  "--dsw-alias-button-primary-dimmed": {
    light: "rgba(240, 91, 145, 0.34)",
    dark: "rgba(255, 120, 168, 0.32)"
  },
  "--dsw-alias-button-info-fill": {
    light: "rgba(231, 67, 126, 0.13)",
    dark: "rgba(255, 120, 168, 0.16)"
  },
  "--dsw-alias-button-info-hover": {
    light: "rgba(231, 67, 126, 0.22)",
    dark: "rgba(255, 120, 168, 0.26)"
  },
  "--dsw-alias-button-floating-fill": {
    light: "rgba(255, 255, 255, 0.90)",
    dark: "rgba(31, 22, 39, 0.88)"
  },
  "--dsw-alias-button-floating-hover": {
    light: "rgba(255, 229, 239, 0.94)",
    dark: "rgba(75, 39, 61, 0.92)"
  },
  "--dsw-alias-button-ghost-active-fill": {
    light: "rgba(244, 92, 146, 0.12)",
    dark: "rgba(255, 120, 168, 0.17)"
  },
  "--dsw-alias-button-ghost-active-hover": {
    light: "rgba(244, 92, 146, 0.20)",
    dark: "rgba(255, 120, 168, 0.27)"
  },
  "--dsw-alias-button-ghost-active-border": {
    light: "rgba(205, 49, 103, 0.60)",
    dark: "rgba(255, 133, 174, 0.72)"
  },
  "--dsw-alias-button-tool-bar-fill": {
    light: "rgba(255, 239, 245, 0.76)",
    dark: "rgba(65, 38, 55, 0.72)"
  },
  "--dsw-alias-button-tool-bar-hover": {
    light: "rgba(250, 206, 223, 0.82)",
    dark: "rgba(101, 48, 75, 0.82)"
  },
  "--dsw-alias-interactive-bg-hover": {
    light: "rgba(236, 80, 136, 0.09)",
    dark: "rgba(255, 126, 170, 0.12)"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    light: "rgba(236, 80, 136, 0.16)",
    dark: "rgba(255, 126, 170, 0.20)"
  },
  "--dsw-alias-interactive-bg-active": {
    light: "rgba(221, 62, 119, 0.20)",
    dark: "rgba(255, 112, 160, 0.26)"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    light: "#fde4ee",
    dark: "#4b293d"
  },
  "--dsw-alias-interactive-bg-hover-danger": {
    light: "rgba(216, 58, 69, 0.12)",
    dark: "rgba(255, 102, 112, 0.16)"
  },
  "--dsw-specific-sidebar-fill": {
    light: "rgba(255, 250, 252, 0.84)",
    dark: "rgba(16, 12, 22, 0.82)"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    light: "rgba(242, 94, 147, 0.16)",
    dark: "rgba(255, 117, 165, 0.20)"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    light: "#d93471",
    dark: "#ff79aa"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    light: "rgba(238, 89, 143, 0.09)",
    dark: "rgba(255, 126, 170, 0.12)"
  },
  "--dsw-specific-input-major": {
    light: "rgba(255, 255, 255, 0.92)",
    dark: "rgba(18, 13, 24, 0.90)"
  },
  "--dsw-specific-menu": {
    light: "rgba(255, 252, 253, 0.97)",
    dark: "rgba(26, 18, 33, 0.97)"
  },
  "--dsw-specific-selector": {
    light: "rgba(253, 231, 239, 0.92)",
    dark: "rgba(70, 34, 55, 0.92)"
  },
  "--dsw-specific-bubble": {
    light: "rgba(255, 244, 248, 0.94)",
    dark: "rgba(45, 27, 39, 0.92)"
  },
  "--dsw-alias-markdown-code-block": {
    light: "rgba(255, 255, 255, 0.97)",
    dark: "rgba(13, 10, 18, 0.96)"
  },
  "--dsw-alias-markdown-code-block-banner": {
    light: "rgba(253, 239, 245, 0.98)",
    dark: "rgba(34, 23, 42, 0.98)"
  },
  "--dsw-alias-markdown-inline-code": {
    light: "rgba(235, 93, 145, 0.11)",
    dark: "rgba(255, 132, 174, 0.14)"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    light: "rgba(191, 91, 128, 0.26)",
    dark: "rgba(255, 146, 184, 0.22)"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    light: "rgba(174, 61, 103, 0.46)",
    dark: "rgba(255, 146, 184, 0.42)"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    light: "rgba(175, 70, 109, 0.30)",
    dark: "rgba(255, 158, 193, 0.28)"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    light: "rgba(158, 49, 91, 0.52)",
    dark: "rgba(255, 170, 201, 0.50)"
  },
  "--dsw-alias-state-success-primary": {
    light: "#178a57",
    dark: "#54d892"
  },
  "--dsw-alias-state-success-secondary": {
    light: "rgba(23, 138, 87, 0.14)",
    dark: "rgba(84, 216, 146, 0.16)"
  },
  "--dsw-alias-state-warn-primary": {
    light: "#a66300",
    dark: "#f3b94f"
  },
  "--dsw-alias-state-warn-label": {
    light: "#805000",
    dark: "#ffd37d"
  },
  "--dsw-alias-state-error-primary": {
    light: "#d83a45",
    dark: "#ff6670"
  },
  "--dsw-alias-state-error-secondary": {
    light: "rgba(216, 58, 69, 0.14)",
    dark: "rgba(255, 102, 112, 0.17)"
  },
  "--dsw-alias-tooltip-bg": {
    light: "rgba(61, 31, 43, 0.96)",
    dark: "rgba(255, 242, 247, 0.96)"
  },
  "--dsw-alias-toast-bg": {
    light: "rgba(255, 252, 253, 0.98)",
    dark: "rgba(24, 17, 31, 0.98)"
  }
});

const inject = ["theme", "slots"];

function SakuraMark({ size = 24, className, hero = false }) {
  const classes = ["sakura-brand-mark", className].filter(Boolean).join(" ");
  const petal = "M12 11.35C8.64 8.74 8.73 4.42 12 1.6c3.27 2.82 3.36 7.14 0 9.75Z";
  return jsxs("svg", {
    className: classes,
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    role: "img",
    "aria-label": "Sakura Harness",
    "data-sakura-hero-mark": hero || undefined,
    children: [
      jsx("path", { d: petal }),
      jsx("path", { d: petal, transform: "rotate(72 12 12)" }),
      jsx("path", { d: petal, transform: "rotate(144 12 12)" }),
      jsx("path", { d: petal, transform: "rotate(216 12 12)" }),
      jsx("path", { d: petal, transform: "rotate(288 12 12)" }),
      jsx("circle", { cx: 12, cy: 12, r: 2.1 })
    ]
  });
}

function SakuraHeroMark(props) {
  return jsx(SakuraMark, { ...props, hero: true });
}

function SakuraBrandName() {
  return jsxs("span", {
    className: "sakura-wordmark",
    "aria-label": "Sakura Harness",
    children: [
      jsx("span", { className: "sakura-wordmark__name", children: "Sakura" }),
      jsx("span", { className: "sakura-wordmark__badge", children: "HARNESS" })
    ]
  });
}

function installBrand(ctx) {
  ctx.slots.inject("sidebar.brand.mark", () =>
    ctx.slots.inject("sidebar.brand.name", () =>
      ctx.slots.inject("conversation.hero.brand.mark", function* () {
        yield ctx.slots.register({ name: "sidebar.brand.mark" }, SakuraMark);
        yield ctx.slots.register({ name: "sidebar.brand.name" }, SakuraBrandName);
        yield ctx.slots.register({ name: "conversation.hero.brand.mark" }, SakuraHeroMark);
      })
    )
  );
}

function markSemanticButtons(root) {
  const scope = root?.querySelectorAll ? root : document;
  const composerButtons = scope.querySelectorAll("[data-composer-card] button");
  for (const button of composerButtons) {
    const arrow = button.querySelector(':scope > svg > path[d^="M8.3125"]');
    button.toggleAttribute("data-sakura-send", arrow !== null);
  }

  for (const button of scope.querySelectorAll("button[aria-label]")) {
    const label = button.getAttribute("aria-label") ?? "";
    const hasDirectIcon = button.querySelector(":scope > svg") !== null;
    const isNewSession = /新建会话/.test(label) || /new session/i.test(label);
    button.toggleAttribute("data-sakura-new-session", hasDirectIcon && isNewSession);
  }
}

function markHeroHeadline(root) {
  const scope = root?.querySelectorAll ? root : document;
  for (const mark of scope.querySelectorAll("[data-sakura-hero-mark]")) {
    const slot = mark.closest('[data-slot="conversation.hero.brand.mark"]');
    const headline = slot?.parentElement?.nextElementSibling;
    if (!(headline instanceof HTMLElement)) continue;
    if (!headline.hasAttribute("data-sakura-hero-headline")) {
      headline.dataset.sakuraHeroOriginal = headline.textContent ?? "";
      headline.dataset.sakuraHeroHeadline = "";
    }
    if (headline.textContent !== HERO_HEADLINE) headline.textContent = HERO_HEADLINE;
  }
}

function markSemanticPresentation(root) {
  markSemanticButtons(root);
  markHeroHeadline(root);
}

function restoreHeroHeadline() {
  for (const headline of document.querySelectorAll("[data-sakura-hero-headline]")) {
    headline.textContent = headline.dataset.sakuraHeroOriginal ?? "";
    delete headline.dataset.sakuraHeroOriginal;
    delete headline.dataset.sakuraHeroHeadline;
  }
}

function installSemanticIcons(ctx) {
  ctx.effect(() => {
    if (typeof document === "undefined") return undefined;
    markSemanticPresentation(document);
    const observer = new MutationObserver(() => markSemanticPresentation(document));
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["aria-label"]
    });
    return () => {
      observer.disconnect();
      restoreHeroHeadline();
    };
  }, "sakura-theme: semantic icon and hero-copy decoration");
}

function installStyles(ctx) {
  ctx.effect(() => {
    if (typeof document === "undefined") return undefined;
    const selector = `style[data-plugin-css=${JSON.stringify(STYLE_ID)}]`;
    document.querySelector(selector)?.remove();
    const tag = document.createElement("style");
    tag.dataset.plugin = PACKAGE_ID;
    tag.dataset.pluginCss = STYLE_ID;
    tag.textContent = THEME_CSS;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, "sakura-theme: global artwork and interaction styles");
}

function apply(ctx) {
  installStyles(ctx);
  installBrand(ctx);
  installSemanticIcons(ctx);
  ctx.effect(
    () => ctx.theme.overrideTokens(PACKAGE_ID, TOKENS),
    "sakura-theme: reversible light/dark token overlay"
  );
}
