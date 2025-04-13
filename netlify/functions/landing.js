const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Preload and cache page data for better performance
const pageCache = new Map();
const PAGE_DATA_DIR = path.join(__dirname, '../../data/landings');

// Base HTML template that exactly matches the existing site design
const baseTemplate = (pageData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageData.title}</title>
  <meta name="description" content="${pageData.description}">
  <link rel="canonical" href="${pageData.canonicalUrl}">
  
  <!-- Open Graph tags -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${pageData.canonicalUrl}">
  <meta property="og:title" content="${pageData.title}">
  <meta property="og:description" content="${pageData.description}">
  <meta property="og:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png">
  
  <!-- Twitter card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageData.title}">
  <meta name="twitter:description" content="${pageData.description}">
  <meta name="twitter:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png">
  
  <!-- FAQ Structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${pageData.faq.map(item => `{
        "@type": "Question",
        "name": "${item.question}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${item.answer}"
        }
      }`).join(',')}
    ]
  }
  </script>
  
  <!-- WebPage Structured data -->
  <script type="application/ld+json">
    ${JSON.stringify(pageData.structuredData)}
  </script>
  
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
  
  <!-- CSS that matches the existing site -->
  <style>
    body, html {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #333;
    }
    .header {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 0;
    }
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      height: 40px;
    }
    .hero {
      background-color: #f9f9f9;
      padding: 4rem 0;
      text-align: center;
    }
    .hero-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1.5rem;
    }
    .hero-description {
      font-size: 1.25rem;
      color: #555;
      margin-bottom: 2rem;
    }
    .cta-button {
      display: inline-block;
      background-color: #4f46e5;
      color: white;
      font-weight: 600;
      text-decoration: none;
      padding: 1rem 2rem;
      border-radius: 0.375rem;
      font-size: 1.125rem;
      transition: background-color 0.2s;
    }
    .cta-button:hover {
      background-color: #4338ca;
    }
    .main-content {
      max-width: 800px;
      margin: 4rem auto;
      padding: 0 1rem;
    }
    .faq-section {
      margin: 4rem 0;
    }
    .faq-section h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 2rem;
      text-align: center;
    }
    .faq-item {
      margin-bottom: 1.5rem;
      border: 1px solid #e5e5e5;
      border-radius: 0.375rem;
      overflow: hidden;
    }
    .faq-question {
      background-color: #f5f5f5;
      padding: 1rem 1.5rem;
      font-weight: 600;
      cursor: pointer;
      position: relative;
    }
    .faq-answer {
      padding: 1.5rem;
      border-top: 1px solid #e5e5e5;
    }
    .footer {
      background-color: #333;
      color: white;
      padding: 3rem 0;
    }
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-links {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .footer-link {
      color: white;
      text-decoration: none;
    }
    .footer-link:hover {
      text-decoration: underline;
    }
    .footer-text {
      text-align: center;
      color: #aaa;
    }
  </style>
</head>
<body>
  <!-- Header exactly matching the example -->
  <header class="header">
    <div class="header-container">
      <a href="/">
        <img src="https://resolvo.uk/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png" alt="Resolvo Logo" class="logo">
      </a>
    </div>
  </header>

  <!-- Hero section -->
  <section class="hero">
    <div class="hero-container">
      <h1>${pageData.h1}</h1>
      <p class="hero-description">${pageData.description}</p>
      <a href="/form?company=${pageData.slug}" class="cta-button">Start Your Free Appeal</a>
    </div>
  </section>

  <!-- Main content - uses markdown content if present -->
  <div class="main-content">
    ${pageData.mdContent ? marked.parse(pageData.mdContent) : ''}
    
    <!-- FAQ Section -->
    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      ${pageData.faq.map(item => `
        <div class="faq-item">
          <div class="faq-question">${item.question}</div>
          <div class="faq-answer">${item.answer}</div>
        </div>
      `).join('')}
    </section>
    
    <!-- Final CTA -->
    <div style="text-align: center; margin: 3rem 0;">
      <a href="/form?company=${pageData.slug}" class="cta-button">Start Your Free Appeal</a>
    </div>
  </div>

  <!-- Footer matching the example site -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-links">
        <a href="/terms" class="footer-link">Terms of Service</a>
        <a href="/privacy" class="footer-link">Privacy Policy</a>
        <a href="/contact" class="footer-link">Contact Us</a>
      </div>
      <p class="footer-text">© ${new Date().getFullYear()} Resolvo. All rights reserved.</p>
    </div>
  </footer>

  <!-- Simple script to toggle FAQ answers -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const questions = document.querySelectorAll('.faq-question');
      questions.forEach(question => {
        question.addEventListener('click', () => {
          const answer = question.nextElementSibling;
          answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
      });
    });
  </script>
</body>
</html>
`;

// 404 template
const notFoundTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | Resolvo</title>
  <meta name="description" content="The page you were looking for could not be found. Try using our search to find a parking company.">
  <style>
    body, html {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #333;
    }
    .header {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 0;
    }
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      height: 40px;
    }
    .hero {
      background-color: #f9f9f9;
      padding: 4rem 0;
      text-align: center;
    }
    .hero-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1.5rem;
    }
    .hero-description {
      font-size: 1.25rem;
      color: #555;
      margin-bottom: 2rem;
    }
    .cta-button {
      display: inline-block;
      background-color: #4f46e5;
      color: white;
      font-weight: 600;
      text-decoration: none;
      padding: 1rem 2rem;
      border-radius: 0.375rem;
      font-size: 1.125rem;
      transition: background-color 0.2s;
    }
    .cta-button:hover {
      background-color: #4338ca;
    }
    .footer {
      background-color: #333;
      color: white;
      padding: 3rem 0;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-links {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .footer-link {
      color: white;
      text-decoration: none;
    }
    .footer-link:hover {
      text-decoration: underline;
    }
    .footer-text {
      text-align: center;
      color: #aaa;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-container">
      <a href="/">
        <img src="https://resolvo.uk/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png" alt="Resolvo Logo" class="logo">
      </a>
    </div>
  </header>

  <!-- Hero section -->
  <section class="hero">
    <div class="hero-container">
      <h1>Page Not Found</h1>
      <p class="hero-description">The page you were looking for could not be found. Try using our search to find a parking company.</p>
      <a href="/" class="cta-button">Go to Homepage</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-links">
        <a href="/terms" class="footer-link">Terms of Service</a>
        <a href="/privacy" class="footer-link">Privacy Policy</a>
        <a href="/contact" class="footer-link">Contact Us</a>
      </div>
      <p class="footer-text">© ${new Date().getFullYear()} Resolvo. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
`;

/**
 * Get page data from the filesystem
 * 
 * @param {string} slug - The page slug
 * @returns {Promise<Object>} - Page data object
 */
async function getPageData(slug) {
  // Check cache first
  if (pageCache.has(slug)) {
    return pageCache.get(slug);
  }
  
  // Path to JSON data file
  const dataPath = path.join(PAGE_DATA_DIR, `${slug}.json`);
  
  try {
    // Read and parse JSON file
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Optional: Read content from Markdown file
    try {
      const mdPath = path.join(PAGE_DATA_DIR, `${slug}.md`);
      const mdContent = fs.readFileSync(mdPath, 'utf8');
      data.mdContent = mdContent;
    } catch (err) {
      // No markdown file, or error reading it
      console.warn(`No markdown file found for ${slug}`);
    }
    
    // Cache the data
    pageCache.set(slug, data);
    
    return data;
  } catch (err) {
    console.error(`Error reading page data for ${slug}:`, err);
    return null;
  }
}

/**
 * Netlify function handler
 */
exports.handler = async (event, context) => {
  // Extract slug from path
  const path = event.path;
  const slug = path.replace(/^\/landing\//, '').replace(/\/$/, '');
  
  // Get page data
  const pageData = await getPageData(slug);
  
  // If page not found, return 404
  if (!pageData) {
    return {
      statusCode: 404,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=0, s-maxage=60'
      },
      body: notFoundTemplate
    };
  }
  
  // Render full HTML
  const html = baseTemplate(pageData);
  
  // Return response with caching headers
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=60'
    },
    body: html
  };
};

/*
 * SCALING NOTES:
 * 
 * 1. S3 Integration:
 *    To scale beyond local files, modify getPageData() to fetch from S3:
 *    
 *    const AWS = require('aws-sdk');
 *    const s3 = new AWS.S3();
 *    
 *    async function getPageData(slug) {
 *      if (pageCache.has(slug)) return pageCache.get(slug);
 *      
 *      try {
 *        const params = {
 *          Bucket: 'your-bucket-name',
 *          Key: `landings/${slug}.json`
 *        };
 *        
 *        const response = await s3.getObject(params).promise();
 *        const data = JSON.parse(response.Body.toString());
 *        
 *        // Load markdown if needed
 *        if (needsMarkdown) {
 *          const mdParams = {
 *            Bucket: 'your-bucket-name',
 *            Key: `landings/${slug}.md`
 *          };
 *          const mdResponse = await s3.getObject(mdParams).promise();
 *          data.mdContent = mdResponse.Body.toString();
 *        }
 *        
 *        pageCache.set(slug, data);
 *        return data;
 *      } catch (err) {
 *        console.error(`Error fetching from S3 for ${slug}:`, err);
 *        return null;
 *      }
 *    }
 */ 