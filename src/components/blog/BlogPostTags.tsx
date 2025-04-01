
import React from 'react';
import { Link } from 'react-router-dom';
import { Entry } from 'contentful';
import { TagSkeleton } from '@/lib/contentful';

interface BlogPostTagsProps {
  tags: Entry<TagSkeleton>[];
}

const BlogPostTags = ({ tags }: BlogPostTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex gap-2 mt-8">
      {tags.map((tag) => (
        <Link
          key={tag.sys.id}
          to={`/blog/tag/${tag.fields.tagSlug}`}
          className="bg-secondary px-3 py-1 rounded-full text-sm hover:bg-secondary/80"
        >
          {tag.fields.tagName}
        </Link>
      ))}
    </div>
  );
};

export default BlogPostTags;
