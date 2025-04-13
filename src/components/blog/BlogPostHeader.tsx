
import React from 'react';
import { formatDate } from '@/lib/utils';
import { Entry } from 'contentful';
import { AuthorSkeleton } from '@/types/contentful';

type BlogPostHeaderProps = {
  title: string;
  subtitle: string;
  date: string;
  author: Entry<AuthorSkeleton> | null;
  coverImage: {
    url: string;
    title: string;
  } | null;
  estimatedReadTime?: number;
};

const BlogPostHeader = ({
  title,
  subtitle,
  date,
  author,
  coverImage,
  estimatedReadTime
}: BlogPostHeaderProps) => {
  // Safely access author name
  const authorName = author?.fields?.name || '';
  
  // Safely access author image
  const authorImage = author?.fields?.image?.fields?.file?.url 
    ? `https:${author?.fields?.image?.fields?.file?.url}`
    : null;
    
  // Safely access cover image
  const coverImageUrl = coverImage?.url ? `https:${coverImage.url}` : '';
  
  return (
    <div className="mb-10">
      {/* Cover Image */}
      {coverImageUrl && (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-lg overflow-hidden">
          <img 
            src={coverImageUrl} 
            alt={coverImage?.title || title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Title and Meta */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-gray-600 mb-6">{subtitle}</p>}
        
        <div className="flex items-center mb-8">
          {/* Author Image */}
          {authorImage && (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img src={authorImage} alt={authorName} className="w-full h-full object-cover" />
            </div>
          )}
          
          {/* Meta Information */}
          <div>
            {authorName && <p className="font-medium">{authorName}</p>}
            <div className="flex items-center text-sm text-gray-500">
              <span>{formatDate(date)}</span>
              {estimatedReadTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{estimatedReadTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
