# 网站维护

## 官网内容

- 改文案与版块：`dist/index.html`。
- 改官网排版和样式：`dist/styles.css`。
- 改顶部 arXiv、论文 Code 入口与 BibTeX：`dist/config.js`。
- 改视频弹窗、方法卡片等行为：`dist/app.js`。
- 改 Demo 的嵌入、全屏与默认动作：`dist/playground.js`、`dist/config.js`。

主标题 ReflexArc 保持白色；正文独立 ARC 使用论文金色 `#C77F00`。方法展开区已采用桌面图公式并排、窄屏堆叠的布局。

## 交互 Demo

`dist/reflex_demo/` 是作者已构建的静态运行版本，包含 7 个动作。其上游源工程位于 `/home/minus/workspace/reflexArc/web/`，这个网站仓库保存的是可直接托管的产物。

要修改求解器、policy runtime 或机器人界面，先在上游工程修改并运行 `npm run build`，再用新的 `web/dist/` 替换本仓库的 `dist/reflex_demo/`。集成时保留这两项网站适配：

- `reflex_demo/website.css`：窄屏操作提示换行。
- `reflex_demo/index.html` 中加载 `./website.css` 的 stylesheet 引用。

更新 `dist/config.js` 中 Demo URL 的 `release` 参数，便于浏览器获取新入口。不要只同步 JavaScript 文件；Worker、WASM、模型、动作二进制、Python zip、Pyodide 和 NumPy 都属于完整运行包。

## 来源

本仓库从已验证的 ReflexArc 网站快照建立：`86180d1d8d1319520801eb9fe9e95956cf0bcd61`。保留网页和交互体验，省略原托管平台的身份文件与内部交接记录。
