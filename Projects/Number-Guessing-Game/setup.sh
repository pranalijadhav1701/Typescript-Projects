#!/bin/bash

# Number Guessing Game Setup Script
# This script sets up the TypeScript environment and installs dependencies

set -e  # Exit on any error

echo "🎯 Setting up Number Guessing Game..."
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo ""
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Project built successfully!"
else
    echo "❌ Failed to build project"
    exit 1
fi

# Create dist directory if it doesn't exist
mkdir -p dist

echo ""
echo "🎉 Setup completed successfully!"
echo "================================"
echo ""
echo "🚀 How to run the game:"
echo "   npm start          # Run the compiled game"
echo "   npm run dev        # Run in development mode"
echo "   npm run watch      # Watch for changes and rebuild"
echo ""
echo "🎮 Game Features:"
echo "   • Three difficulty levels (Easy, Medium, Hard)"
echo "   • Smart hints (too high/too low)"
echo "   • Game statistics tracking"
echo "   • Multiple rounds support"
echo "   • Clean CLI interface"
echo ""
echo "📖 For help:"
echo "   node dist/index.js --help"
echo ""
echo "Have fun playing! 🎯"
