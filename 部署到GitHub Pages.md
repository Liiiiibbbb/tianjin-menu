# 🌐 部署到 GitHub Pages（免费公网访问）

## 什么是 GitHub Pages？

GitHub Pages 是 GitHub 提供的**免费静态网站托管服务**，可以让你的网站通过公网访问。

**优点**：
- ✅ 完全免费
- ✅ 全球可访问
- ✅ 无需服务器
- ✅ 自动 HTTPS
- ✅ 稳定可靠

**缺点**：
- ❌ 只能托管静态网站（本项目正好符合）
- ❌ 需要 GitHub 账号
- ❌ 需要简单学习 Git 使用

---

## 📋 部署步骤

### 步骤 1：准备工具

1. **注册 GitHub 账号**
   - 访问：https://github.com
   - 点击 "Sign up" 注册
   - 验证邮箱

2. **下载 Git**
   - 访问：https://git-scm.com/downloads
   - 下载并安装 Git
   - 安装时全部选择默认选项

---

### 步骤 2：创建 GitHub 仓库

1. **登录 GitHub**
   - 访问：https://github.com

2. **创建新仓库**
   - 点击右上角 "+" → "New repository"
   - Repository name: 输入仓库名（如 `tianjin-menu`）
   - 选择 "Public"（公开）
   - 点击 "Create repository"

---

### 步骤 3：上传项目文件

#### 方法一：使用网页上传（最简单）

1. **打开仓库**
   - 进入刚创建的仓库页面

2. **上传文件**
   - 点击 "uploading an existing file"
   - 将以下文件拖拽到上传区域：
     - `index.html`
     - `style.css`
     - `script.js`
     - `README.md`
   - ⚠️ **不要上传** `.bat` 文件和其他文档

3. **提交上传**
   - 在 "Commit changes" 输入框输入：`Initial commit`
   - 点击 "Commit changes" 按钮

#### 方法二：使用 Git 命令（推荐）

1. **打开命令行**
   ```cmd
   cd D:\卫宁文件\AI\LBY\CD
   ```

2. **初始化 Git 仓库**
   ```cmd
   git init
   ```

3. **添加所有文件**
   ```cmd
   git add .
   ```

4. **提交**
   ```cmd
   git commit -m "Initial commit"
   ```

5. **关联远程仓库**
   ```cmd
   git remote add origin https://github.com/你的用户名/仓库名.git
   ```

6. **推送**
   ```cmd
   git push -u origin main
   ```

---

### 步骤 4：启用 GitHub Pages

1. **进入设置**
   - 在仓库页面，点击 "Settings"

2. **找到 Pages 选项**
   - 左侧菜单找到 "Pages"

3. **配置 Pages**
   - Source: 选择 "Deploy from a branch"
   - Branch: 选择 "main" 或 "master"
   - Folder: 选择 "/ (root)"
   - 点击 "Save"

4. **等待部署**
   - 等待 1-2 分钟
   - 页面刷新，会显示访问地址

---

### 步骤 5：访问网站

部署成功后，会显示访问地址：

```
https://你的用户名.github.io/仓库名/
```

**示例**：
```
https://zhangsan.github.io/tianjin-menu/
```

---

## 📱 分享方法

### 方法一：直接分享链接

将网址发送给任何人：
```
https://你的用户名.github.io/仓库名/
```

**优点**：
- ✅ 任何地方都能访问
- ✅ 手机电脑都可以
- ✅ 无需同一 WiFi

### 方法二：生成二维码

1. **访问二维码生成网站**
   - 例如：https://www.qr-code-generator.com/

2. **输入网址**
   - 粘贴你的 GitHub Pages 地址

3. **下载二维码**
   - 下载生成的二维码图片
   - 打印或分享给别人扫描

---

## 🔄 更新网站

### 更新文件后重新部署

#### 方法一：网页上传

1. 进入仓库
2. 点击要修改的文件
3. 点击右上角编辑图标
4. 修改后点击 "Commit changes"

#### 方法二：Git 命令

```cmd
# 修改文件后执行：
git add .
git commit -m "更新说明"
git push
```

**自动更新**：
- 推送后 1-2 分钟自动更新
- 无需重新配置

---

## ⚠️ 注意事项

### 1. 文件限制

**可以上传**：
- ✅ HTML 文件
- ✅ CSS 文件
- ✅ JavaScript 文件
- ✅ 图片文件
- ✅ Markdown 文件

**不要上传**：
- ❌ `.bat` 批处理文件
- ❌ Python 脚本
- ❌ 服务器端代码（PHP、Node.js 等）
- ❌ 数据库文件

### 2. 功能限制

**支持的功能**：
- ✅ 静态页面展示
- ✅ JavaScript 交互
- ✅ localStorage 本地存储
- ✅ CSS 动画效果

**不支持的功能**：
- ❌ 服务器端数据库
- ❌ 用户登录系统
- ❌ 实时聊天
- ❌ 文件上传到服务器

### 3. 访问限制

- 每月 100GB 免费流量
- 单文件最大 100MB
- 仓库总大小不超过 1GB

**本项目完全在限制范围内！**

---

## 🎯 自定义域名（可选）

### 步骤

1. **购买域名**
   - 阿里云、腾讯云等
   - 约 30-60 元/年

2. **配置 DNS**
   - 添加 CNAME 记录
   - 指向：`你的用户名.github.io`

3. **GitHub 配置**
   - 在仓库创建 `CNAME` 文件
   - 内容：`你的域名.com`
   - 提交推送

4. **等待生效**
   - DNS 生效：约 10 分钟
   - GitHub 配置：约 5 分钟

---

## 📊 对比方案

| 方案 | 费用 | 难度 | 访问范围 | 推荐场景 |
|------|------|------|---------|---------|
| **GitHub Pages** | 免费 | ⭐⭐ | 全球 | ✅ 推荐 |
| **Vercel** | 免费 | ⭐⭐ | 全球 | ✅ 推荐 |
| **Netlify** | 免费 | ⭐⭐ | 全球 | ✅ 推荐 |
| **云服务器** | 10 元/月 | ⭐⭐⭐⭐ | 全球 | 高级需求 |
| **ngrok** | 免费 | ⭐⭐⭐ | 全球 | 临时测试 |
| **本地服务器** | 免费 | ⭐ | 局域网 | 店内使用 |

---

## 💡 推荐方案

### 最佳实践

**个人使用**：
```
直接双击 index.html
```

**店内使用**：
```
启动服务器.bat
手机访问局域网地址
```

**对外分享**：
```
部署到 GitHub Pages
生成二维码分享
```

---

## 🔗 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Git 下载](https://git-scm.com/downloads)
- [GitHub 注册](https://github.com/signup)
- [二维码生成器](https://www.qr-code-generator.com/)

---

## ❓ 常见问题

### Q1: 部署后多久能访问？
**A**: 1-2 分钟

### Q2: 可以绑定自己的域名吗？
**A**: 可以，需要购买域名并配置 DNS

### Q3: 访问速度慢怎么办？
**A**: GitHub Pages 在国内访问可能较慢，建议使用 Vercel 或 Netlify

### Q4: 需要备案吗？
**A**: 不需要，GitHub Pages 是国外服务

### Q5: 会被墙吗？
**A**: GitHub 偶尔会被干扰，但 Pages 一般可以访问

---

**更新时间**: 2026-03-20  
**版本**: 1.0
