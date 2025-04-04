
import fs from 'fs';
import path from 'path';

// Note: This is a Node.js utility that would be used during build time
// It's not meant to be imported directly in the React application

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (routes: string[], domain: string = 'https://resolvo.uk'): void => {
  if (typeof window !== 'undefined') {
    console.error('Sitemap generator should only be run in Node.js environment during build');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  
  const entries: SitemapEntry[] = routes.map(route => {
    // Default values for most pages
    let priority = 0.8;
    let changefreq: SitemapEntry['changefreq'] = 'monthly';
    
    // Special cases
    if (route === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (route.includes('blog') && !route.includes('/blog/')) {
      changefreq = 'weekly';
    } else if (route === '/privacy-policy') {
      priority = 0.5;
      changefreq = 'yearly';
    } else if (route === '/appeal-hub') {
      priority = 0.9;
    }
    
    return {
      url: `${domain}${route}`,
      lastmod: today,
      changefreq,
      priority
    };
  });
  
  // Generate XML with no whitespace before declaration
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${entry.url}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</loc>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  // Write to file with explicit utf8 encoding and no BOM
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, { encoding: 'utf8', flag: 'w' });
  console.log('Sitemap generated successfully at public/sitemap.xml');
};

// This is a simplified implementation
// In a real scenario, you would need to traverse the React element tree
// to find all Route components and extract their paths
export const extractRoutesFromApp = (): string[] => {
  // For now, we'll just return a hardcoded list of routes
  return [
    '/',
    '/blog',
    '/faq',
    '/appeal-hub',
    '/privacy-policy',
    '/euro-car-parks',
    '/ukpc',
    '/uk-parking-administration',
    '/uk-parking-enforcement',
    '/east-kent-nhs',
    '/all-parking-services',
    '/am-parking-services',
    '/anpr-365',
    '/parking-collection-services',
    '/apcoa-parking'
  ];
};

// Usage example (in a build script):
// const routes = extractRoutesFromApp();
// generateSitemap(routes);
