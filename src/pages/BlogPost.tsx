import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Entry } from 'contentful';
import { BlogPostSkeleton, getBlogPostBySlug } from '@/lib/contentful';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostTags from '@/components/blog/BlogPostTags';
import { Skeleton } from '@/components/ui/skeleton';
import BlogPostAuthor from '@/components/blog/BlogPostAuthor';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { RefreshCw, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error, refetch, isError } = useQuery<Entry<BlogPostSkeleton> | null>({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      if (!slug) return null;
      return getBlogPostBySlug(slug);
    },
    enabled: !!slug,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes (matches cache TTL)
    retry: 2,
  });

  useEffect(() => {
    if (post && post.fields) {
      // Set basic meta tags
      const title = post.fields.seoTitle || post.fields.title || 'Blog Post';
      const description = post.fields.seoDescription || '';
      document.title = `${title} | Resolvo`;
      
      // Set description meta tag
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }

      // Set Open Graph meta tags
      setOrCreateMetaTag('og:title', title);
      setOrCreateMetaTag('og:description', description);
      setOrCreateMetaTag('og:type', 'article');
      
      // Set Twitter card meta tags
      setOrCreateMetaTag('twitter:card', 'summary_large_image');
      setOrCreateMetaTag('twitter:title', title);
      setOrCreateMetaTag('twitter:description', description);

      // Set featured image as OG image if available
      if (post.fields.featuredImage?.fields?.file?.url) {
        const imageUrl = `https:${post.fields.featuredImage.fields.file.url}`;
        setOrCreateMetaTag('og:image', imageUrl);
        setOrCreateMetaTag('twitter:image', imageUrl);
      }
    }
    
    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // No need to remove standard meta tags, but could reset OG tags if needed
    };
  }, [post]);

  // Helper function to set or create meta tags
  const setOrCreateMetaTag = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  };

  const handleRetry = () => {
    refetch();
  };

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <div className="flex items-center mb-6">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="ml-4">
              <Skeleton className="h-5 w-40 mb-1" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <Skeleton className="w-full h-64 mb-8" />
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="mb-8 bg-red-50 border border-red-200">
            <AlertTitle className="text-lg font-semibold text-red-700">
              Post Not Found
            </AlertTitle>
            <AlertDescription className="text-red-600 mt-2">
              We couldn't find the blog post you're looking for. It may have been removed or the URL might be incorrect.
            </AlertDescription>
          </Alert>
          
          <div className="flex gap-4 mt-6">
            <Button 
              onClick={handleBackToBlog} 
              variant="secondary"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
            
            <Button 
              onClick={handleRetry} 
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!post.fields) {
    return (
      <div className="min-h-screen py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="mb-8 bg-amber-50 border border-amber-200">
            <AlertTitle className="text-lg font-semibold text-amber-700">
              Post Content Not Available
            </AlertTitle>
            <AlertDescription className="text-amber-600 mt-2">
              This post exists but its content couldn't be loaded correctly.
            </AlertDescription>
          </Alert>
          
          <Button 
            onClick={handleBackToBlog} 
            variant="secondary"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Safely extract fields with fallback values
  const title = post.fields.title || '';
  const publishDate = post.fields.publishDate;
  const featuredImage = post.fields.featuredImage;
  const content = post.fields.content;
  
  // Add proper type checking or default values
  const tags = post.fields.tags || '';
  const authorName = post.fields.authorName;
  const relatedPost = Array.isArray(post.fields.relatedPost) ? post.fields.relatedPost : [];

  // Ensure content is valid before rendering
  const hasValidContent = content && content.nodeType && content.content;

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        
        <BlogPostHeader
          title={title}
          publishDate={publishDate}
          featuredImage={featuredImage}
          author={authorName}
        />
        
        {hasValidContent && <BlogPostContent content={content} />}

        <BlogPostTags tags={tags} />
        
        {authorName && (
          <BlogPostAuthor author={authorName} />
        )}

        {relatedPost && relatedPost.length > 0 && (
          <RelatedPosts posts={relatedPost} />
        )}
      </div>
    </div>
  );
};

export default BlogPost;
