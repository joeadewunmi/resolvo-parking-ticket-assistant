
import fs from 'fs';
import path from 'path';
import { contentfulClient, BlogPostSkeleton } from '../lib/contentful';
import { Entry } from 'contentful';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Function to fetch all blog posts from Contentful
async function fetchAllBlogPosts(): Promise<Entry<BlogPostSkeleton>[]> {
  try {
    const response = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      limit: 1000 // Get all blog posts (up to 1000)
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

// Function to extract blog post URLs from Contentful entries
async function getBlogPostUrls(): Promise<string[]> {
  const blogPosts = await fetchAllBlogPosts();
  return blogPosts.map(post => {
    if (post.fields && post.fields.slug) {
      return `/blog/${post.fields.slug}`;
    }
    return '';
  }).filter(Boolean); // Remove empty strings
}

export const generateSitemap = async (
  staticRoutes: string[], 
  domain: string = 'https://resolvo.uk'
): Promise<void> => {
  if (typeof window !== 'undefined') {
    console.error('Sitemap generator should only be run in Node.js environment during build');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  
  try {
    // Get dynamic blog post URLs
    const blogPostUrls = await getBlogPostUrls();
    console.log(`Found ${blogPostUrls.length} blog post URLs for sitemap`);
    
    // Combine static routes with blog post URLs
    const allRoutes = [...staticRoutes, ...blogPostUrls];
    
    const entries: SitemapEntry[] = allRoutes.map(route => {
      // Default values for most pages
      let priority = 0.8;
      let changefreq: SitemapEntry['changefreq'] = 'monthly';
      
      // Special cases
      if (route === '/') {
        priority = 1.0;
        changefreq = 'weekly';
      } else if (route === '/blog') {
        changefreq = 'weekly';
      } else if (route.startsWith('/blog/')) {
        // Individual blog posts
        changefreq = 'monthly';
        priority = 0.7;
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
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
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
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, { 
      encoding: 'utf8', 
      flag: 'w' 
    });
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

// This is a simplified implementation of static routes
export const extractRoutesFromApp = (): string[] => {
  // All the static routes
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
