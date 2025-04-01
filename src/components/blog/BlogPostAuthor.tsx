
import React from 'react';
import { Entry } from 'contentful';
import { AuthorSkeleton } from '@/lib/contentful';

interface BlogPostAuthorProps {
  author: Entry<AuthorSkeleton>;
}

const BlogPostAuthor = ({ author }: BlogPostAuthorProps) => {
  // We're not rendering the author information at the bottom anymore
  // since it's now displayed in the header
  return null;
};

export default BlogPostAuthor;
