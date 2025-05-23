
import { Entry, EntrySkeletonType, EntryFieldTypes } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Define the skeleton for Author using correct Field IDs
export type AuthorSkeleton = EntrySkeletonType<{
  authorName: EntryFieldTypes.Symbol;
  socialLinks?: EntryFieldTypes.Symbol;
  profilePicture?: EntryFieldTypes.AssetLink;
}>;

// Define the skeleton for BlogPost
export type BlogPostSkeleton = EntrySkeletonType<{
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  publishDate: EntryFieldTypes.Date;
  content: EntryFieldTypes.RichText;
  seoDescription?: EntryFieldTypes.Text;
  featuredImage?: EntryFieldTypes.AssetLink;
  relatedPost?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<BlogPostSkeleton>>;
  authorName?: EntryFieldTypes.EntryLink<AuthorSkeleton>;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}>;

// Use the skeletons to define the Entry types
export type BlogPost = Entry<BlogPostSkeleton>;
export type Author = Entry<AuthorSkeleton>;

// Add the missing AuthorFields type for backward compatibility
export type AuthorFields = {
  authorName: string;
  socialLinks?: string;
  profilePicture?: any;
};
