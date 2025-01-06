import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface BlogPostHeaderProps {
  title: string;
  publishDate: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  author?: {
    fields: {
      authorName: string;
      socialLinks?: string;
    };
  };
}

const BlogPostHeader = ({ title, publishDate, featuredImage, author }: BlogPostHeaderProps) => {
  return (
    <header>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-gray-500">
          {new Date(publishDate).toLocaleDateString()}
        </div>
        {author && (
          <div className="flex items-center gap-3">
            <span className="text-gray-300">•</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/lovable-uploads/e86293c4-e08e-4db1-8f84-11e643c653ff.png" alt={author.fields.authorName} />
              <AvatarFallback>
                {author.fields.authorName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{author.fields.authorName}</span>
            {author.fields.socialLinks && (
              <a
                href={author.fields.socialLinks}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <img 
                  src="/lovable-uploads/2fb2af2b-2d34-4a65-9161-a91b25335025.png" 
                  alt="X (formerly Twitter)" 
                  className="h-5 w-5"
                />
              </a>
            )}
          </div>
        )}
      </div>
      {featuredImage && (
        <img
          src={`https:${featuredImage.fields.file.url}`}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-8"
          loading="lazy"
        />
      )}
    </header>
  );
};

export default BlogPostHeader;