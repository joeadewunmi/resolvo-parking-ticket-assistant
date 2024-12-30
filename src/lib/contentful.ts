import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: '0rf1pho85xtc',
  accessToken: 'Zi5MpchIJf8j3I-hkOORC9MOLdLAJi8mJ4tXjbJjsZk',
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
  contentTypeId?: string;
};