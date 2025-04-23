/**
 * Netlify Function to serve SEO-optimized HTML for council parking pages
 * This provides search engines with properly formatted HTML including H1 tags
 * while regular users still get the React SPA experience
 */

// Helper to create SEO-friendly HTML for council pages
function generateCouncilPageHTML(council) {
  // Default values if council data isn't found
  const councilName = council.name || 'Council';
  const slug = council.slug || '';
  const title = `Appeal Your ${councilName} Parking Fine for Free Using Resolvo`;
  const description = `Got a ${councilName} parking ticket? Use Resolvo to generate a free appeal letter in minutes. Based on the latest UK parking rules.`;
  const h1 = `Appeal Your ${councilName} Parking Fine`;
  
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
            <img src="/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png" alt="Resolvo Logo" class="h-8">
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
                Got a ${councilName} ticket? Get a free appeal written in minutes to help you fight it.
              </p>
              <div class="mt-8">
                <a href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo" class="px-6 py-3 bg-primary text-white rounded-lg">
                  Appeal now
                </a>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.png" 
                alt="Parking officer issuing a ticket from ${councilName}"
                class="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Process Section with H2 -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center">How to Appeal a ${councilName} Fine in 3 Steps</h2>
          <!-- Minimal content for SEO -->
        </div>
      </div>
      
      <!-- Appeal Section -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="relative">
              <img 
                src="/lovable-uploads/65a99b15-80e2-4483-80cb-824db7613e33.png" 
                alt="Appeal letter example for a ${councilName} fine generated by Resolvo"
                class="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 class="text-3xl font-bold">Don't let a parking ticket ruin your day</h2>
              <p class="mt-4 text-lg">
                ${councilName} issues many parking tickets every day. But many of them can be challenged if you know the rules.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-8">${councilName} Fine FAQs</h2>
          <!-- Minimal FAQ section for SEO -->
          <div class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold text-lg mb-2">What are the grounds for appealing a ${councilName} parking ticket?</h3>
              <p>You can appeal a ${councilName} parking ticket (PCN) on several grounds including incorrect signage, valid permit/ticket was displayed, vehicle broken down, and more.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold text-lg mb-2">How long do I have to appeal a ${councilName} PCN?</h3>
              <p>For a ${councilName} PCN, you typically have 28 days from the date of issue to make a formal challenge.</p>
            </div>
          </div>
          <div class="text-center mt-8">
            <a href="/faq" class="text-blue-600">View all frequently asked questions</a>
            <div class="mt-2">
              <a href="/appeal-help" class="text-blue-600">Back to Appeal Hub</a>
            </div>
          </div>
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

/**
 * Format slug to council name
 * Converts slugs like "birmingham-city-council" to "Birmingham City Council"
 */
function formatCouncilName(slug) {
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
  // Get path from event
  const path = event.path;
  
  // Extract the slug - remove leading slash and any trailing slashes
  const slug = path.replace(/^\//, '').replace(/\/$/, '');
  
  // Create council data
  const councilName = formatCouncilName(slug);
  const council = { name: councilName, slug };
  
  // Check user agent to identify search engine bots
  const userAgent = event.headers['user-agent'] || '';
  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
  
  // Cache duration - longer for bots to reduce function invocations
  const cacheDuration = isBot ? 3600 : 600; // 1 hour for bots, 10 minutes for users
  
  // Generate the HTML
  const html = generateCouncilPageHTML(council);
  
  // Return the HTML with appropriate caching headers
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Cache-Control': `public, max-age=0, s-maxage=${cacheDuration}`
    },
    body: html
  };
}; 