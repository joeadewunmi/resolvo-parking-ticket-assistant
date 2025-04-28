
import React from 'react';
import { Link } from 'react-router-dom';
import { Entry } from 'contentful';
import { formatDate } from '@/lib/utils';
import { BlogPostFields } from '@/types/contentful';

type BlogPostEntry = Entry<BlogPostFields>;

const RelatedPostCard = ({ post }: { post: BlogPostEntry }) => {
  if (!post?.fields) {
    return null;
  }
  
  // Safe access helpers using optional chaining
  const title = post.fields.title || '';
  const slug = post.fields.slug || '';
  const excerpt = post.fields.seoDescription || '';
  const date = post.fields.publishDate || '';
  
  // Safely extract featured image if available
  const featuredImage = post.fields.featuredImage?.fields?.file?.url
    ? `https:${post.fields.featuredImage.fields.file.url}`
    : null;
    
  return (
    <Link to={`/blog/${slug}`} className="block group">
      {featuredImage && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
          <img 
            src={featuredImage}
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

interface RelatedPostsProps {
  posts: BlogPostEntry[];
  currentPostId?: string;
}

const RelatedPosts = ({ posts, currentPostId }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) return null;
  
  // Filter out the current post if currentPostId is provided
  const filteredPosts = currentPostId 
    ? posts.filter(post => post.sys.id !== currentPostId)
    : posts;
    
  // If no posts left after filtering, return null
  if (filteredPosts.length === 0) return null;

  // Just show up to 3 posts
  const displayPosts = filteredPosts.slice(0, 3);

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayPosts.map(post => (
          <RelatedPostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
