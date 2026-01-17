#!/bin/sh

# Setup git hooks for conventional commits enforcement

echo "Setting up git hooks..."

# Make the commit-msg hook executable
chmod +x .githooks/commit-msg

# Configure git to use the .githooks directory
git config core.hooksPath .githooks

echo "✅ Git hooks configured successfully!"
echo "Conventional commits will now be enforced."
