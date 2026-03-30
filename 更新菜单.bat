@echo off
chcp 65001 >nul
cls
echo ========================================
echo    天津菜点餐系统 - 更新菜单
echo ========================================
echo.

REM 检查 Git 是否已安装
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Git，请先安装 Git
    echo 下载地址：https://git-scm.com/download/win
    pause
    exit /b 1
)

REM 检查是否在 Git 仓库中
if not exist ".git" (
    echo [错误] 当前目录不是 Git 仓库
    echo 请先运行：git init
    pause
    exit /b 1
)

echo 步骤 1: 添加文件到暂存区...
git add .
if %errorlevel% neq 0 (
    echo [错误] git add 失败
    pause
    exit /b 1
)
echo ✓ 添加完成
echo.

echo 步骤 2: 提交修改
git status
echo.
set /p comment="请输入修改说明（例如：更新菜品价格）: "
if "%comment%"=="" (
    set comment=更新菜单
)
git commit -m "%comment%"
if %errorlevel% neq 0 (
    echo [提示] 没有检测到修改，无需提交
    pause
    exit /b 0
)
echo ✓ 提交完成
echo.

echo 步骤 3: 推送到 GitHub...
git push
if %errorlevel% neq 0 (
    echo [错误] git push 失败，请检查网络连接
    pause
    exit /b 1
)
echo ✓ 推送完成
echo.

echo ========================================
echo    更新成功！
echo    GitHub Pages 将在 1-2 分钟内自动更新
echo    访问地址：https://liiiiibbbb.github.io/tianjin-menu/
echo ========================================
echo.
pause
