
import React from 'react';
import { formatDate } from '@/lib/utils';
import { Linkedin, Globe, Calendar, Clock, UserCircle } from 'lucide-react';
import { SafeContentfulImage, AuthorProp } from '@/pages/BlogPost';
import LazyImage from '@/components/ui/LazyImage';
import ShareButton from '@/components/ui/ShareButton';

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
  
  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <div className="mb-10">
      {/* Cover Image */}
      {coverImage && coverImage.url && (
        <div className="my-8 aspect-[16/9] w-full overflow-hidden rounded-lg">
          <LazyImage 
            src={coverImage.url.startsWith('//') ? `https:${coverImage.url}` : coverImage.url}
            alt={coverImage.title || title}
            className="w-full h-full object-cover"
            width={1200}
            height={675}
          />
        </div>
      )}
      
      {/* Title and Meta */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {/* Remove subtitle rendering */}
        {/* {subtitle && <p className="text-xl text-gray-600 mb-6">{subtitle}</p>} */}
        
        <div className="flex items-center mb-8">
          {/* Author Image */}
          {author?.avatar && (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <LazyImage 
                src={author.avatar} 
                alt={author.name} 
                className="w-full h-full object-cover" 
                width={40}
                height={40}
              />
            </div>
          )}
          
          {/* Meta Information */}
          <div className="flex-1">
            <div className="flex items-center">
              {author?.name && <p className="font-medium text-lg">{author.name}</p>}
              <div className="flex items-center ml-4 space-x-2">
                {/* Share Button - Always visible */}
                <ShareButton 
                  url={currentUrl} 
                  title={title} 
                  eventCategory="blog_share"
                  eventLabel={`blog_${title}`}
                />
                
                {/* Author social links */}
                {author?.socialLinks && (
                  <>
                    {author.socialLinks.twitter && (
                      <a 
                        href={author.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <img 
                          src="/lovable-uploads/f7b15328-d45e-4ed4-93bf-99d0604d5560.png"
                          alt="X (formerly Twitter)"
                          className="w-4 h-4"
                        />
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
                  </>
                )}
              </div>
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
