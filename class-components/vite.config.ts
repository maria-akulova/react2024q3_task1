/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',

  plugins: [react()],
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
