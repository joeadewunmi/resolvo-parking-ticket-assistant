import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostTagsProps {
  tags: string[];
}

const BlogPostTags = ({ tags }: BlogPostTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex gap-2 mt-8">
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/blog/tag/${tag.toLowerCase()}`}
          className="bg-secondary px-3 py-1 rounded-full text-sm hover:bg-secondary/80"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default BlogPostTags;