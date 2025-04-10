
// This is a simple Node.js script that could be run during the build process
// to generate an updated sitemap.xml file

const fs = require('fs');
const path = require('path');

// Get all routes from App.tsx (simplified approach)
const getRoutesFromApp = () => {
  // In a real implementation, this would parse the routes from App.tsx
  // For now, we'll use a hardcoded list
  return [
    '/',
    '/blog',
    '/faq',
    '/appeal-hub',
    '/privacy-policy',
    
    // Original parking company routes
    '/euro-car-parks',
    '/ukpc',
    '/uk-parking-administration',
    '/uk-parking-enforcement',
    '/east-kent-nhs',
    '/all-parking-services',
    '/am-parking-services',
    '/anpr-365',
    '/parking-collection-services',
    '/apcoa-parking',
    
    // Previously added parking company routes
    '/workflow-dynamics',
    '/flashpark',
    '/university-of-kent',
    '/university-of-edinburgh',
    '/total-parking-solutions',
    '/total-car-parks',
    '/spring-parking',
    '/smart-parking',
    '/shield-security-services',
    '/select-parking',
    '/secure-parking-solutions',
    '/secure-a-space',
    '/safe-duty',
    '/saba-parking',
    '/rmc-parking',
    '/rfc-car-park-management',
    '/rcp-parking',
    '/q-park',
    '/atlas-enforcement',
    '/azure-parking',
    '/bay-sentry-solutions',
    '/britannia-parking',
    
    // Newly added parking company routes
    '/canterbury-christ-church-university',
    '/capital-car-park-control',
    '/car-park-services',
    '/carparkers',
    '/city-car-parks',
    '/city-permits',
    '/civil-enforcement',
    '/comply-park-solutions',
    '/dorset-county-hospital',
    '/westfield-parking',
    '/elite-car-parking',
    '/eternity-fire-security',
    '/fisc-parking-solutions',
    '/gbp-management',
    '/green-parking',
    '/highview-parking',
    '/horizon-parking',
    '/initial-parking',
    '/jd-parking-consultants',
    '/key-parking-uk',
    '/ldk-security-group',
    '/lodge-parking',
    '/leeds-teaching-hospitals',
    '/met-parking-services',
    '/minster-baywatch',
    '/mk1-parking',
    '/national-car-parks',
    '/nsgl',
    '/nsl',
    '/observices-parking',
    '/ocs',
    '/p4-parking',
    '/parkingeye',
    '/parking-control-solutions',
    '/parkmaven',
    '/premier-park',
    '/private-parking-solutions',
    '/professional-parking-solutions',
    '/pess'
  ];
};

const generateSitemap = (routes) => {
  const domain = 'https://resolvo.uk';
  const today = new Date().toISOString().split('T')[0];
  
  // Make sure there's absolutely nothing before the XML declaration
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    // Default values
    let priority = 0.8;
    let changefreq = 'monthly';
    
    // Special cases
    if (route === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (route === '/blog') {
      changefreq = 'weekly';
    } else if (route === '/privacy-policy') {
      priority = 0.5;
      changefreq = 'yearly';
    } else if (route === '/appeal-hub') {
      priority = 0.9;
    }
    
    xml += '  <url>\n';
    xml += `    <loc>${domain}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate the sitemap
const routes = getRoutesFromApp();
const sitemap = generateSitemap(routes);

// Write to file
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Use the flag 'w' to ensure the file is truncated before writing
// and specify utf8 encoding without BOM
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, { 
  encoding: 'utf8', 
  flag: 'w' 
});
console.log('Sitemap generated successfully at public/sitemap.xml');
