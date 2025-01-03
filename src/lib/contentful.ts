import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});

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
    content: any;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    seoDescription?: string;
    tags?: Array<{
      sys: {
        id: string;
      };
      fields: {
        tagName: string;
        tagSlug: string;
      };
    }>;
    authorName?: {
      fields: {
        authorName: string;
        socialLinks?: string;
      };
    };
    relatedPost?: BlogPost[];
  };
}