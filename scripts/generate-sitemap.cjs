// This is a simple Node.js script that could be run during the build process
// to generate an updated sitemap.xml file

const fs = require('fs');
const path = require('path');
const contentful = require('contentful');
const { councilNames } = require('./council-slugs');
require('dotenv').config();

// Initialize Contentful client only if credentials are available
const client = process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
  ? contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  : null;

// Get static routes
const getStaticRoutes = () => [
  '/',
  '/faq',
  '/appeal-hub',
  '/privacy-policy',
  // Parking company routes
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
  // Function to convert council name to URL-friendly slug
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
    const staticRoutes = getStaticRoutes();
    const councilRoutes = getCouncilRoutes();
    const blogPosts = await getBlogPosts();

    const allRoutes = [
      ...staticRoutes,
      ...councilRoutes,
      ...blogPosts
    ];

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
    throw error;
  }
};

// Main execution
async function main() {
  try {
    const sitemap = await generateSitemap();
    const publicDir = path.join(__dirname, '../public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write sitemap file
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, {
      encoding: 'utf8',
      flag: 'w'
    });

    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error in main execution:', error);
    process.exit(1);
  }
}

main();
