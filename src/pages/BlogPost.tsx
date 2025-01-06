import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contentfulClient, BlogPost } from '@/lib/contentful';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostTags from '@/components/blog/BlogPostTags';
import BlogPostAuthor from '@/components/blog/BlogPostAuthor';
import RelatedPosts from '@/components/blog/RelatedPosts';
import FAQSection from '@/components/home/FAQSection';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const response = await contentfulClient.getEntries<BlogPost>({
        content_type: 'blogPost',
        'fields.slug[match]': slug,
        limit: 1,
        include: 2,
      });
      return response.items[0];
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 bg-[#FFFFFF]">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-12 bg-[#FFFFFF]">
        <div className="text-center text-red-500">
          Failed to load blog post. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 bg-[#FFFFFF]">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>

      <article className="prose prose-lg mx-auto">
        <BlogPostHeader
          title={post.fields.title}
          publishDate={post.fields.publishDate}
          featuredImage={post.fields.featuredImage}
          author={post.fields.authorName}
        />

        {post.fields.content && (
          <BlogPostContent content={post.fields.content} />
        )}

        {post.fields.tags && (
          <BlogPostTags tags={post.fields.tags} />
        )}

        {post.fields.authorName && (
          <BlogPostAuthor author={post.fields.authorName} />
        )}

        {post.fields.relatedPost && (
          <RelatedPosts posts={post.fields.relatedPost} />
        )}
      </article>

      <div className="mt-16">
        <FAQSection limit={4} />
      </div>
    </div>
  );
};

export default BlogPostPage;