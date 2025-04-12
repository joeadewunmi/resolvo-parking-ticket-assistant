
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import ssgPlugin from './vite-ssg-plugin.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
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
  // Set the server port to 8080 as required
  server: {
    port: 8080
  },
}); 
