# Sakura Harness Theme

[中文](./README.md) | English

**Give DeepSeek Harness the energy of cherry blossoms without sacrificing focus, readability, or function.**

Sakura Harness Theme is a complete, reversible visual system for DeepSeek Harness Web. One installation gives you the airy **Day Sakura** and immersive **Night Sakura** themes, automatically following the built-in Light, Dark, or System preference. It goes beyond a wallpaper by coordinating branding, color, typography, icons, surfaces, and interaction states while leaving application behavior untouched.

> This is an unofficial community plugin and is not affiliated with DeepSeek.

## See it in action

These screenshots were captured from the plugin running in DeepSeek Harness Web. Click either image for the full-size view.

| Day Sakura · Light | Night Sakura · Dark |
| --- | --- |
| [![Sakura Harness Day Sakura light theme in use](./docs/screenshots/sakura-theme-light.png)](./docs/screenshots/sakura-theme-light.png) | [![Sakura Harness Night Sakura dark theme in use](./docs/screenshots/sakura-theme-dark.png)](./docs/screenshots/sakura-theme-dark.png) |

## Why install it

| What you get | Why it matters |
| --- | --- |
| Two complete themes in one plugin | Use a soft, airy workspace by day and a restrained, immersive one at night—without maintaining separate configurations. |
| A system, not a background image | Sidebar, composer, menus, code blocks, scrollbars, and dialogs share one coherent visual language. |
| Distinct Sakura Harness identity | Original blossom marks, wordmarks, and semantic Send and New Session icons give the workspace a recognizable personality. |
| Comfortable long-form Chinese reading | Bundled LXGW WenKai GB Screen keeps Chinese UI text warm and legible while code remains monospaced. |
| Reversible and semantics-safe | Submission, navigation, and model behavior stay untouched; stop, warning, and file icons retain their original meaning. |

## Quick start

```powershell
dsh plugin --profile web add dsh-sakura-theme
```

Fully restart `dsh web`, then choose Light, Dark, or System in Appearance. Sakura Harness switches between Day Sakura and Night Sakura automatically.

## Compatibility

- DeepSeek Harness Web `0.1.1-rc.2` series.
- Node.js 20 or newer.

## Highlights

- Coordinated semantic tokens for backgrounds, text, borders, buttons, sidebar, composer, menus, code blocks, and scrollbars.
- Original Sakura Harness branding on the sidebar and new-session screen.
- Sakura Send and “blossom +” New Session icons while preserving the semantics of stop, warning, and file actions.
- Bundled LXGW WenKai GB Screen typography for offline use, with a dedicated monospace stack for code.
- Three-level shadows and translucent surfaces tuned separately for light and dark modes.
- Original transparent blossom frames and a slow diagonal petal layer.
- `prefers-reduced-motion` support and automatic cleanup when the plugin unloads.

## Build and check

```powershell
node scripts/build.mjs
node scripts/check.mjs
```

## Install

```powershell
dsh plugin --profile web add dsh-sakura-theme
```

The Chinese README also documents installation from a GitHub Release or a source checkout.

Remove it with:

```powershell
dsh plugin --profile web remove dsh-sakura-theme
```

The bundled LXGW WenKai GB Screen v1.522 web font is distributed under SIL Open Font License 1.1; see `assets/OFL-LXGW-WenKai.txt`.
