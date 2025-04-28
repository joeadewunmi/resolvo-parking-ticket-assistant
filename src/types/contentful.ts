
import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: {
    title: string;
    slug: string;
    publishDate: string;
    content: Document;
    subtitle?: string;
    seoDescription?: string;
    featuredImage?: Asset;
    relatedPost?: Asset;
    authorName?: Entry<AuthorFields>;
    tags?: string[];
  };
}

export interface AuthorFields extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: {
    name: string;
    bio?: string;
    avatar?: Asset;
  };
}

export type BlogPost = Entry<BlogPostFields>;
export type Author = Entry<AuthorFields>;
export type BlogPostType = BlogPost; // For backward compatibility
export type PostMetaType = Entry<any>; // Generic type for related posts

// Type aliases for backward compatibility
export type BlogPostSkeleton = BlogPost;
export type AuthorSkeleton = Author;
