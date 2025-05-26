// This is a simple Node.js script that could be run during the build process
// to generate an updated sitemap.xml file

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from 'contentful';
import { councilNames } from './council-slugs.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Contentful client only if credentials are available
const client = process.env.VITE_CONTENTFUL_SPACE_ID && process.env.VITE_CONTENTFUL_ACCESS_TOKEN
  ? createClient({
      space: process.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    })
  : null;

// Get static routes
const getStaticRoutes = () => {
  // Main canonical pages
  const staticPages = [
    '/',
    '/faq',
    '/appeal-hub',
    '/privacy-policy',
    '/blog',
    '/appeal-help',
    '/councils'
  ];

  // Canonical parking company routes - verified and cleaned list
  const parkingCompanyRoutes = [
    '/all-parking-services',
    '/am-parking-services',
    '/anpr-365',
    '/apcoa-parking',
    '/atlas-enforcement',
    '/azure-parking',
    '/bay-sentry-solutions',
    '/britannia-parking',
    '/capital-car-park-control',
    '/car-park-services',
    '/carparkers',
    '/city-car-parks',
    '/city-permits',
    '/civil-enforcement',
    '/comply-park-solutions',
    '/dorset-county-hospital',
    '/east-kent-nhs',
    '/elite-car-parking',
    '/eternity-fire-security',
    '/euro-car-parks',
    '/fisc-parking-solutions',
    '/flashpark',
    '/gbp-management',
    '/green-parking',
    '/highview-parking',
    '/horizon-parking',
    '/jd-parking-consultants',
    '/key-parking-uk',
    '/ldk-security-group',
    '/leeds-teaching-hospitals',
    '/lodge-parking',
    '/met-parking-services',
    '/minster-baywatch',
    '/mk1-parking',
    '/national-car-parks',
    '/nsl',
    '/observices-parking',
    '/ocs',
    '/p4-parking',
    '/parking-collection-services',
    '/parking-control-solutions',
    '/parkingeye',
    '/parkmaven',
    '/pess',
    '/premier-park',
    '/private-parking-solutions',
    '/q-park',
    '/rcp-parking',
    '/rfc-car-park-management',
    '/rmc-parking',
    '/saba-parking',
    '/safe-duty',
    '/secure-a-space',
    '/secure-parking-solutions',
    '/select-parking',
    '/shield-security-services',
    '/smart-parking',
    '/spring-parking',
    '/total-car-parks',
    '/total-parking-solutions',
    '/uk-parking-administration',
    '/uk-parking-enforcement',
    '/ukpc',
    '/university-of-edinburgh',
    '/university-of-kent',
    '/westfield-parking',
    '/workflow-dynamics'
  ].sort(); // Sort alphabetically for better maintainability

  return [...staticPages, ...parkingCompanyRoutes];
};

// Get council routes - ensure only canonical URLs are included
const getCouncilRoutes = () => {
  // Use the function from council-slugs to ensure consistent URL format
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-') // Replace multiple consecutive hyphens with a single one
      .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
  };

  // Filter out any duplicate council names and ensure canonical format
  const uniqueCouncils = [...new Set(councilNames)];
  return uniqueCouncils
    .map(name => `/${createSlug(name)}`)
    .filter(route => route !== '/') // Remove empty routes
    .sort(); // Sort alphabetically for better maintainability
};

// Get blog posts from Contentful - ensure only canonical URLs
const getBlogPosts = async () => {
  if (!client) {
    console.warn('Contentful credentials not found. Skipping blog posts in sitemap.');
    console.log('VITE_CONTENTFUL_SPACE_ID exists:', !!process.env.VITE_CONTENTFUL_SPACE_ID);
    console.log('VITE_CONTENTFUL_ACCESS_TOKEN exists:', !!process.env.VITE_CONTENTFUL_ACCESS_TOKEN);
    return [];
  }

  try {
    console.log('Fetching blog posts from Contentful...');
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 1000,
      order: '-sys.createdAt',
      // Ensure we get published entries only
      'sys.publishedAt[exists]': true
    });

    console.log(`Retrieved ${entries.items.length} blog posts from Contentful`);
    
    // Debug output for each post
    entries.items.forEach(post => {
      console.log(`- Post: "${post.fields.title}", slug: ${post.fields.slug}, status: ${post.sys.status || 'unknown'}`);
    });

    // Filter out any entries without slugs and ensure canonical format
    const validPosts = entries.items
      .filter(post => post.fields.slug && typeof post.fields.slug === 'string')
      .map(post => `/blog/${post.fields.slug.toLowerCase().trim()}`)
      .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
      .sort(); // Sort alphabetically for better maintainability
      
    console.log(`Total valid blog posts for sitemap: ${validPosts.length}`);
    return validPosts;
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
    let blogPosts = [];
    
    try {
      blogPosts = await getBlogPosts();
    } catch (error) {
      console.error('Error getting blog posts, continuing with empty blog posts list');
    }

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
      } else if (route === '/blog' || route === '/councils') {
        priority = 0.9;
        changefreq = 'daily';
      } else if (route === '/appeal-hub') {
        priority = 0.9;
        changefreq = 'weekly';
      } else if (route === '/all-parking-services') {
        priority = 0.9;
        changefreq = 'weekly';
      }

      xml += '  <url>\n';
      xml += `    <loc>${domain}${route}</loc>\n`;
      xml += `    <lastmod>2025-05-01</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    });

    xml += '</urlset>';

    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml);

    // Log statistics after writing the file
    console.log('\nSitemap Generation Statistics:');
    console.log(`- Static Routes: ${staticRoutes.length}`);
    console.log(`- Council Routes: ${councilRoutes.length}`);
    console.log(`- Blog Posts: ${blogPosts.length}`);
    console.log(`- Total URLs: ${allRoutes.length}`);
    console.log(`\nSitemap successfully written to ${outputPath}`);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the generator
generateSitemap();
