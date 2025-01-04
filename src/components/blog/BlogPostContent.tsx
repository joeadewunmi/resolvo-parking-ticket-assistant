import React, { Suspense } from 'react';
import { Document } from '@contentful/rich-text-types';
import RichTextContent from '../RichTextContent';

interface BlogPostContentProps {
  content: Document;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="prose prose-lg max-w-none prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-500">
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>}>
        <RichTextContent content={content} />
      </Suspense>
    </div>
  );
};

export default BlogPostContent;