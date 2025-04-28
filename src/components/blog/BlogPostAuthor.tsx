
import React from 'react';
import { Entry } from 'contentful';
import { AuthorFields } from '@/types/contentful';

interface BlogPostAuthorProps {
  author: Entry<AuthorFields>;
}

const BlogPostAuthor = ({ author }: BlogPostAuthorProps) => {
  if (!author?.fields) {
    return null;
  }
  
  const { name, bio, avatar } = author.fields;
  
  const avatarUrl = avatar?.fields?.file?.url 
    ? `https:${avatar.fields.file.url}` 
    : undefined;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-4">About the Author</h3>
      <div className="flex items-start">
        {avatarUrl && (
          <div className="mr-4 w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-medium text-lg">{name}</h4>
          {bio && <p className="mt-2 text-gray-600 text-sm">{bio}</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;
