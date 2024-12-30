import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'your-space-id',
  accessToken: 'your-access-token',
});

export type BlogPost = {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
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
};