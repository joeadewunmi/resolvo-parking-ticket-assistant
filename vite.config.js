
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// Import the plugin using namespace import pattern
import * as viteSsgPlugin from './vite-ssg-plugin.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSsgPlugin.default(), // Use the default export from the namespace import
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
