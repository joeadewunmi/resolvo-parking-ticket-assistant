import React from 'react';
import { formatDate } from '@/lib/utils';
import { Linkedin, Globe, Calendar, Clock, UserCircle } from 'lucide-react';
import { SafeContentfulImage, AuthorProp } from '@/pages/BlogPost';
import LazyImage from '@/components/ui/LazyImage';
import PriorityImage from '@/components/ui/PriorityImage';
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
          <PriorityImage 
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
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Author Info */}
          <div className="flex items-center">
            {/* Author Image */}
            {author?.avatar && (
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <LazyImage 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-full h-full object-cover" 
                  width={40}
                  height={40}
                />
              </div>
            )}
            
            {/* Author Details */}
            <div className="flex-1 min-w-0">
              {author?.name && <p className="font-medium text-lg truncate">{author.name}</p>}
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
                <p className="text-gray-600 mt-1 text-sm hidden sm:block">{author.bio}</p>
              )}
            </div>
          </div>

          {/* Social Links and Share Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Share Button - Improved styling */}
            <ShareButton 
              url={currentUrl} 
              title={title} 
              eventCategory="blog_share"
              eventLabel={`blog_${title}`}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
            />
            
            {/* Author social links - Improved styling */}
            {author?.socialLinks && (
              <div className="flex items-center gap-2">
                {author.socialLinks.twitter && (
                  <a 
                    href={author.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
                    title="Follow on X (formerly Twitter)"
                  >
                    <img 
                      src="/lovable-uploads/f7b15328-d45e-4ed4-93bf-99d0604d5560.png"
                      alt="X (formerly Twitter)"
                      className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      width={16}
                      height={16}
                    />
                  </a>
                )}
                {author.socialLinks.linkedin && (
                  <a 
                    href={author.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full border-2 border-gray-300 hover:border-blue-500 bg-white hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                    title="Connect on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                  </a>
                )}
                {author.socialLinks.website && (
                  <a 
                    href={author.socialLinks.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full border-2 border-gray-300 hover:border-green-500 bg-white hover:bg-green-50 transition-all duration-200 shadow-sm hover:shadow-md"
                    title="Visit Website"
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Author bio on mobile */}
        {author?.bio && (
          <p className="text-gray-600 text-sm sm:hidden mb-4">{author.bio}</p>
        )}
      </div>
    </div>
  );
};

export default BlogPostHeader;
