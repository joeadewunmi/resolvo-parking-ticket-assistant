// @ts-nocheck
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');
// Import the plugin - use destructuring to avoid any naming issues in Netlify
const ssgPlugin = require('./vite-ssg-plugin.js');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    react(),
    // Use the plugin with a clear name to avoid any "viteSsgPlugin2" confusion
    ssgPlugin(),
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
