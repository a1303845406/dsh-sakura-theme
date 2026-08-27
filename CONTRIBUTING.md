# 贡献指南

感谢你改进 Sakura 主题。

## 开发原则

- 优先使用 DeepSeek Harness 的语义 Token 和 UI slot，避免依赖易变的 DOM 层级或生成类名。
- 保持主题可逆：卸载或停用后必须移除 Token 覆盖、DOM 装饰和副作用。
- 保留停止、警告、危险、文件等功能图标的原有语义。
- 新增动画必须提供 `prefers-reduced-motion` 降级。
- 新增第三方字体、图标或图片时，必须同时补充来源、授权和 `THIRD_PARTY_NOTICES.md`。
- 不提交依赖目录、缓存、QA 截图或打包产物。

## 本地验证

```powershell
npm run build
npm run check
```

Pull Request 应说明问题根因、浅色与深色模式的影响、可逆性验证结果，以及新增素材的许可证。
