import React from 'react';

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
  // We're not rendering the author information at the bottom anymore
  // since it's now displayed in the header
  return null;
};

export default BlogPostAuthor;