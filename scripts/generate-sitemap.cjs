// This is a simple Node.js script that could be run during the build process
// to generate an updated sitemap.xml file

const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Dynamically import contentful only if needed
let contentful;
try {
  contentful = require('contentful');
} catch (error) {
  console.warn('Contentful package not found. Will skip blog posts in sitemap.');
}

// Try to import council names
let councilNames = [];
try {
  const councilModule = require('./council-slugs');
  councilNames = councilModule.councilNames || [];
} catch (error) {
  console.warn('Could not load council names. Will skip council routes in sitemap.');
}

// Initialize Contentful client only if credentials and package are available
let client = null;
const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;

if (contentful && spaceId && accessToken) {
  try {
    client = contentful.createClient({ space: spaceId, accessToken });
    console.log('Contentful client initialized successfully.');
  } catch (error) {
    console.warn('Error initializing Contentful client:', error.message);
  }
} else {
  console.warn('Skipping Contentful integration due to missing credentials or package.');
}

// Get static routes - these are always available
const getStaticRoutes = () => [
  '/',
  '/faq',
  '/appeal-hub',
  '/privacy-policy',
  '/blog'
];

// Get council routes
const getCouncilRoutes = () => {
  if (!councilNames.length) {
    console.warn('No council names available. Skipping council routes.');
    return [];
  }

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  console.log(`Generating ${councilNames.length} council routes for sitemap...`);
  return councilNames.map(name => `/${createSlug(name)}`);
};

// Get blog posts from Contentful with timeout and better error handling
const getBlogPosts = async () => {
  if (!client) {
    console.warn('Contentful client not available. Skipping blog posts in sitemap.');
    return [];
  }

  try {
    console.log('Fetching blog posts from Contentful...');
    
    // Create a promise with timeout
    const fetchWithTimeout = new Promise(async (resolve, reject) => {
      // Set 10 second timeout
      const timeout = setTimeout(() => {
        reject(new Error('Contentful API request timed out after 10 seconds'));
      }, 10000);
      
      try {
        const entries = await client.getEntries({
          content_type: 'blogPost',
          limit: 1000,
          order: '-sys.createdAt'
        });
        
        clearTimeout(timeout);
        resolve(entries);
      } catch (error) {
        clearTimeout(timeout);
        reject(error);
      }
    });
    
    const entries = await fetchWithTimeout;
    console.log(`Successfully fetched ${entries.items.length} blog posts for sitemap.`);
    return entries.items.map(post => `/blog/${post.fields.slug}`);
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error.message);
    // Return empty array, don't let this error stop the whole process
    return [];
  }
};

// Generate sitemap XML
const generateSitemap = async () => {
  try {
    console.log('Starting sitemap generation...');
    const staticRoutes = getStaticRoutes();
    const councilRoutes = getCouncilRoutes();
    
    // Don't let blog posts failure stop the whole process
    let blogPosts = [];
    try {
      blogPosts = await getBlogPosts();
    } catch (error) {
      console.error('Error getting blog posts, continuing with empty blog posts list:', error.message);
    }

    const allRoutes = [
      ...staticRoutes,
      ...councilRoutes,
      ...blogPosts
    ];

    console.log(`Generating sitemap with ${allRoutes.length} total routes...`);
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
    // Create a minimal sitemap with just the homepage in case of errors
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
    xml += '</urlset>';
    
    console.log('Generated fallback minimal sitemap due to errors');
    return xml;
  }
};

// Determine if we're running on Netlify
const isNetlify = !!process.env.NETLIFY;

// Get output directory - handle both local and Netlify paths
const getOutputDirectory = () => {
  if (isNetlify) {
    // On Netlify, we need to write to the publish directory
    // which should be /opt/build/repo/dist/
    const publishDir = process.env.PUBLISH_DIR || '/opt/build/repo/dist';
    return publishDir;
  } else {
    // Locally, we write to the public directory
    return path.join(__dirname, '../public');
  }
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
