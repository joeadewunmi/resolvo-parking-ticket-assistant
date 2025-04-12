
// @ts-nocheck
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');
// Use require for the plugin
const viteSsgPlugin = require('./vite-ssg-plugin.js');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    react(),
    viteSsgPlugin(), // Use the plugin function directly
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
