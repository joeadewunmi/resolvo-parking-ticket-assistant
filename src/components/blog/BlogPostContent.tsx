
import React, { Suspense } from 'react';
import { Document } from '@contentful/rich-text-types';
import RichTextContent from '../RichTextContent';

interface BlogPostContentProps {
  content: Document;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:mb-6 prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed prose-a:text-blue-600 prose-img:rounded-lg prose-li:mb-2 prose-li:leading-relaxed">
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>}>
        <RichTextContent content={content} />
      </Suspense>
    </div>
  );
};

export default BlogPostContent;
