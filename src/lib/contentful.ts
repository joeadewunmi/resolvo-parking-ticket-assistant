import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'fal2hauaxrft',
  accessToken: 'FAKkiIuREevtlVoMj1pCO9ySzOUJKSQsVxhNnVt9TUw'
});

export type Author = {
  sys: {
    id: string;
  };
  fields: {
    authorName: string;
    socialLinks: string;
  };
};

export type Tag = {
  sys: {
    id: string;
  };
  fields: {
    tagName: string;
    tagSlug: string;
  };
};

export type BlogPost = {
  sys: {
    id: string;
    createdAt: string;
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
    content: any; // Rich text content from Contentful
    relatedPost?: BlogPost[];
    seoTitle?: string;
    seoDescription?: string;
    tags?: Tag[];
    authorName?: Author;
  };
};