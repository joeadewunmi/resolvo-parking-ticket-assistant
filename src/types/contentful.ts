
import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  content: Document;
  subtitle?: string;
  seoDescription?: string;
  featuredImage?: Asset;
  relatedPosts?: Entry<BlogPostFields>[];
  author?: Entry<AuthorFields>;
  tags?: string[];
}

export interface AuthorFields {
  name: string;
  bio?: string;
  avatar?: Asset;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export type BlogPost = Entry<BlogPostFields>;
export type Author = Entry<AuthorFields>;
export type PostMetaType = Entry<BlogPostFields>;

// Type aliases for backward compatibility
export type BlogPostSkeleton = BlogPost;
export type AuthorSkeleton = Author;
