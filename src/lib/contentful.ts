import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: '0rf1pho85xtc',
  accessToken: '-waCZTYOEOmS1YQxo6kDk8BV4tCgJTwlDCOJiPVD1VM',
  host: 'preview.contentful.com'
});

export type BlogPost = {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  contentTypeId: string;
  metadata: {
    tags: []
  };
};