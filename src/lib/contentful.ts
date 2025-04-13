import { createClient } from 'contentful';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Define BlogPostSkeleton interface to avoid module import errors
interface BlogPostSkeleton {
  title: string;
  slug: string;
  date: string;
  content: any;
  excerpt: string;
  featuredImage?: any;
}

// Initialize Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Rich text options for rendering Contentful rich text
export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => React.createElement("strong", {}, text),
    [MARKS.ITALIC]: (text: ReactNode) => React.createElement("em", {}, text),
    [MARKS.UNDERLINE]: (text: ReactNode) => React.createElement("u", {}, text),
    [MARKS.CODE]: (text: ReactNode) => React.createElement("code", { className: "px-1 py-0.5 bg-gray-100 rounded" }, text),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => React.createElement("p", { className: "mb-6" }, children),
    [BLOCKS.HEADING_1]: (_node: any, children: ReactNode) => React.createElement("h1", { className: "text-3xl font-bold mb-4 mt-8" }, children),
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => React.createElement("h2", { className: "text-2xl font-bold mb-3 mt-6" }, children),
    [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => React.createElement("h3", { className: "text-xl font-bold mb-2 mt-5" }, children),
    [BLOCKS.HEADING_4]: (_node: any, children: ReactNode) => React.createElement("h4", { className: "text-lg font-bold mb-2 mt-4" }, children),
    [BLOCKS.HEADING_5]: (_node: any, children: ReactNode) => React.createElement("h5", { className: "text-base font-bold mb-2 mt-3" }, children),
    [BLOCKS.HEADING_6]: (_node: any, children: ReactNode) => React.createElement("h6", { className: "text-sm font-bold mb-2 mt-3" }, children),
    [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => React.createElement("ul", { className: "list-disc ml-6 mb-6" }, children),
    [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => React.createElement("ol", { className: "list-decimal ml-6 mb-6" }, children),
    [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => React.createElement("li", { className: "mb-1" }, children),
    [BLOCKS.QUOTE]: (_node: any, children: ReactNode) => React.createElement("blockquote", { className: "border-l-4 border-primary pl-4 italic my-6" }, children),
    [BLOCKS.HR]: () => React.createElement("hr", { className: "my-8 border-gray-200" }),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const imageUrl = file?.url;
      if (!imageUrl) return null;
      
      return React.createElement("div", { className: "my-6" }, [
        React.createElement("img", {
          key: "img",
          src: `https:${imageUrl}`,
          alt: description || title,
          className: "rounded-lg max-w-full h-auto"
        }),
        title && React.createElement("p", { key: "caption", className: "text-sm text-gray-500 mt-2 text-center" }, title)
      ].filter(Boolean));
    },
    [INLINES.HYPERLINK]: (node: any, children: ReactNode) => {
      const { uri } = node.data;
      const isInternal = uri.includes('mysite.com'); // Replace with your domain
      
      if (isInternal) {
        return React.createElement(Link, {
          to: uri.replace('https://mysite.com', ''),
          className: "text-primary hover:underline"
        }, children);
      } else {
        return React.createElement("a", {
          href: uri,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary hover:underline"
        }, children);
      }
    },
  },
};

// Fetch all blog posts
export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],  // Use correct Field ID for sorting
      include: 2, // Include linked entries up to 2 levels deep
    });
    return response.items as any[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// Fetch a single blog post by slug
export const getBlogPostBySlug = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
};

// Function to render Contentful rich text to React components
export const renderRichText = (richText: any) => {
  if (!richText) return null;
  return documentToReactComponents(richText, richTextOptions);
};
