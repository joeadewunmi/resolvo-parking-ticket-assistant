import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the App.tsx file to extract all routes
const appTsxPath = path.join(__dirname, '../../src/App.tsx');
const appTsxContent = fs.readFileSync(appTsxPath, 'utf8');

// Extract all path: "..." from App.tsx
const routeRegex = /path:\s*"([^"]*?)"/g;
const routes = [];
let match;

while ((match = routeRegex.exec(appTsxContent)) !== null) {
  const route = match[1];
  if (route !== '*' && route !== '/' && !route.includes(':')) {
    routes.push(route);
  }
}

// Read the sitemap.xml file
const sitemapPath = path.join(__dirname, '../../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Check which routes are missing from the sitemap
const missingRoutes = [];

for (const route of routes) {
  const sitemapEntry = `<loc>https://resolvo.uk/${route}</loc>`;
  
  if (!sitemapContent.includes(sitemapEntry)) {
    missingRoutes.push(route);
  }
}

// Output the missing routes
if (missingRoutes.length > 0) {
  console.log('The following routes are missing from sitemap.xml:');
  missingRoutes.forEach(route => console.log(`- ${route}`));
  
  console.log('\nAdd the following entries to sitemap.xml:');
  
  missingRoutes.forEach(route => {
    console.log(`  <url>
    <loc>https://resolvo.uk/${route}</loc>
    <lastmod>2024-04-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
  });
} else {
  console.log('All routes from App.tsx are included in sitemap.xml');
} 