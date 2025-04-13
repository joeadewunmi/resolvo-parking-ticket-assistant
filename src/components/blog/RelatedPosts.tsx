
import React from 'react';
import { Link } from 'react-router-dom';
import { Asset, Entry } from 'contentful';
import { BlogPostSkeleton } from '@/types/contentful';
import { formatDate } from '@/lib/utils';

type RelatedPostsProps = {
  posts: Entry<BlogPostSkeleton>[];
  currentPostId: string;
};

const RelatedPostCard = ({ post }: { post: Entry<BlogPostSkeleton> }) => {
  // Safely extract fields
  const title = post?.fields?.title || '';
  const slug = post?.fields?.slug || '';
  const excerpt = post?.fields?.excerpt || '';
  const date = post?.fields?.date || '';
  
  // Safely extract cover image if available
  const coverImage = post?.fields?.coverImage?.fields?.file?.url 
    ? `https:${post.fields.coverImage.fields.file.url}`
    : null;
    
  return (
    <Link to={`/blog/${slug}`} className="block group">
      {coverImage && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
          <img 
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-200">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{formatDate(date)}</p>
      <p className="text-gray-600 mt-2 line-clamp-2">{excerpt}</p>
    </Link>
  );
};

const RelatedPosts = ({ posts, currentPostId }: RelatedPostsProps) => {
  // Filter out the current post and limit to 3 related posts
  const relatedPosts = posts.filter(post => post.sys.id !== currentPostId).slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="py-12 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map(post => (
            <RelatedPostCard key={post.sys.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
