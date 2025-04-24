// This is a simple Node.js script that could be run during the build process
// to generate an updated sitemap.xml file

const fs = require('fs');
const path = require('path');
const contentful = require('contentful');
const { councilNames } = require('./council-slugs');
require('dotenv').config();

// Initialize Contentful client only if credentials are available
const client = process.env.VITE_CONTENTFUL_SPACE_ID && process.env.VITE_CONTENTFUL_ACCESS_TOKEN
  ? contentful.createClient({
      space: process.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    })
  : null;

// Get static routes
const getStaticRoutes = () => [
  '/',
  '/faq',
  '/appeal-hub',
  '/privacy-policy',
  '/blog',
  // Parking company routes - CRITICAL FOR SEO
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

// Get council routes
const getCouncilRoutes = () => {
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  return councilNames.map(name => `/${createSlug(name)}`);
};

// Get blog posts from Contentful
const getBlogPosts = async () => {
  if (!client) {
    console.warn('Contentful credentials not found. Skipping blog posts in sitemap.');
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 1000,
      order: '-sys.createdAt'
    });

    return entries.items.map(post => `/blog/${post.fields.slug}`);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Generate sitemap XML
const generateSitemap = async () => {
  try {
    console.log('Starting sitemap generation...');
    const staticRoutes = getStaticRoutes();
    console.log(`Added ${staticRoutes.length} static routes to sitemap`);
    
    const councilRoutes = getCouncilRoutes();
    console.log(`Added ${councilRoutes.length} council routes to sitemap`);
    
    let blogPosts = [];
    try {
      blogPosts = await getBlogPosts();
      console.log(`Added ${blogPosts.length} blog posts to sitemap`);
    } catch (error) {
      console.error('Error getting blog posts, continuing with empty blog posts list');
    }

    const allRoutes = [
      ...staticRoutes,
      ...councilRoutes,
      ...blogPosts
    ];

    console.log(`Total sitemap URLs: ${allRoutes.length}`);
    const domain = 'https://resolvo.uk';
    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    allRoutes.forEach(route => {
      let priority = 0.8;
      let changefreq = 'monthly';

      // Customize priority and frequency based on route type
      if (route === '/') {
        priority = 1.0;
        changefreq = 'weekly';
      } else if (route.startsWith('/blog/')) {
        priority = 0.9;
        changefreq = 'weekly';
      } else if (route === '/blog') {
        priority = 0.9;
        changefreq = 'daily';
      } else if (route === '/appeal-hub') {
        priority = 0.9;
        changefreq = 'weekly';
      } else if (route.startsWith('/uk') || route.includes('parking')) {
        // Parking company pages are important for SEO
        priority = 0.9;
        changefreq = 'weekly';
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
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Create a minimal sitemap with just the homepage and critical pages
    const domain = 'https://resolvo.uk';
    const today = new Date().toISOString().split('T')[0];
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    xml += '  <url>\n';
    xml += `    <loc>${domain}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>1.0</priority>\n';
    xml += '  </url>\n';
    // Always include critical parking pages even in fallback
    xml += '  <url>\n';
    xml += `    <loc>${domain}/ukpc</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.9</priority>\n';
    xml += '  </url>\n';
    xml += '  <url>\n';
    xml += `    <loc>${domain}/euro-car-parks</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.9</priority>\n';
    xml += '  </url>\n';
    xml += '</urlset>';
    
    console.log('Generated fallback minimal sitemap due to errors');
    return xml;
  }
};

// Determine if we're running on Netlify
const isNetlify = !!process.env.NETLIFY;

// Get output directory - always write to public since we're running before the build
const getOutputDirectory = () => {
  // Always write to the public directory since the build process will copy it to dist
  return path.join(__dirname, '../public');
};

// Main execution
async function main() {
  try {
    console.log('Starting sitemap generation script...');
    console.log(`Running in ${isNetlify ? 'Netlify' : 'local'} environment`);
    
    const sitemap = await generateSitemap();
    const outputDir = getOutputDirectory();
    
    console.log(`Writing sitemap to ${outputDir}`);
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      console.log(`Creating output directory: ${outputDir}`);
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write sitemap file
    const sitemapPath = path.join(outputDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');

    console.log(`Sitemap successfully written to ${sitemapPath}`);
    process.exit(0); // Explicitly exit with success
  } catch (error) {
    console.error('Critical error in sitemap generation:', error);
    // Even in case of critical error, exit with success to prevent build failure
    // This way the build completes but we just might not have a sitemap
    process.exit(0); 
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection in sitemap generator:', error);
  // Exit with success to prevent build failure
  process.exit(0);
});

// Run the main function
main();
