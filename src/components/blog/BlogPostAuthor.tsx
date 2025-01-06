import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Twitter } from 'lucide-react';

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
          <AvatarImage src="/lovable-uploads/ee65f6a0-5cf1-465c-bcc5-c416c4c5aede.png" alt={author.fields.authorName} />
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
              className="text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center gap-1"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;