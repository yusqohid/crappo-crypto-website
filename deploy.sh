#!/bin/bash

# CRAPPO Deployment Script for Vercel
# Run this script to prepare and deploy to Vercel

echo "🚀 CRAPPO Vercel Deployment Script"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/spa
rm -rf node_modules/.vite

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checks..."
npm run typecheck

# Build for production
echo "🏗️  Building for production..."
npm run build:vercel

# Verify build output
if [ -d "dist/spa" ]; then
    echo "✅ Build successful!"
    echo "📊 Build size:"
    du -sh dist/spa/*
else
    echo "❌ Build failed!"
    exit 1
fi

# Optional: Deploy to Vercel (uncomment if you want auto-deploy)
# echo "🚀 Deploying to Vercel..."
# vercel --prod

echo ""
echo "✨ Ready for deployment!"
echo "📖 Read DEPLOYMENT.md for detailed instructions"
echo ""
echo "To deploy manually:"
echo "1. Run: vercel"
echo "2. Follow the prompts"
echo "3. Or use Vercel Dashboard to connect your GitHub repo"
