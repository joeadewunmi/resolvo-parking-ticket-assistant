
import React, { Suspense } from 'react';
import { Document } from '@contentful/rich-text-types';
import RichTextContent from '../RichTextContent';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface BlogPostContentProps {
  content: Document;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  // Validate that the content is a proper Document object
  const isValidContent = content && 
    typeof content === 'object' && 
    'nodeType' in content && 
    Array.isArray(content.content);

  if (!isValidContent) {
    return (
      <Alert className="my-6 bg-amber-50 border border-amber-200">
        <AlertDescription className="text-amber-700">
          The content for this post couldn't be properly loaded.
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-a:text-blue-600 prose-img:rounded-lg">
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>}>
        <RichTextContent content={content} />
      </Suspense>
    </div>
  );
};

export default BlogPostContent;
