
import React from 'react';

interface BlogPostTagsProps {
  tags?: string;
}

const BlogPostTags = ({ tags }: BlogPostTagsProps) => {
  if (!tags || tags.length === 0) return null;
  
  const tagArray = tags.split(',').map(tag => tag.trim());

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tagArray.map((tag) => (
        <span 
          key={tag} 
          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default BlogPostTags;
export { BlogPostTags }; // Add named export as well
