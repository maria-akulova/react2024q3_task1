/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',

  plugins: [tsconfigPaths(), react()],
  esbuild: {
    include: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.ts', '**/*.tsx'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    watch: false,
    browser: {
      enabled: true,
      name: 'chrome',
      provider: 'webdriverio',
    },
    coverage: {
      provider: 'istanbul',
      exclude: [
        '**/*.data.ts',
        '**/*.test.tsx',
        'src/components/errorboundary/ErrorBoundary.tsx',
        '**/*.cjs',
        '**/*.mjs',
        'src/components/index.ts',
        'src/services/api.ts',
        'vite.config.ts',
        'dist/',
        'src/App.tsx',
        'src/main.tsx',
        'src/tests/',
      ],
    },
  },
});
