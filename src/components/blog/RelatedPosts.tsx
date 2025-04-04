
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

  return (
    <div className="border-t border-gray-200 mt-8 pt-8">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.sys.id}
            to={`/blog/${post.fields.slug}`}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              {post.fields.featuredImage && post.fields.featuredImage.fields.file && (
                <img
                  src={`https:${post.fields.featuredImage.fields.file.url}`}
                  alt={post.fields.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                  loading="lazy"
                />
              )}
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-2">
                  {post.fields.title}
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
