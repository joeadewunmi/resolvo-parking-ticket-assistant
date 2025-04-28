import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClient } from '@/lib/contentful';
import type { BlogPost, BlogPostSkeleton } from '@/types/contentful';

interface UseBlogPostDataReturn {
  post: BlogPost | null;
  relatedPosts: BlogPost[];
  loading: boolean;
  error: Error | null;
}

export const useBlogPostData = (slug: string | undefined): UseBlogPostDataReturn => {
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null); // Add error state

  useEffect(() => {
    // Reset state when slug changes
    setPost(null);
    setRelatedPosts([]);
    setLoading(true);
    setError(null);

    if (!slug) {
      // Optionally handle missing slug case, e.g., navigate or set error
      // For now, just stop loading and return empty state
      setLoading(false); 
      // navigate('/404'); // Or navigate to a not-found page
      return;
    }

    let isMounted = true; // Flag to prevent state updates on unmounted component

    const fetchBlogPost = async () => {
      try {
        const client = getClient();
        // Fetch the main post
        const response = await client.getEntries<BlogPostSkeleton>({
          content_type: 'blogPost',
          'fields.slug': slug,
          include: 2,
        });

        if (!isMounted) return; // Exit if component unmounted during fetch

        const fetchedPost = response.items[0];
        if (!fetchedPost) {
          // Handle post not found - navigate or set specific error
          // navigate('/404');
          setError(new Error('Blog post not found'));
          setPost(null); // Ensure post is null
        } else {
          setPost(fetchedPost);

          // Fetch related posts only after finding the main post
          const allPostsResponse = await client.getEntries<BlogPostSkeleton>({
            content_type: 'blogPost',
            order: ['-fields.publishDate'],
            include: 2, // Adjust include based on what RelatedPosts needs
          });
          
          if (!isMounted) return; // Check again after second fetch

          const filteredRelatedPosts = allPostsResponse.items.filter(p => p.sys.id !== fetchedPost.sys.id);
          setRelatedPosts(filteredRelatedPosts);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('Error fetching blog post:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch blog post'));
        // Optionally navigate on error: navigate('/error');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBlogPost();

    // Cleanup function to set isMounted flag to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [slug, navigate]); // Keep navigate in dependency array if used for navigation on error/not found

  return { post, relatedPosts, loading, error };
}; 