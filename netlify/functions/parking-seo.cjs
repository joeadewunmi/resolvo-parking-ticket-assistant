/**
 * Netlify Function to serve SEO-optimized HTML for parking company pages
 * This provides search engines with properly formatted HTML including H1 tags
 * while regular users still get the React SPA experience
 */

// Helper to create SEO-friendly HTML for parking company pages
function generateParkingPageHTML(company) {
  // Default values if company data isn't found
  const companyName = company.name || 'Parking Company';
  const slug = company.slug || '';
  const title = `Appeal Your ${companyName} Fine for Free with Resolvo`;
  const description = `Got a ${companyName} parking ticket? Resolvo will write a free appeal letter for you based on UK parking laws, so you can fight back`;
  const h1 = `Appeal Your ${companyName} Fine`;
  
  // Create HTML with proper SEO metadata and visible H1
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://resolvo.uk/${slug}">
  
  <!-- Open Graph tags -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resolvo.uk/${slug}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png">
  
  <!-- Twitter card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="resolvo.uk">
  <meta property="twitter:url" content="https://resolvo.uk/${slug}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png">
  
  <!-- Structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${title}",
    "description": "${description}",
    "url": "https://resolvo.uk/${slug}"
  }
  </script>

  <!-- Main app styles -->
  <link rel="stylesheet" href="/assets/index-DJImr23P.css">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png">
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9G6LX46ZK"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J9G6LX46ZK');
  </script>
</head>
<body>
  <!-- SEO-optimized content that matches the React app's rendering -->
  <div id="root">
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <a href="/" class="flex items-center">
            <img src="/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png" alt="Resolvo Logo" class="h-8" width="32" height="32">
          </a>
        </div>
      </div>
    </header>
    
    <main>
      <!-- Hero section with H1 tag that search engines need -->
      <div class="bg-[#FFD700] py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="text-4xl font-bold text-primary">${h1}</h1>
              <p class="mt-4 text-lg text-primary/80">
                Got a ${companyName} ticket? Get a free appeal written in minutes to help you fight it.
              </p>
              <div class="mt-8">
                <a href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo" class="px-6 py-3 bg-primary text-white rounded-lg">
                  Appeal now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional content sections similar to React app -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center">How to Appeal a ${companyName} Fine</h2>
          <!-- Minimal content for SEO -->
        </div>
      </div>
    </main>
    
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p>© ${new Date().getFullYear()} Resolvo. All rights reserved.</p>
          </div>
          <div class="flex space-x-4">
            <a href="/faq" class="text-gray-300 hover:text-white">FAQ</a>
            <a href="/appeal-help" class="text-gray-300 hover:text-white">Appeal Hub</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  
  <!-- Include React app scripts for regular users -->
  <script src="/assets/index-D5qoVjcH.js" type="module"></script>
</body>
</html>`;
}

// Known parking companies - keeps common ones cached for better performance
const knownCompanies = {
  'apcoa-parking': 'APCOA Parking',
  'euro-car-parks': 'Euro Car Parks',
  'parkingeye': 'ParkingEye',
  'ukpc': 'UKPC',
  'nsl': 'NSL',
  'smart-parking': 'Smart Parking',
  'rcp-parking': 'RCP Parking',
  'premier-park': 'Premier Park',
  'minster-baywatch': 'Minster Baywatch',
  'uk-parking-control': 'UK Parking Control',
  'uk-parking-enforcement': 'UK Parking Enforcement',
  'uk-parking-administration': 'UK Parking Administration'
};

/**
 * Validates if a slug represents a valid parking company
 * This is crucial for preventing random URLs from generating landing pages
 */
function isValidParkingCompany(slug) {
  // Check if it's in our known companies list
  if (knownCompanies[slug]) return true;
  
  // Check if it matches common parking company patterns
  const validPatterns = [
    /-parking$/,           // ends with -parking
    /-car-park$/,          // ends with -car-park
    /-car-parks$/,         // ends with -car-parks
    /^park-/,              // starts with park-
    /-park$/               // ends with -park
  ];
  
  return validPatterns.some(pattern => pattern.test(slug));
}

/**
 * Format slug to company name if not in our known list
 * Converts slugs like "parking-collection-services" to "Parking Collection Services"
 */
function formatCompanyName(slug) {
  if (knownCompanies[slug]) {
    return knownCompanies[slug];
  }
  
  // Format slug to friendly name
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * The main Netlify Function handler
 */
exports.handler = async (event) => {
  try {
    // Get path from event
    const path = event.path;
    
    // Extract the slug - remove leading slash and any trailing slashes
    const slug = path.replace(/^\//, '').replace(/\/$/, '');
    
    // Validate if this is a legitimate parking company
    if (!isValidParkingCompany(slug)) {
      console.log(`Invalid parking company slug requested: ${slug}`);
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'public, max-age=0, must-revalidate'
        },
        body: await require('fs').promises.readFile('./public/404.html', 'utf8')
      };
    }
    
    // Create company data
    const companyName = formatCompanyName(slug);
    const company = { name: companyName, slug };
    
    // Check user agent to identify search engine bots
    const userAgent = event.headers['user-agent'] || '';
    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
    
    // Cache duration - longer for bots to reduce function invocations
    const cacheDuration = isBot ? 3600 : 600; // 1 hour for bots, 10 minutes for users
    
    // Generate the HTML
    const html = generateParkingPageHTML(company);
    
    // Return the HTML with appropriate caching headers
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': `public, max-age=0, s-maxage=${cacheDuration}`
      },
      body: html
    };
  } catch (error) {
    console.error('Error generating parking company page:', error);
    
    // Return a graceful error page
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-store'
      },
      body: `
        <!DOCTYPE html>
        <html>
          <head><title>Error - Resolvo</title></head>
          <body>
            <h1>Something went wrong</h1>
            <p>Please try again later or contact support if the problem persists.</p>
            <a href="/">Return to homepage</a>
          </body>
        </html>
      `
    };
  }
}; 