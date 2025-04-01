
import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { EntrySkeletonType, Entry, EntryCollection } from 'contentful';

// Define interfaces for nested types
interface FileFields {
  file: {
    url: string;
  };
}

interface ImageAsset {
  fields: FileFields;
}

export interface Tag {
  sys: {
    id: string;
  };
  fields: {
    tagName: string;
    tagSlug: string;
  };
}

export interface Author {
  fields: {
    authorName: string;
    socialLinks?: string;
  };
}

// Define the blog post fields
export interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  content: Document;
  seoDescription?: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  tags?: Entry<TagSkeleton>[];
  authorName?: Entry<AuthorSkeleton>;
  relatedPost?: Entry<BlogPostSkeleton>[];
}

// Create proper skeleton types
export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
}

export interface TagSkeleton extends EntrySkeletonType {
  contentTypeId: 'tag';
  fields: {
    tagName: string;
    tagSlug: string;
  };
}

export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: {
    authorName: string;
    socialLinks?: string;
  };
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
    'fields.slug': slug,
    limit: 1,
    include: 2,
  } as any); // Type assertion to bypass the strict typing

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
  } as any); // Type assertion to bypass the strict typing
  
  return response.items;
};
