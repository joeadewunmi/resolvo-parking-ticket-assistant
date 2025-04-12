const { generateSEOHTML } = require('../../src/utils/seo-injector');

exports.handler = async (event, context) => {
  try {
    // Get the requested path
    const pathname = event.path;
    
    // Generate SEO HTML
    const seoHTML = generateSEOHTML(pathname);
    
    // Return the SEO HTML
    return {
      statusCode: 200,
      body: seoHTML,
      headers: {
        'Content-Type': 'text/html',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}; 