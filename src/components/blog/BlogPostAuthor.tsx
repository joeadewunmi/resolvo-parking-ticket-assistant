import React from 'react';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface Author {
  fields: {
    authorName: string;
    socialLinks?: string;
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
          <AvatarFallback>
            {author.fields.authorName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">
            {author.fields.authorName}
          </h3>
          {author.fields.socialLinks && (
            <a
              href={author.fields.socialLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Social Links
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;