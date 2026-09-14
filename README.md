# react2024q3_task1

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

# Restfull API
`https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml`

