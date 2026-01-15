#!/bin/bash

echo "🚀 Izudd's Portfolio - Quick Start Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Read SETUP_GUIDE.md for quick customization"
    echo "   2. Update your personal information in:"
    echo "      - src/data/projects.ts"
    echo "      - src/data/skills.ts"
    echo "      - src/components/Terminal/commands.ts"
    echo ""
    echo "🚀 To start development server:"
    echo "   npm run dev"
    echo ""
    echo "📦 To build for production:"
    echo "   npm run build"
    echo ""
    echo "Happy coding! 🎉"
else
    echo ""
    echo "❌ Installation failed. Please try:"
    echo "   1. Delete node_modules folder"
    echo "   2. Run: npm install"
    echo ""
fi
