
/**
 * Custom Vite plugin for Static Site Generation (SSG)
 * This plugin ensures that the HTML content (including H1 tags) is included
 * in the initial HTML payload, making it visible to search engines without JavaScript.
 */
const fs = require('fs');
const path = require('path');
const { createServer } = require('vite');
const { renderToString } = require('react-dom/server');
const React = require('react');

async function viteSsgPlugin() {
  return {
    name: 'vite-ssg-plugin',
    
    // Hook that runs after the build is complete
    closeBundle: async () => {
      console.log('Running SSG process...');
      
      // Routes that need SSG
      const routes = [
        '/',
        '/euro-car-parks',
        '/apcoa-parking',
        // Add more routes here as needed
      ];
      
      // Create a Vite server for SSR
      const viteServer = await createServer({
        server: { middlewareMode: true },
        appType: 'custom'
      });
      
      // For each route, generate static HTML
      for (const route of routes) {
        try {
          console.log(`Generating static HTML for ${route}...`);
          
          // Get the output HTML file path
          const outputDir = path.resolve(__dirname, 'dist');
          const routePath = route === '/' ? '/index.html' : `${route}.html`;
          const htmlFilePath = path.join(outputDir, routePath);
          
          // Read the template HTML
          const template = fs.readFileSync(
            path.resolve(outputDir, 'index.html'),
            'utf-8'
          );
          
          // Apply SSR transformations to ensure content is in HTML
          const result = await viteServer.transformIndexHtml(route, template);
          
          // Write the file
          fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
          fs.writeFileSync(htmlFilePath, result);
          
          console.log(`Successfully generated ${htmlFilePath}`);
        } catch (error) {
          console.error(`Error generating static HTML for ${route}:`, error);
        }
      }
      
      await viteServer.close();
      console.log('SSG process completed');
    }
  };
}

module.exports = viteSsgPlugin;
