
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useMatches } from "react-router-dom";

type RouteHandle = {
  title?: string;
  description?: string;
  h1?: string;
};

/**
 * SEOHead component that uses route metadata to insert proper SEO tags
 * This component ensures search engines see proper metadata and H1 tags
 * regardless of whether JavaScript is enabled
 */
const SEOHead = () => {
  const location = useLocation();
  const matches = useMatches();
  
  // Find current route handle with metadata
  const currentHandle = matches.find(match => match.handle)?.handle as RouteHandle | undefined;
  
  // Default metadata (used for homepage)
  const defaultTitle = "Fight Your Parking Ticket for Free in Minutes";
  const defaultDescription = "Got a parking ticket? Challenge it in minutes with Resolvo—the free, fast, and simple way to create a personalized appeal letter.";
  
  // Use route metadata or fallback to defaults
  const title = currentHandle?.title || defaultTitle;
  const description = currentHandle?.description || defaultDescription;
  const h1Text = currentHandle?.h1;
  
  // Current URL for canonical and social sharing
  const siteUrl = "https://resolvo.uk";
  const canonicalUrl = `${siteUrl}${location.pathname}`;
  
  return (
    <>
      <Helmet>
        {/* Basic metadata */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png`} />
        
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resolvo.uk" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png`} />
      </Helmet>
      
      {/* 
        This is the critical part for SEO:
        An H1 tag visible to search engines regardless of JavaScript execution
        We make it invisible to users since the React components will render their own H1s
        But search engines will see this one in the initial HTML
      */}
      {h1Text && (
        <h1 style={{ 
          position: 'absolute', 
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}>
          {h1Text}
        </h1>
      )}
    </>
  );
};

export default SEOHead;
