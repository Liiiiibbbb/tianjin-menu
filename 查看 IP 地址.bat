@echo off
chcp 65001 >nul
cls

echo ========================================
echo    本机 IP 地址查询工具
echo ========================================
echo.
echo 正在查询本机 IP 地址...
echo.

ipconfig | findstr /c:"IPv4"

echo.
echo ========================================
echo 📱 手机访问地址格式：
echo.
echo   http://[你的IP 地址]:8000
echo.
echo 示例：
echo   如果 IP 是 192.168.31.102
echo   则手机访问：http://192.168.31.102:8000
echo.
echo ⚠️  注意：
echo   - 手机必须连接同一 WiFi
echo   - 启动服务器后才能访问
echo ========================================
echo.
pause
