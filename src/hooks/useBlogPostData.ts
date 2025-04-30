import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClient } from '@/lib/contentful';
import type { BlogPost, BlogPostSkeleton } from '@/types/contentful';
import type { Entry } from 'contentful';

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
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setPost(null);
    setRelatedPosts([]);
    setLoading(true);
    setError(null);

    if (!slug) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchBlogPost = async () => {
      try {
        const client = getClient();
        // Fetch the main post with related posts included
        const response = await client.getEntries<BlogPostSkeleton>({
          content_type: 'blogPost',
          'fields.slug': slug,
          include: 2, // Include linked entries (related posts)
        });

        if (!isMounted) return;

        const fetchedPost = response.items[0];
        if (!fetchedPost) {
          setError(new Error('Blog post not found'));
          setPost(null);
        } else {
          setPost(fetchedPost);

          // Get the related posts from the post's relatedPost field
          const relatedPostRefs = (fetchedPost.fields?.relatedPost as unknown as Entry<any>[]) || [];
          
          // If there are no related posts, fetch some recent posts as fallback
          if (relatedPostRefs.length === 0) {
            const allPostsResponse = await client.getEntries<BlogPostSkeleton>({
              content_type: 'blogPost',
              order: ['-fields.publishDate'],
              limit: 3,
              'sys.id[ne]': fetchedPost.sys.id,
              include: 2,
            });
            
            if (!isMounted) return;
            setRelatedPosts(allPostsResponse.items);
          } else {
            setRelatedPosts(relatedPostRefs as BlogPost[]);
          }
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('Error fetching blog post:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch blog post'));
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBlogPost();

    return () => {
      isMounted = false;
    };
  }, [slug, navigate]);

  return { post, relatedPosts, loading, error };
}; 