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

// Use default values for development if environment variables are not set
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'development_space_id';
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'development_access_token';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});