@echo off
chcp 65001 >nul
cls

echo ========================================
echo    天津菜点餐系统 - 服务器启动
echo ========================================
echo.
echo 正在获取本机 IP 地址...
echo.

:: 获取 IPv4 地址
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set "ip=%%a"
    goto :found
)

:found
:: 去除空格
set "ip=%ip: =%"

echo ========================================
echo    服务器已启动成功！
echo ========================================
echo.
echo 📱 访问地址：
echo.
echo   本地访问：http://localhost:8000
echo   手机访问：http://%ip%:8000
echo.
echo 📋 使用说明：
echo.
echo   1. 电脑上访问：http://localhost:8000
echo   2. 手机访问步骤：
echo      - 确保手机连接同一 WiFi
echo      - 打开手机浏览器
echo      - 输入：http://%ip%:8000
echo.
echo ⚠️  注意事项：
echo   - 手机和电脑必须连接同一 WiFi
echo   - 如果无法访问，请检查防火墙设置
echo   - 按 Ctrl+C 可停止服务器
echo.
echo ========================================
echo.

:: 启动服务器
python -m http.server 8000

pause
