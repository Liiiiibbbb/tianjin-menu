# Git 工具安装指南（Windows）

## 📥 下载 Git

### 方法一：官网下载（推荐）

**步骤**：

1. **访问 Git 官网**
   ```
   https://git-scm.com/download/win
   ```

2. **自动下载**
   - 网页会自动开始下载
   - 下载文件：`Git-2.x.x-64-bit.exe`
   - 文件大小：约 50-60 MB

3. **如果未自动下载**
   - 点击 "Click here to download manually"
   - 手动下载安装包

---

## 🔧 安装 Git

### 步骤 1：运行安装程序

双击下载的 `Git-2.x.x-64-bit.exe` 文件

---

### 步骤 2：许可协议

- 阅读许可协议
- 勾选 "I accept the Agreement"
- 点击 **"Next"**

---

### 步骤 3：选择安装目录

**默认目录**：
```
C:\Program Files\Git
```

**建议**：
- ✅ 使用默认目录（推荐）
- ❌ 不要安装在中文路径

点击 **"Next"**

---

### 步骤 4：选择组件

**推荐选择**（全选）：
- ✅ Git Bash Here
- ✅ Git GUI Here
- ✅ Associate .gitconfig files
- ✅ Associate .gitignore files
- ✅ Add a Git Bash Profile to Windows Terminal
- ✅ Enable symbolic links

点击 **"Next"**

---

### 步骤 5：选择默认编辑器

**推荐选择**：
```
Use Visual Studio Code as Git's default editor
```

**或者**：
```
Use Notepad as Git's default editor
```

点击 **"Next"**

---

### 步骤 6：配置 PATH 设置（重要）

**选择**：
```
✅ Git from the command line and also from 3rd-party software
```

**说明**：
- 这个选项可以让您在命令行中使用 git 命令
- 必须选择这个选项

点击 **"Next"**

---

### 步骤 7：选择 HTTPS 传输后端

**选择**：
```
✅ Use the OpenSSL library
```

点击 **"Next"**

---

### 步骤 8：配置行尾转换（重要）

**选择**：
```
✅ Checkout Windows-style, commit Unix-style line endings
```

**说明**：
- Windows 使用 CRLF 行尾
- Linux/Mac 使用 LF 行尾
- 这个选项可以自动转换

点击 **"Next"**

---

### 步骤 9：选择终端模拟器

**选择**：
```
✅ Use MinTTY (the default terminal of MSYS2)
```

点击 **"Next"**

---

### 步骤 10：开始安装

- 点击 **"Install"** 开始安装
- 等待安装完成（约 1-2 分钟）

---

### 步骤 11：完成安装

点击 **"Finish"** 完成安装

---

## ✅ 验证安装

### 打开 Git Bash

1. **在桌面右键**
2. **选择 "Git Bash Here"**
3. **输入命令**：
   ```bash
   git --version
   ```

### 查看输出

如果显示类似内容，说明安装成功：
```
git version 2.43.0.windows.1
```

---

## 🔧 配置 Git

### 设置用户名和邮箱

在 Git Bash 中输入以下命令（替换为您的信息）：

```bash
# 设置用户名（使用您的 GitHub 用户名）
git config --global user.name "您的 GitHub 用户名"

# 设置邮箱（使用注册 GitHub 的邮箱）
git config --global user.email "您的邮箱@example.com"
```

**示例**：
```bash
git config --global user.name "zhangsan"
git config --global user.email "zhangsan@qq.com"
```

### 验证配置

```bash
# 查看配置
git config --list
```

应该能看到：
```
user.name=您的用户名
user.email=您的邮箱
```

---

## 📋 安装完成检查清单

- [ ] Git 已下载安装
- [ ] 安装过程中无错误
- [ ] `git --version` 显示版本号
- [ ] 已配置用户名
- [ ] 已配置邮箱
- [ ] 可以在 Git Bash 中使用 git 命令

---

## ❓ 常见问题

### Q1: 下载速度慢怎么办？

**A**: 使用清华镜像源：
```
https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/
```

### Q2: 安装失败怎么办？

**A**: 
1. 以管理员身份运行安装程序
2. 关闭杀毒软件后重试
3. 确保磁盘空间充足

### Q3: git 命令无法识别？

**A**: 
1. 重新安装，确保步骤 6 选择正确
2. 重启电脑
3. 重新打开 Git Bash

---

## 📞 需要帮助？

- **官方文档**: https://git-scm.com/doc
- **Git 教程**: https://git-scm.com/book/zh/v2

---

**更新时间**: 2026-03-25  
**版本**: 1.0
