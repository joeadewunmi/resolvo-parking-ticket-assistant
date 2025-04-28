
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

// Define the complete entry types
export interface BlogPostSkeleton extends EntrySkeletonType {
  fields: BlogPostFields;
  contentTypeId: string;
}

export interface AuthorSkeleton extends EntrySkeletonType {
  fields: AuthorFields;
  contentTypeId: string;
}

// Type aliases for better usability
export type BlogPost = Entry<BlogPostFields>;
export type Author = Entry<AuthorFields>;
export type PostMetaType = Entry<BlogPostFields>;
