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
    watch: false,
    coverage: {
      provider: 'v8',
      ignoreEmptyLines: true,
    },
  },
});
