
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        whatWeDo: resolve(process.cwd(), 'what-we-do.html'),
        divisions: resolve(process.cwd(), 'divisions.html'),
        team: resolve(process.cwd(), 'team.html'),
        contact: resolve(process.cwd(), 'contact.html'),
      },
    },
  },
});
