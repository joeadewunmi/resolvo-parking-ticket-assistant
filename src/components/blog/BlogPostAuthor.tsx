
import React from 'react';
import { Entry } from 'contentful';

interface BlogPostAuthorProps {
  author: any; // Using any for now since AuthorFields is not properly exported
}

const BlogPostAuthor = ({ author }: BlogPostAuthorProps) => {
  // We're not rendering the author information at the bottom anymore
  // since it's now displayed in the header
  return null;
};

export default BlogPostAuthor;
