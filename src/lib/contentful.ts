
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

// Cache implementation for Contentful data
interface ContentfulCache {
  blogPosts: {
    all: Entry<BlogPostSkeleton>[] | null;
    bySlug: Record<string, Entry<BlogPostSkeleton>>;
    timestamp: number;
  }
}

// Initialize cache
const cache: ContentfulCache = {
  blogPosts: {
    all: null,
    bySlug: {},
    timestamp: 0
  }
};

// Cache expiration time (5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

// Check if cache is valid
const isCacheValid = () => {
  return cache.blogPosts.timestamp > 0 && 
         (Date.now() - cache.blogPosts.timestamp) < CACHE_TTL;
};

// Contentful client setup
const spaceId = 'fal2hauaxrft';
const accessToken = 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Get a single blog post by slug with caching
export const getBlogPostBySlug = async (
  slug: string
): Promise<Entry<BlogPostSkeleton> | null> => {
  try {
    // Check cache first
    if (isCacheValid() && cache.blogPosts.bySlug[slug]) {
      console.log('Using cached blog post for slug:', slug);
      return cache.blogPosts.bySlug[slug];
    }

    // Not in cache, fetch from API
    const response = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      'fields.slug': slug, // Use correct query format
      limit: 1,
      include: 2,
    });

    const post = response.items[0] ?? null;
    
    // Update cache if post found
    if (post) {
      cache.blogPosts.bySlug[slug] = post;
      cache.blogPosts.timestamp = Date.now();
    }

    return post;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    // Return cached version if available, even if expired
    if (cache.blogPosts.bySlug[slug]) {
      console.log('Using expired cached blog post for slug:', slug);
      return cache.blogPosts.bySlug[slug];
    }
    throw error;
  }
};

// Get all blog posts with caching
export const getAllBlogPosts = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  try {
    // Check cache first
    if (isCacheValid() && cache.blogPosts.all) {
      console.log('Using cached blog posts list');
      return cache.blogPosts.all;
    }

    // Not in cache, fetch from API
    const response = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });

    // Update cache
    cache.blogPosts.all = response.items;
    cache.blogPosts.timestamp = Date.now();
    
    // Also update individual post cache
    response.items.forEach(post => {
      if (post.fields && post.fields.slug) {
        cache.blogPosts.bySlug[post.fields.slug] = post;
      }
    });

    return response.items;
  } catch (error) {
    console.error('Error fetching all blog posts:', error);
    // Return cached version if available, even if expired
    if (cache.blogPosts.all) {
      console.log('Using expired cached blog posts list');
      return cache.blogPosts.all;
    }
    throw error;
  }
};

// Clear cache (useful for development or forced refreshes)
export const clearContentfulCache = () => {
  cache.blogPosts.all = null;
  cache.blogPosts.bySlug = {};
  cache.blogPosts.timestamp = 0;
  console.log('Contentful cache cleared');
};

// Add listener for popstate events to handle back button navigation
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    // Update cache timestamp to ensure it's still considered valid
    if (cache.blogPosts.timestamp > 0) {
      cache.blogPosts.timestamp = Date.now();
    }
  });
}
