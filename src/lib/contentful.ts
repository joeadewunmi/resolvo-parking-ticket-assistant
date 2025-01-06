import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Define interfaces for nested types
interface FileFields {
  file: {
    url: string;
  };
}

interface ImageAsset {
  fields: FileFields;
}

interface Author {
  sys: {
    id: string;
  };
  fields: {
    entryTitle: string;
    twitterHandle?: string;
    profilePicture?: ImageAsset;
  };
}

export interface BlogPost {
  contentTypeId: string;
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    publishDate: string;
    featuredImage?: ImageAsset;
    content: Document;
    relatedPosts?: BlogPost[];
    seoTitle?: string;
    seoDescription?: string;
    tags?: string[];
    author?: Author;
  };
}

// Use provided Contentful credentials
const spaceId = 'fal2hauaxrft';
const accessToken = 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});