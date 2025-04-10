
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
  // Helper to safely access nested properties
  const getImageUrl = (asset?: Asset): string | undefined => {
    if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
      return undefined;
    }
    return `https:${asset.fields.file.url}`;
  };

  // Helper to safely get author name
  const getAuthorName = (author?: Entry<AuthorSkeleton>): string => {
    if (!author || !author.fields || typeof author.fields.authorName !== 'string') {
      return '';
    }
    return author.fields.authorName;
  };

  // Helper to safely get profile picture URL
  const getProfilePictureUrl = (author?: Entry<AuthorSkeleton>): string | undefined => {
    if (
      !author || 
      !author.fields || 
      !author.fields.profilePicture || 
      !author.fields.profilePicture.fields || 
      !author.fields.profilePicture.fields.file || 
      !author.fields.profilePicture.fields.file.url
    ) {
      return undefined;
    }
    return `https:${author.fields.profilePicture.fields.file.url}`;
  };

  const authorName = getAuthorName(author);
  const profilePicUrl = getProfilePictureUrl(author);
  const twitterHandle = author?.fields?.twitter || '';
  const imageUrl = getImageUrl(featuredImage);

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {author && (
            <div className="flex items-center">
              <Avatar className="h-12 w-12">
                {profilePicUrl ? (
                  <AvatarImage 
                    src={profilePicUrl}
                    alt={authorName}
                  />
                ) : (
                  <AvatarFallback>
                    {authorName ? authorName.substring(0, 2).toUpperCase() : 'AU'}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="ml-4">
                <p className="font-medium">{authorName}</p>
                {publishDate && (
                  <p className="text-gray-500 text-sm">
                    {format(new Date(publishDate), 'MMMM dd, yyyy')}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        
        {author && author.fields && twitterHandle && (
          <a 
            href={`https://twitter.com/${twitterHandle}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline"
          >
            @{twitterHandle}
          </a>
        )}
      </div>
      
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto max-h-96 object-cover rounded-md mb-8"
        />
      )}
    </div>
  );
};

export default BlogPostHeader;
