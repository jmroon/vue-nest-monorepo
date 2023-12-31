/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/vue-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    vue(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
});
