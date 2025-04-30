import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types/contentful';
import { formatDate } from '@/lib/utils';
import type { Entry } from 'contentful';
import { Asset } from 'contentful';

// Type for safe contentful image
type SafeContentfulImage = {
  url: string;
  title: string;
} | null;

// Helper function to safely get post fields
const getPostFields = (post: BlogPost) => {
  const featuredImage = post?.fields?.featuredImage as Asset | undefined;
  const fileUrl = featuredImage?.fields?.file?.url;
  const title = featuredImage?.fields?.title;

  return {
    title: (post?.fields?.title as string) || '',
    slug: (post?.fields?.slug as string) || '',
    excerpt: (post?.fields?.seoDescription as string) || '',
    date: (post?.fields?.publishDate as string) || '',
    featuredImage: typeof fileUrl === 'string' ? {
      url: `https:${fileUrl}`,
      title: typeof title === 'string' ? title : ''
    } : null
  };
};

// Helper function to get related posts
const getRelatedPosts = (posts: BlogPost[], currentPostId: string): BlogPost[] => {
  const currentPost = posts.find(post => post.sys.id === currentPostId);
  if (!currentPost) return [];

  const relatedPostRefs = (currentPost.fields?.['Related Post'] as unknown as Entry<any>[]) || [];
  return relatedPostRefs
    .map(ref => posts.find(post => post.sys.id === ref.sys.id))
    .filter((post): post is BlogPost => post !== undefined);
};

const RelatedPostCard = ({ post }: { post: BlogPost }) => {
  const { title, slug, excerpt, date, featuredImage } = getPostFields(post);
    
  return (
    <Link to={`/blog/${slug}`} className="block group">
      {featuredImage && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
          <img 
            src={featuredImage.url}
            alt={featuredImage.title}
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
  posts: BlogPost[];
  currentPostId: string;
}

const RelatedPosts = ({ posts, currentPostId }: RelatedPostsProps) => {
  const relatedPosts = getRelatedPosts(posts, currentPostId);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <RelatedPostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
