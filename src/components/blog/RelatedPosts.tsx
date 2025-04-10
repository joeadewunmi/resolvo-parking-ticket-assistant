
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Entry } from 'contentful';
import { BlogPostSkeleton } from '@/lib/contentful';

interface RelatedPostsProps {
  posts: Entry<BlogPostSkeleton>[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) return null;

  // Helper to safely get image URL
  const getImageUrl = (post: Entry<BlogPostSkeleton>): string | undefined => {
    if (
      !post || 
      !post.fields || 
      !post.fields.featuredImage || 
      !post.fields.featuredImage.fields || 
      !post.fields.featuredImage.fields.file || 
      !post.fields.featuredImage.fields.file.url
    ) {
      return undefined;
    }
    return `https:${post.fields.featuredImage.fields.file.url}`;
  };

  // Helper to safely get post title
  const getPostTitle = (post: Entry<BlogPostSkeleton>): string => {
    if (!post || !post.fields || typeof post.fields.title !== 'string') {
      return '';
    }
    return post.fields.title;
  };

  // Helper to safely get post slug
  const getPostSlug = (post: Entry<BlogPostSkeleton>): string => {
    if (!post || !post.fields || typeof post.fields.slug !== 'string') {
      return '';
    }
    return post.fields.slug;
  };

  return (
    <div className="border-t border-gray-200 mt-8 pt-8">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const imageUrl = getImageUrl(post);
          const title = getPostTitle(post);
          const slug = getPostSlug(post);
          
          if (!slug) return null;
          
          return (
            <Link
              key={post.sys.id}
              to={`/blog/${slug}`}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-32 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                )}
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-2">
                    {title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
