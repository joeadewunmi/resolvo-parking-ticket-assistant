
import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { EntrySkeletonType } from 'contentful';

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

// Define the blog post fields
export interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  content: Document;
  seoDescription?: string;
  featuredImage?: ImageAsset;
  tags?: Tag[];
  authorName?: Author;
  relatedPost?: BlogPostSkeleton[];
}

// Create a proper skeleton type that extends EntrySkeletonType
export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
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
