# dsh-sakura-theme

[中文](./README.md) | English

A reversible Day Sakura / Night Sakura skin for DeepSeek Harness. It replaces the official brand occupant with Sakura Harness artwork, decorates the Send and New Session actions with semantic Sakura icons, strengthens the shared three-level shadow system for framed surfaces, changes the new-session headline to “一起探索今天的美好吧😊”, bundles LXGW WenKai GB Screen for offline UI typography, and preserves the meaning of stop, warning, and file icons.

## Build and check

```powershell
node scripts/build.mjs
node scripts/check.mjs
```

## Install

```powershell
dsh plugin --profile web add ./plugins/dsh-sakura-theme
```

Restart `dsh web`. Remove it with:

```powershell
dsh plugin --profile web remove dsh-sakura-theme
```

The bundled LXGW WenKai GB Screen v1.522 web font is distributed under SIL Open Font License 1.1; see `assets/OFL-LXGW-WenKai.txt`.
