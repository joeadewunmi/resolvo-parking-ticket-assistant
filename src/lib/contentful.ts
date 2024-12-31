import { createClient } from 'contentful';

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
    content: any;
    relatedPost?: BlogPost[];
    seoTitle?: string;
    seoDescription?: string;
    tags?: Tag[];
    authorName?: Author;
  };
}