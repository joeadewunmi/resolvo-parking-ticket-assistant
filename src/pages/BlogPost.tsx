
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Entry } from 'contentful';
import { BlogPostSkeleton, getBlogPostBySlug } from '@/lib/contentful';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { BlogPostTags } from '@/components/blog/BlogPostTags';
import { Skeleton } from '@/components/ui/skeleton';
import BlogPostAuthor from '@/components/blog/BlogPostAuthor';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery<Entry<BlogPostSkeleton> | null>({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      if (!slug) return null;
      return getBlogPostBySlug(slug);
    },
    enabled: !!slug,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (post && post.fields) {
      document.title = `${post.fields.seoTitle || post.fields.title} | Resolvo`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.fields.seoDescription || '');
      }
    }
  }, [post]);

  useEffect(() => {
    if (error) {
      navigate('/blog', { replace: true });
    }
  }, [error, navigate]);

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

  if (!post || !post.fields) {
    return null;
  }

  const {
    title,
    publishDate,
    featuredImage,
    content,
    relatedPost,
    tags,
    authorName,
  } = post.fields;

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPostHeader
          title={title || ''}
          publishDate={publishDate}
          featuredImage={featuredImage}
          author={authorName}
        />
        
        <BlogPostContent content={content} />

        <BlogPostTags tags={tags || ''} />
        
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
