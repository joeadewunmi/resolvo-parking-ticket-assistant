
import { createClient } from 'contentful';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostSkeleton } from '@/types/contentful';
import { TypeBlogPostFields } from './types';

// Initialize Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Rich text options for rendering Contentful rich text
export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code className="px-1 py-0.5 bg-gray-100 rounded">{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-6">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-3 mt-6">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-bold mb-2 mt-5">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-lg font-bold mb-2 mt-4">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-base font-bold mb-2 mt-3">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-sm font-bold mb-2 mt-3">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-6 mb-6">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-6 mb-6">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const imageUrl = file?.url;
      return imageUrl ? (
        <div className="my-6">
          <img
            src={`https:${imageUrl}`}
            alt={description || title}
            className="rounded-lg max-w-full h-auto"
          />
          {title && <p className="text-sm text-gray-500 mt-2 text-center">{title}</p>}
        </div>
      ) : null;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      const isInternal = uri.includes('mysite.com'); // Replace with your domain
      
      return isInternal ? (
        <Link to={uri.replace('https://mysite.com', '')} className="text-primary hover:underline">
          {children}
        </Link>
      ) : (
        <a href={uri} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {children}
        </a>
      );
    },
  },
};

// Fetch all blog posts
export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      order: '-fields.date',
      include: 2, // Include linked entries up to 2 levels deep
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// Fetch a single blog post by slug
export const getBlogPostBySlug = async (slug: string) => {
  try {
    const response = await client.getEntries<BlogPostSkeleton>({
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
