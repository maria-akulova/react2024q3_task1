# react2024q3_task1

# Task 5
cd react2024q3_task1
git checkout main
git checkout -b forms

# Create project
`npm create vite@latest class-components -- --template react-ts`

# Linters
`npm add -D eslint prettier eslint-plugin-prettier eslint-config-prettier`
`npm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`
`npm add -D eslint-plugin-react`
`npm add -D eslint-plugin-react-compiler`

# Adjust typescript rules
`    '@typescript-eslint/no-explicit-any': 'error',`

# Add scripts for running linters
`  "lint": "eslint --cache . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",`

` "format:fix": "npx prettier . --cache --write src/**/*.*",`

# Add Husky and int-staged
`npm add -D lint-staged husky`

# React Hook Form
npm install react-hook-form

# Yup (for schema validation)
npm install yup @hookform/resolvers

# Redux Toolkit and React-Redux
npm install @reduxjs/toolkit react-redux

# React Router (if you're using Next.js, note that routing is already handled by Next.js)
npm install react-router-dom
