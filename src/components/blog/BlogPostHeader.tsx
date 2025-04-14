import React from 'react';
import { formatDate } from '@/lib/utils';
import { Twitter, Linkedin, Globe } from 'lucide-react';

type Author = {
  name: string;
  bio?: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
};

type BlogPostHeaderProps = {
  title: string;
  subtitle: string;
  date: string;
  author: Author;
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
          {author?.avatar && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
            </div>
          )}
          
          {/* Meta Information */}
          <div className="flex-1">
            <div className="flex items-center">
              {author?.name && <p className="font-medium text-lg">{author.name}</p>}
              {author?.socialLinks && (
                <div className="flex items-center ml-4 space-x-2">
                  {author.socialLinks.twitter && (
                    <a 
                      href={author.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {author.socialLinks.linkedin && (
                    <a 
                      href={author.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {author.socialLinks.website && (
                    <a 
                      href={author.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span>{formatDate(date)}</span>
              {estimatedReadTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{estimatedReadTime} min read</span>
                </>
              )}
            </div>
            {author?.bio && (
              <p className="text-gray-600 mt-2 text-sm">{author.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
