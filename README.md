# ReflexArc website

ReflexArc 论文主页，包含实验视频、方法介绍、消融结果与浏览器内交互 policy。

这个仓库用于独立维护网站。当前没有启用 GitHub Pages，也没有自动发布工作流。

## 本地预览

```bash
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

访问 `http://127.0.0.1:8765/`。交互 Demo 需要通过 HTTP 服务打开；所有物理、模型、policy 和求解器文件已经包含在仓库内。

## 目录

```text
dist/                         可直接部署的静态网站
  index.html                  主页内容
  styles.css                  官网样式
  app.js                      主页交互
  config.js                   arXiv / GitHub / BibTeX / Demo 配置
  assets/                     视频、论文与图片
  playground.html             独立 Demo 容器页
  playground.js               iframe 嵌入与全屏控制
  reflex_demo/                作者构建的完整交互 Demo
docs/GITHUB.md                创建私有仓库、上传、日常更新
docs/GITHUB_PAGES.md          以后发布网站的操作步骤
docs/MAINTENANCE.md           内容和 Demo 更新说明
deploy/github-pages.yml.example  尚未启用的手动发布模板
```

网站为静态 HTML/CSS/JS，无需安装 npm 依赖或运行构建。`reflex_demo/` 已包含作者提供的生产构建，修改其运行逻辑时应在原 Demo 工程中重新构建。

## 先保存到私有仓库

按 [GitHub 私有仓库步骤](docs/GITHUB.md) 创建空的 **Private** 仓库，再推送本地 `main` 分支。当前仓库没有 `.github/workflows/`，推送代码不会触发本项目的 Pages 发布。

## 以后发布

准备对外发布时，再按 [GitHub Pages 指南](docs/GITHUB_PAGES.md) 启用模板。发布内容仅来自 `dist/`，文档和本地部署说明不在网站发布目录中。

## 当前待填写

- `dist/config.js` 中的 `arxiv` 和 `github`：顶部资源入口仍为 Coming soon。私有的网站仓库与论文 Code 链接分别管理。
- `dist/config.js` 中的 `bibtex`：第 07 节的引用信息。

保留了随字体及 KaTeX 分发的许可文件。
