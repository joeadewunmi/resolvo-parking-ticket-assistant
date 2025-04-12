
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteSsgPlugin from './vite-ssg-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSsgPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Configure build options for proper SSG
  build: {
    ssrManifest: true,
    sourcemap: true,
  },
  // Add SSR config for improved performance
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
