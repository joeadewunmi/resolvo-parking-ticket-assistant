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

          // Add detailed logging
          console.log('=== BLOG POST DEBUG ===');
          console.log('Fetched Post:', fetchedPost);
          console.log('Related Posts Field:', fetchedPost.fields?.relatedPost);
          
          // Get the related posts - handle as Entry References array
          const relatedPostLinks = fetchedPost.fields?.relatedPost || [];
          
          if (relatedPostLinks.length > 0) {
            // Since include: 2 is set, these should be resolved entries
            const resolvedPosts = relatedPostLinks
              .filter(ref => {
                if (!ref || typeof ref !== 'object') return false;
                
                // Check if it's a resolved entry
                if ('sys' in ref && 'fields' in ref) {
                  return ref.sys?.type === 'Entry' && 
                         ref.sys?.contentType?.sys?.id === 'blogPost' &&
                         !!ref.fields?.title;
                }
                return false;
              })
              .map(ref => ref as unknown as BlogPost);

            console.log('Resolved Posts:', resolvedPosts);
            if (resolvedPosts.length > 0) {
              setRelatedPosts(resolvedPosts);
            } else {
              // If no valid resolved posts, fetch fallback
              const fallbackPosts = await client.getEntries<BlogPostSkeleton>({
                content_type: 'blogPost',
                order: ['-fields.publishDate'],
                limit: 3,
                'sys.id[ne]': fetchedPost.sys.id,
                include: 2,
              });
              
              if (!isMounted) return;
              setRelatedPosts(fallbackPosts.items as unknown as BlogPost[]);
            }
          } else {
            // If no related posts, fetch recent posts as fallback
            const allPostsResponse = await client.getEntries<BlogPostSkeleton>({
              content_type: 'blogPost',
              order: ['-fields.publishDate'],
              limit: 3,
              'sys.id[ne]': fetchedPost.sys.id,
              include: 2,
            });
            
            if (!isMounted) return;
            setRelatedPosts(allPostsResponse.items as unknown as BlogPost[]);
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