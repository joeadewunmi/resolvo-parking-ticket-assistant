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

interface Tag {
  sys: {
    id: string;
  };
  fields: {
    tagName: string;
    tagSlug: string;
  };
}

interface Author {
  fields: {
    authorName: string;
    socialLinks?: string;
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
    content: Document;
    seoDescription?: string;
    featuredImage?: ImageAsset;
    tags?: Tag[];
    authorName?: Author;
    relatedPost?: BlogPost[];
  };
}

// Use provided Contentful credentials
const spaceId = 'fal2hauaxrft';
const accessToken = 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});