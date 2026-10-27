# 先建立私有 GitHub 仓库

本地仓库目录：

```text
/home/minus/workspace/research/HumanoidTactileReflex/github/reflexarc-website
```

这里是网站当前版本的独立快照，原 Sites 工作目录继续保留。未复制 Sites 的 Git 历史、`.openai/hosting.json` 或本地发布凭据。

## 1. 创建空仓库

登录 [GitHub 新建仓库页面](https://github.com/new)，填写：

- Owner：你的个人账号，或你指定的组织。
- Repository name：`reflexarc-website`。
- Visibility：**Private**。
- 不勾选初始化 README、`.gitignore` 或 License，因为本地已有初始内容。

点击 **Create repository**。这一步只创建私有代码仓库；暂时不配置 Settings → Pages。

## 2. 首次推送

以下使用 GitHub 网页给出的 HTTPS 地址；把 `YOUR_GITHUB_USERNAME` 换成实际 Owner。仓库已在本地初始化并提交，不需要再次执行 `git init`。

```bash
cd /home/minus/workspace/research/HumanoidTactileReflex/github/reflexarc-website
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/reflexarc-website.git
git push -u origin main
```

如果已经配置了 GitHub SSH 密钥，可将添加 remote 的命令替换为：

```bash
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/reflexarc-website.git
```

HTTPS 推送需要 Git 凭据管理器、GitHub CLI 登录或个人访问令牌，不能用 GitHub 账号密码代替令牌。令牌不要写入 remote URL、README 或提交文件。参考 [GitHub 命令行认证说明](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-with-the-command-line)。

若之后安装了 GitHub CLI，也可以用下面的方式完成登录、私有仓库创建和首次推送；它是上述网页流程的替代方案：

```bash
gh auth login
gh repo create reflexarc-website --private --source=. --remote=origin --push
```

## 3. 之后更新

直接编辑这个仓库中的网站文件，然后：

```bash
git status
git add dist README.md docs deploy .gitignore
git diff --cached --stat
git commit -m "Update ReflexArc website"
git push
```

推送后，仓库页面应显示 **Private**，文件列表中能看到 `dist/`。未启用 Pages 时，不会获得新的 `github.io` 网站。

## 两个本地目录的关系

- `sites/reflexarc/`：此前用于 Sites 发布的工作目录。
- `github/reflexarc-website/`：这次准备的 GitHub 独立仓库。

后续明确选择一个作为主编辑目录，再同步另一个；二者不会自动互相更新。GitHub 私有仓库建好以后，通常直接在这个目录维护即可。

当前内容约 93 MiB，最大单文件约 18 MiB，均低于 GitHub 普通 Git 的单文件 100 MiB 限制，当前不需要增加 LFS 配置。参考 [GitHub 大文件说明](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)。
