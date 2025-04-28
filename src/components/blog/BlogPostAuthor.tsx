
import React from 'react';
import { Entry } from 'contentful';
import { AuthorFields } from '@/types/contentful';
import { Instagram, Linkedin, Globe } from 'lucide-react';

interface BlogPostAuthorProps {
  author: Entry<AuthorFields>;
}

const BlogPostAuthor = ({ author }: BlogPostAuthorProps) => {
  if (!author?.fields) {
    return null;
  }
  
  const { name, bio, avatar, twitter, linkedin, website } = author.fields;
  
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
          
          {/* Social Links */}
          {(twitter || linkedin || website) && (
            <div className="flex space-x-2 mt-1">
              {twitter && (
                <a 
                  href={twitter.startsWith('http') ? twitter : `https://${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary"
                >
                  <img 
                    src="/lovable-uploads/1f7e4561-dbf3-4f0e-83f0-c890179634ce.png"
                    alt="X (formerly Twitter)"
                    className="w-4 h-4"
                  />
                </a>
              )}
              {linkedin && (
                <a 
                  href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {website && (
                <a 
                  href={website.startsWith('http') ? website : `https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
          
          {bio && <p className="mt-2 text-gray-600 text-sm">{bio}</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;
