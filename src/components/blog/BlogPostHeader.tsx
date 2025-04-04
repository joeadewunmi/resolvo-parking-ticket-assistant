
import React from 'react';
import { Asset, Entry } from 'contentful';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuthorSkeleton } from '@/lib/contentful';

interface BlogPostHeaderProps {
  title: string;
  publishDate?: string;
  featuredImage?: Asset;
  author?: Entry<AuthorSkeleton>;
}

const BlogPostHeader = ({ title, publishDate, featuredImage, author }: BlogPostHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {author && (
            <div className="flex items-center">
              <Avatar className="h-12 w-12">
                {author.fields.profilePicture && author.fields.profilePicture.fields && author.fields.profilePicture.fields.file ? (
                  <AvatarImage 
                    src={`https:${author.fields.profilePicture.fields.file.url}`} 
                    alt={author.fields.authorName} 
                  />
                ) : (
                  <AvatarFallback>
                    {author.fields.authorName ? author.fields.authorName.substring(0, 2).toUpperCase() : 'AU'}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="ml-4">
                <p className="font-medium">{author.fields.authorName}</p>
                {publishDate && (
                  <p className="text-gray-500 text-sm">
                    {format(new Date(publishDate), 'MMMM dd, yyyy')}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        
        {author && author.fields.twitter && (
          <a 
            href={`https://twitter.com/${author.fields.twitter}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline"
          >
            @{author.fields.twitter}
          </a>
        )}
      </div>
      
      {featuredImage && featuredImage.fields && featuredImage.fields.file && (
        <img
          src={`https:${featuredImage.fields.file.url}`}
          alt={title}
          className="w-full h-auto max-h-96 object-cover rounded-md mb-8"
        />
      )}
    </div>
  );
};

export default BlogPostHeader;
