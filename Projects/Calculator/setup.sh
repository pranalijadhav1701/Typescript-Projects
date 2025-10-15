#!/bin/bash

# TypeScript Calculator Setup Script
echo "🧮 Setting up TypeScript Calculator..."
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building TypeScript project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Project built successfully"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 Setup complete! You can now:"
echo ""
echo "CLI Calculator:"
echo "  npm run dev     # Start interactive CLI calculator"
echo "  npm start       # Run compiled CLI calculator"
echo ""
echo "Web Calculator:"
echo "  npm run serve   # Start web server"
echo "  Then open: http://localhost:3000/src/index.html"
echo ""
echo "Development:"
echo "  npm run watch   # Watch mode for development"
echo ""
echo "📖 Read README.md for detailed usage instructions"
echo ""
echo "Happy calculating! 🧮✨"
