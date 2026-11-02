# 网站维护

## 官网内容

- 改文案与版块：`dist/index.html`。
- 改官网排版和样式：`dist/styles.css`。
- 改首屏作者、机构、Paper / Code 入口与 BibTeX：`dist/config.js`。
- 改视频弹窗、方法卡片等行为：`dist/app.js`。
- 改 Demo 的嵌入、全屏与默认动作：`dist/playground.js`、`dist/config.js`。

首屏参照 HDMI 的全幅背景视频与居中标题、署名、横排按钮布局；Watch video / Interactive demo 使用薄荷色。主副标题使用本地托管的 Google Sans Regular（与 HDMI 相同的字体来源），保持白色，ReflexArc 主标题参照 HDMI，采用 10.6vw、最大 152 px、1.0 行高，副标题 30–44 px、署名 21 px、机构 16 px、按钮 16 px；正文独立 ARC 使用论文金色 `#C77F00`。方法展开区已采用桌面图公式并排、窄屏堆叠的布局。


首屏版心采用 HDMI 的 fluid container，左右内边距 16 px，不设固定宽度上限。正文容器沿用其响应式规则：960 / 1280 / 1920 / 2560 px 断点分别对应 900 / 1200 / 1800 / 2400 px 最大宽度，容器内边距均为 16 px；Abstract 单独使用 1040 px 阅读宽度，避免长段落铺满超宽屏；其他正文的段落宽度维持原设置。

## Abstract 与首屏排版（2026-10-28）

01 改为 Abstract，逐字采用 `papers/reflexarc_icra2027/sec/0_abstract.tex` 的当前论文摘要，仅转换 LaTeX 单位、分成三段并加粗核心贡献。阅读宽度 1040 px，桌面字号 19 px / 1.7 行高，手机 17 px / 1.7 行高；下方浅绿结果栏展示 10 ms、34.1%、53.5%，冲量指标标注为 Lower contact impulse，与结果区一致。对照条件保留在摘要正文中，结果栏下方的重复说明已删除。论文阅读按钮继续打开站内弹窗。

作者已确认对照实验为增加 20 ms 延迟，网页沿用该数值。新版论文待作者补充，当前阅读器仍使用已有论文文件与页面图像；更新时需将 PDF 和阅读器页面图像一起替换。Paper / Code 暂保留 Coming soon。

参考 HDMI 的全幅视频与摘要段落节奏、Any2Track 的大标题识别度、BeyondMimic 的署名比例与重点加粗，统一主标题、副标题、署名、机构和按钮的字号层级。页面主标题保持白色，正文 ARC 保持 #C77F00；02–07 节内容和 22 处公式未改。320 / 390 / 1280 / 1440 / 1920 px 分别检查布局。只同步本地文件，未 commit、push 或部署。

参考页面：
- https://hdmi-humanoid.github.io/
- https://zzk273.github.io/Any2Track/
- https://beyondmimic.github.io/

## 对照论文 PDF 的修订（2026-11-02）

对照 `~/workspace/reflexArc/ReflexArc.pdf` 修订文案：Abstract 第一段改为 PDF 的问题表述（反射与策略同时掌控、作用于同一关节），不再逐字对应 `0_abstract.tex`；结果栏 10 ms 改为 <10 ms；Transparency 卡片标语与结尾句、§05 导语、Tracking / Teleop 说明、§02 标签（补 FEET）随之调整。Table I 按论文逐列加粗最优值，并加 w/o transparency 表注。og:url / og:image 指向默认 Pages 地址 `https://minusmodulo.github.io/reflexarc-website/`，改用自定义域名时需同步。

`ablation.mp4`、`demo.mp4`（1:30.9–1:37.9）与 `ablation.jpg` 中的 "w/o adaption" 已逐像素修补为 "w/o adaptation"；`demo.mp4` 仅重编码该 7 秒，其余帧与原片一致。视频源工程 `ReflexArcVideo/ablation/config.json` 仍是旧拼写，重新渲染前需先修改。

`styles.css` 末尾的 Readability 块统一放大标签、说明与正文字号（桌面与 760 px 以下分别设置）；整体调整字号时只改这一块。

## 交互 Demo

`dist/reflex_demo/` 是作者已构建的静态运行版本，包含 7 个动作。其上游源工程位于 `/home/minus/workspace/reflexArc/web/`，这个网站仓库保存的是可直接托管的产物。

要修改求解器、policy runtime 或机器人界面，先在上游工程修改并运行 `npm run build`，再用新的 `web/dist/` 替换本仓库的 `dist/reflex_demo/`。集成时保留这两项网站适配：

- `reflex_demo/website.css`：窄屏操作提示换行。
- `reflex_demo/index.html` 中加载 `./website.css` 的 stylesheet 引用。

更新 `dist/config.js` 中 Demo URL 的 `release` 参数，便于浏览器获取新入口。不要只同步 JavaScript 文件；Worker、WASM、模型、动作二进制、Python zip、Pyodide 和 NumPy 都属于完整运行包。

## 来源

本仓库从已验证的 ReflexArc 网站快照建立：`86180d1d8d1319520801eb9fe9e95956cf0bcd61`。保留网页和交互体验，省略原托管平台的身份文件与内部交接记录。
