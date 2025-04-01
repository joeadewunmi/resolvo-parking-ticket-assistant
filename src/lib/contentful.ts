
import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Define type for Contentful's Entry responses
export interface ContentfulEntry<T> {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: T;
}

// Define interfaces for nested types
interface FileFields {
  file: {
    url: string;
  };
}

interface ImageAsset {
  fields: FileFields;
}

interface Tag {
  sys: {
    id: string;
  };
  fields: {
    tagName: string;
    tagSlug: string;
  };
}

interface Author {
  fields: {
    authorName: string;
    socialLinks?: string;
  };
}

// Define the actual blog post fields type
export interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  content: Document;
  seoDescription?: string;
  featuredImage?: ImageAsset;
  tags?: Tag[];
  authorName?: Author;
  relatedPost?: ContentfulEntry<BlogPostFields>[];
}

// Type for a complete blog post entry
export type BlogPost = ContentfulEntry<BlogPostFields>;

// Type for Contentful response
export interface ContentfulResponse<T> {
  items: ContentfulEntry<T>[];
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
