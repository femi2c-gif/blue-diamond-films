
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',

    rollupOptions: {
      input: {
        index: resolve(rootDir, 'index.html'),
        about: resolve(rootDir, 'about.html'),
        whatWeDo: resolve(rootDir, 'what-we-do.html'),
        divisions: resolve(rootDir, 'divisions.html'),
        team: resolve(rootDir, 'team.html'),
        contact: resolve(rootDir, 'contact.html'),
      },
    },
  },
});
