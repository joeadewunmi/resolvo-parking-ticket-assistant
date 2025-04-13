import React from 'react';
import { Link } from 'react-router-dom';
import { Entry } from 'contentful';
import { formatDate } from '@/lib/utils';

type BlogPostEntry = Entry<any>;

type RelatedPostsProps = {
  posts: BlogPostEntry[];
  currentPostId: string;
};

const RelatedPostCard = ({ post }: { post: BlogPostEntry }) => {
  // Safe access helpers using optional chaining and casting
  const fields = post?.fields as Record<string, any>;
  const title = (fields?.title as string) || '';
  const slug = (fields?.slug as string) || '';
  const excerpt = (fields?.excerpt as string) || '';
  const date = (fields?.publishDate as string) || '';
  
  // Safely extract featured image if available
  const featuredImage = fields?.featuredImage?.fields?.file?.url
    ? `https:${fields.featuredImage.fields.file.url}`
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

const RelatedPosts = ({ posts, currentPostId }: RelatedPostsProps) => {
  // Get the current post to access its related posts
  const currentPost = posts.find(post => post.sys.id === currentPostId);
  const relatedPostRefs = (currentPost?.fields?.relatedPosts || []) as Entry<any>[];
  
  // Get the full post objects for the related post references
  const relatedPosts = relatedPostRefs
    .map(ref => posts.find(post => post.sys.id === ref.sys.id))
    .filter(Boolean)
    .slice(0, 3);

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
