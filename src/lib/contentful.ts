
import { createClient, Asset, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Define the blog post fields based on the actual Contentful model
export interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  featuredImage?: Asset; // Use SDK Asset type
  content: Document;
  relatedPost?: Entry<BlogPostSkeleton>[];
  seoTitle?: string;
  seoDescription?: string;
  tags?: string; // Or string[] if changed in model
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

// Contentful client setup
const spaceId = 'fal2hauaxrft';
const accessToken = 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Get a single blog post by slug
export const getBlogPostBySlug = async (
  slug: string
): Promise<Entry<BlogPostSkeleton> | null> => {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug, // This is the correct syntax for Contentful
    limit: 1,
    include: 2,
  });

  return response.items[0] ?? null;
};

// Get all blog posts
export const getAllBlogPosts = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
  });

  return response.items;
};
