
import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { Asset, EntrySkeletonType, Entry, EntryCollection } from 'contentful';

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
  } as any); // Type assertion to avoid strict typing issues with dynamic field queries

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
