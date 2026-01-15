@echo off
echo ========================================
echo 🚀 Izudd's Portfolio - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
echo.
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ Dependencies installed successfully!
    echo.
    echo 📝 Next steps:
    echo    1. Read SETUP_GUIDE.md for quick customization
    echo    2. Update your personal information
    echo.
    echo 🚀 To start development server:
    echo    npm run dev
    echo.
    echo 📦 To build for production:
    echo    npm run build
    echo.
    echo Happy coding! 🎉
) else (
    echo.
    echo ❌ Installation failed. Please try:
    echo    1. Delete node_modules folder
    echo    2. Run: npm install
    echo.
)

pause
