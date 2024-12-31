import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export const contentfulClient = createClient({
  space: 'fal2hauaxrft',
  accessToken: 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw'
});

export interface Author {
  metadata: { tags: [] };
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
  fields: {
    authorName: string;
    socialLinks: string;
  };
}

export interface Tag {
  metadata: { tags: [] };
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
  fields: {
    tagName: string;
    tagSlug: string;
  };
}

export interface Asset {
  metadata: { tags: [] };
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface BlogPost {
  metadata: { tags: [] };
  sys: {
    id: string;
    type: string;
    createdAt: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
  fields: {
    title: string;
    slug: string;
    publishDate: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    content: Document; // Changed from 'any' to 'Document'
    relatedPost?: BlogPost[];
    seoTitle?: string;
    seoDescription?: string;
    tags?: Tag[];
    authorName?: Author;
  };
}

export interface ContentfulResponse<T> {
  total: number;
  skip: number;
  limit: number;
  items: T[];
}
