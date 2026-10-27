# 以后通过 GitHub Pages 发布

此文档和模板仅供准备发布时使用。现在不需要执行这些步骤。

## 仓库私有与网站公开

私有仓库可以先单独保存代码。若未来从私有仓库发布 Pages，GitHub Pro、Team 等方案支持该功能；GitHub Free 的 Pages 使用公开仓库。普通 Pages 网站通常公开可访问，即使源仓库私有。详细条件见 [GitHub 官方建站说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。

如果使用免费账号，可以在确定公开发布时将这个网站仓库改为 Public，再启用 Pages；也可以继续保留私有仓库，届时选择支持的账号方案。当前没有改变仓库或网站的公开范围。

## 1. 启用手动发布模板

当前模板位于 `deploy/`，不是活动工作流。准备发布时运行：

```bash
mkdir -p .github/workflows
cp deploy/github-pages.yml.example .github/workflows/pages.yml
git add .github/workflows/pages.yml
git commit -m "Add manual GitHub Pages publishing"
git push
```

模板仅使用 `workflow_dispatch`，这次推送不会自动执行发布。

## 2. 配置 GitHub Pages

打开仓库的 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。

这个网站无需构建，工作流会直接上传 `dist/`。`index.html` 会位于部署 artifact 的根目录，不需要把 `dist/` 文件搬到仓库根目录或 `/docs`。参考 [配置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 3. 手动发布

进入仓库 **Actions → Publish ReflexArc website → Run workflow**，选择 `main`，点击 **Run workflow**。

工作流依次检出代码、上传 `dist/`、发布到 Pages。完成后从 **Settings → Pages → Visit site** 获取实际地址。默认的项目网站地址形如：

```text
https://YOUR_GITHUB_USERNAME.github.io/reflexarc-website/
```

主页资源与 Demo 使用相对路径，支持这个仓库子路径。Demo 入口位于 `reflex_demo/index.html`，模型、policy、WASM 与 Python 包一并发布。

## 4. 更新网页

修改文件、提交并 push 后，再到 Actions 手动运行一次发布。只有当你希望每次推送都自动更新网站时，才在活动工作流的 `on:` 下增加：

```yaml
  push:
    branches: [main]
```

## 5. 验收

- 主页能打开，视频与图片加载正常。
- 点击首屏 Interactive Demo，机器人和动作菜单加载完成。
- 点击机器人上半身，反射曲线与求解结果出现。
- 试用全屏、退出全屏及手机布局。
- arXiv、论文 Code 和 BibTeX 继续由 `dist/config.js` 单独配置。

发布不会把原来的 `chatgpt.site` 地址迁移为 GitHub 地址；两套托管独立存在。论文和个人主页的链接可在准备好后更新为新的 Pages 地址。

模板使用 GitHub 官方 Actions：checkout、configure-pages、upload-pages-artifact、deploy-pages。版本与权限配置参考 [GitHub 自定义 Pages 工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)，核对日期为 2026-10-27。
