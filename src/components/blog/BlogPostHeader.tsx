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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          {author && (
            <>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/lovable-uploads/e86293c4-e08e-4db1-8f84-11e643c653ff.png" alt={author.fields.authorName} />
                <AvatarFallback>
                  {author.fields.authorName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-lg">{author.fields.authorName}</span>
              <span className="text-gray-500">
                {new Date(publishDate).toLocaleDateString()}
              </span>
            </>
          )}
        </div>
        {author?.fields.socialLinks && (
          <a
            href={author.fields.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <img 
              src="/lovable-uploads/61b5e5a8-bec8-464e-bb66-4a00d7ae6e35.png" 
              alt="X (formerly Twitter)" 
              className="h-6 w-6"
            />
          </a>
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