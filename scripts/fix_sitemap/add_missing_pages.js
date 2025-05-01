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
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Check which routes are missing from the sitemap
const missingRoutes = [];

for (const route of routes) {
  const sitemapEntry = `<loc>https://resolvo.uk/${route}</loc>`;
  
  if (!sitemapContent.includes(sitemapEntry)) {
    missingRoutes.push(route);
  }
}

if (missingRoutes.length === 0) {
  console.log('No missing routes to add. Sitemap is up-to-date.');
  process.exit(0);
}

console.log(`Found ${missingRoutes.length} missing routes to add to sitemap.xml`);

// Group missing routes by type
const parkingRoutes = missingRoutes.filter(route => 
  route.includes('parking') || 
  route.includes('park') || 
  route.includes('permit') ||
  route.includes('enforcement') ||
  route.includes('security') ||
  route.includes('nhs') ||
  route.includes('hospital') ||
  route.includes('university')
);

const otherRoutes = missingRoutes.filter(route => !parkingRoutes.includes(route));

// Insert the parking routes after the "Parking Companies" section
if (parkingRoutes.length > 0) {
  const parkingEntriesXml = parkingRoutes.map(route => `
  <url>
    <loc>https://resolvo.uk/${route}</loc>
    <lastmod>2024-04-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('');
  
  // Find the Parking Companies comment and insert after it
  const parkingCompaniesPosition = sitemapContent.indexOf('<!-- Parking Companies -->');
  if (parkingCompaniesPosition !== -1) {
    // Find the next significant section to insert before
    const nextSectionPosition = sitemapContent.indexOf('<!-- England - Metropolitan Boroughs -->');
    if (nextSectionPosition !== -1) {
      sitemapContent = sitemapContent.slice(0, nextSectionPosition) + 
                     parkingEntriesXml + 
                     '\n\n' + 
                     sitemapContent.slice(nextSectionPosition);
      console.log(`Added ${parkingRoutes.length} parking route entries to sitemap.xml`);
    } else {
      console.error('Could not find insertion point for parking routes');
    }
  } else {
    console.error('Could not find "Parking Companies" section in sitemap.xml');
  }
}

// Insert other routes at the beginning of the sitemap
if (otherRoutes.length > 0) {
  const otherEntriesXml = otherRoutes.map(route => `
  <url>
    <loc>https://resolvo.uk/${route}</loc>
    <lastmod>2024-04-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('');
  
  // Find the main pages section to insert after
  const mainPagesPosition = sitemapContent.indexOf('<!-- Main Pages -->');
  if (mainPagesPosition !== -1) {
    // Find the next section to insert before
    const nextSectionPosition = sitemapContent.indexOf('<!-- Parking Companies -->');
    if (nextSectionPosition !== -1) {
      sitemapContent = sitemapContent.slice(0, nextSectionPosition) + 
                     otherEntriesXml + 
                     '\n\n' + 
                     sitemapContent.slice(nextSectionPosition);
      console.log(`Added ${otherRoutes.length} other route entries to sitemap.xml`);
    } else {
      console.error('Could not find insertion point for other routes');
    }
  } else {
    console.error('Could not find "Main Pages" section in sitemap.xml');
  }
}

// Write the updated sitemap back to the file
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('Sitemap.xml has been updated successfully!'); 