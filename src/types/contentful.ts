import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: string;
  slug: string;
  date: string;
  content: Document;
  excerpt?: string;
  featuredImage?: Asset;
  relatedPost?: Asset;
  author?: Entry<AuthorFields>;
  tags?: string[];
}

export interface AuthorFields {
  name: string;
  bio?: string;
  avatar?: Asset;
}

export type BlogPost = Entry<{ fields: BlogPostFields }>;
export type Author = Entry<{ fields: AuthorFields }>;

// Type aliases for backward compatibility
export type BlogPostSkeleton = BlogPost;
export type AuthorSkeleton = Author; 