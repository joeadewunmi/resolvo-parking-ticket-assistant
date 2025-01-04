import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

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
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});