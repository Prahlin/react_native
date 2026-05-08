#!/bin/bash

cd /Users/prahlin/Desktop/react_native || exit 1

OUTPUT_FILE="chatgpt-project-context.txt"

rm -f "$OUTPUT_FILE"

{
  echo "# React Native Full Project Context"
  echo
  echo "Generated on: $(date)"
  echo
  echo "## Included folders/files"
  echo "- .expo/*.json"
  echo "- .expo/*.md"
  echo "- .vscode/*.json"
  echo "- app/*"
  echo "- components/*"
  echo "- constants/*"
  echo "- hooks/*"
  echo "- scripts/*"
  echo "- styles/*"
  echo "- root-level project files"
  echo
  echo "## Excluded"
  echo "- node_modules"
  echo "- .git"
  echo "- ios"
  echo "- android"
  echo "- package-lock.json"
  echo "- image/video/font/binary assets"
  echo

  for file in \
    .gitignore \
    App.js \
    app.json \
    eslint.config.js \
    expo-env.d.ts \
    package.json \
    README.md \
    tsconfig.json \
    "tsconfig 2.json" \
    project_context.md \
    .expo/*.json \
    .expo/*.md \
    .vscode/*.json \
    app/*.js \
    app/*.jsx \
    app/*.ts \
    app/*.tsx \
    components/*.js \
    components/*.jsx \
    components/*.ts \
    components/*.tsx \
    constants/*.js \
    constants/*.jsx \
    constants/*.ts \
    constants/*.tsx \
    hooks/*.js \
    hooks/*.jsx \
    hooks/*.ts \
    hooks/*.tsx \
    scripts/*.js \
    scripts/*.jsx \
    scripts/*.ts \
    scripts/*.tsx \
    styles/*.js \
    styles/*.jsx \
    styles/*.ts \
    styles/*.tsx
  do
    [ -f "$file" ] || continue

    echo
    echo "=================================================="
    echo "FILE: ./$file"
    echo "=================================================="
    cat "$file"
  done
} > "$OUTPUT_FILE"

echo "Done: $OUTPUT_FILE"
echo
echo "Included files:"
grep "^FILE:" "$OUTPUT_FILE"