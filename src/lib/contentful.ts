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
    name: string;
    bio: string;
    profilePicture: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    socialLinks: string;
  };
};

export type Tag = {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    slug: string;
  };
};

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
    publishDate: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    content: string;
    relatedPosts?: BlogPost[];
    seoTitle?: string;
    seoDescription?: string;
    tags?: Tag[];
    author?: Author;
    excerpt?: string;
  };
  contentTypeId: string;
  metadata: {
    tags: []
  };
};