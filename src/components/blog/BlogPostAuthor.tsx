import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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
          <AvatarImage src="/lovable-uploads/e86293c4-e08e-4db1-8f84-11e643c653ff.png" alt={author.fields.authorName} />
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
              <img 
                src="/lovable-uploads/a7b9ce5c-5785-4072-a8ef-a3bffc3c78dc.png" 
                alt="X (formerly Twitter)" 
                className="h-5 w-5"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;