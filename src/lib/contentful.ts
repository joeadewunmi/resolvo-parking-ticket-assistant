
import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { EntrySkeletonType, Entry, EntryCollection } from 'contentful';

// Define interfaces for Asset types
export interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      details?: {
        size?: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
    title?: string;
    description?: string;
  };
}

// Define the blog post fields based on the actual Contentful model
export interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  featuredImage?: Asset;
  content: Document;
  relatedPost?: Entry<BlogPostSkeleton>[];
  seoTitle?: string;
  seoDescription?: string;
  tags?: string; // Short text field in Contentful
  authorName?: Entry<AuthorSkeleton>;
}

// Define the author fields
export interface AuthorFields {
  authorName: string;
  twitter?: string;
  profilePicture?: Asset;
}

// Define the tag fields
export interface TagFields {
  tagName: string;
  tagSlug: string;
}

// Create proper skeleton types for each content type
export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
}

export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: AuthorFields;
}

export interface TagSkeleton extends EntrySkeletonType {
  contentTypeId: 'tag';
  fields: TagFields;
}

// Type for Contentful response
export interface ContentfulResponse<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}

// Use provided Contentful credentials
const spaceId = 'fal2hauaxrft';
const accessToken = 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Helper function to get blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<Entry<BlogPostSkeleton> | null> => {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug as any, // Type assertion for dynamic query field
    limit: 1,
    include: 2,
  });

  if (response.items.length === 0) {
    return null;
  }
  
  return response.items[0];
};

// Helper function to get all blog posts
export const getAllBlogPosts = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
  });
  
  return response.items;
};
