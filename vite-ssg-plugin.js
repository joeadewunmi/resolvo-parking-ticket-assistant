
/**
 * Custom Vite plugin for Static Site Generation (SSG)
 * This plugin ensures that the HTML content (including H1 tags) is included
 * in the initial HTML payload, making it visible to search engines without JavaScript.
 * 
 * Modified to process routes in batches to avoid Netlify build timeouts.
 */
import fs from 'fs';
import path from 'path';
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';

// Define the plugin function
export default function ssgPlugin() {
  return {
    name: 'vite-ssg-plugin',
    
    // Hook that runs after the build is complete
    closeBundle: async () => {
      console.log('Running SSG process with batched routes...');
      
      // Routes that need SSG
      const allRoutes = [
        '/',
        '/euro-car-parks',
        '/apcoa-parking',
        // More routes can be added as needed
        '/nsl',
        '/nsgl',
        '/flashpark',
        '/mk1-parking',
        '/green-parking',
        '/lodge-parking',
        '/key-parking-uk',
        '/gbp-management',
        '/horizon-parking',
        '/initial-parking',
        '/highview-parking',
        '/minster-baywatch',
        '/ldk-security-group',
        '/met-parking-services',
        '/fisc-parking-solutions',
        '/jd-parking-consultants',
        '/leeds-teaching-hospitals',
      ];

      // Read environment variable for batch size, default to 10
      const batchSizeEnv = process.env.SSG_BATCH_SIZE;
      const batchSize = batchSizeEnv ? parseInt(batchSizeEnv, 10) : 10;

      // Read environment variable for batch number, default to 1
      const batchNumberEnv = process.env.SSG_BATCH_NUMBER;
      const batchNumber = batchNumberEnv ? parseInt(batchNumberEnv, 10) : 1;

      console.log(`Processing batch ${batchNumber} with size ${batchSize}`);

      // Calculate which routes to process in this batch
      const startIndex = (batchNumber - 1) * batchSize;
      const endIndex = Math.min(startIndex + batchSize, allRoutes.length);
      
      // Get the routes for this batch
      const routesToProcess = allRoutes.slice(startIndex, endIndex);
      
      console.log(`Processing routes ${startIndex + 1} to ${endIndex} of ${allRoutes.length}`);
      console.log(`Routes in this batch:`, routesToProcess);
      
      // Create a Vite server for SSR
      const viteServer = await createServer({
        server: { middlewareMode: true },
        appType: 'custom'
      });
      
      // For each route, generate static HTML
      for (const route of routesToProcess) {
        try {
          console.log(`Generating static HTML for ${route}...`);
          
          // Get the output HTML file path
          const outputDir = path.resolve(process.cwd(), 'dist');
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
      console.log(`SSG batch ${batchNumber} completed (${routesToProcess.length} routes processed)`);
      
      // Output total process information
      if (endIndex >= allRoutes.length) {
        console.log(`All routes processed. Total routes: ${allRoutes.length}`);
      } else {
        console.log(`Batch ${batchNumber} complete. ${allRoutes.length - endIndex} routes remaining.`);
        console.log(`To process the next batch, set SSG_BATCH_NUMBER=${batchNumber + 1}`);
      }
    }
  };
}
