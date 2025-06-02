#!/bin/bash

# Exit on error: If any command fails, this prevents later steps from being executed
set -e

echo "🔁 Starting local CI/CD pipeline..."

# === FRONTEND ===
echo "🎨 Installing frontend deps"
cd frontend
# npm ci is a command that stands for "clean install." Unlike npm install , which can install packages from the node_modules cache, npm ci installs packages from the package-lock. json file.
npm ci

echo "📐 Linting frontend"
npm run lint

echo "🛠️ Building frontend"
# compiles the Next.js app for production
npm run build
cd ..

# === BACKEND ===
echo "🐍 Setting up backend"
cd backend
# Creates a Python virtual env (venv). This isolates Python packages from the system
python3 -m venv venv
# Activates the virtual environment
source venv/bin/activate
# Installs Python dependencies listed in requirements.txt
pip install -r requirements.txt

echo "🧪 Running backend tests"
pytest
deactivate
cd ..

echo "✅ CI/CD completed successfully"