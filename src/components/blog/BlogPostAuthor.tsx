import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Author {
  sys: {
    id: string;
  };
  fields: {
    entryTitle: string;
    twitterHandle?: string;
    profilePicture?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface BlogPostAuthorProps {
  author: Author;
}

const BlogPostAuthor = ({ author }: BlogPostAuthorProps) => {
  if (!author) return null;

  return (
    <div className="border-t border-gray-200 mt-8 pt-8">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          {author.fields.profilePicture ? (
            <AvatarImage
              src={`https:${author.fields.profilePicture.fields.file.url}`}
              alt={author.fields.entryTitle}
            />
          ) : (
            <AvatarFallback>
              {author.fields.entryTitle.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">
            {author.fields.entryTitle}
          </h3>
          {author.fields.twitterHandle && (
            <a
              href={`https://twitter.com/${author.fields.twitterHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              {author.fields.twitterHandle}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;