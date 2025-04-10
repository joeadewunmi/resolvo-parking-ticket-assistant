
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
    if (!post?.fields?.featuredImage?.fields?.file?.url) {
      return undefined;
    }
    return `https:${post.fields.featuredImage.fields.file.url}`;
  };

  // Helper to safely get post title
  const getPostTitle = (post: Entry<BlogPostSkeleton>): string => {
    return post?.fields?.title || '';
  };

  // Helper to safely get post slug
  const getPostSlug = (post: Entry<BlogPostSkeleton>): string => {
    return post?.fields?.slug || '';
  };

  return (
    <div className="border-t border-gray-200 mt-8 pt-8">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.sys.id}
            to={`/blog/${getPostSlug(post)}`}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              {getImageUrl(post) && (
                <img
                  src={getImageUrl(post)}
                  alt={getPostTitle(post)}
                  className="w-full h-32 object-cover rounded-t-lg"
                  loading="lazy"
                />
              )}
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-2">
                  {getPostTitle(post)}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
