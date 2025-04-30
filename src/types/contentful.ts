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
// Specify Modifiers for link resolution if needed (e.g., 'WITHOUT_LINK_RESOLUTION', 'WITH_LINK_RESOLUTION')
// Or omit for default behavior which depends on client configuration/`include` parameter
export type BlogPost = Entry<BlogPostSkeleton>;
export type Author = Entry<AuthorSkeleton>;

// Removed old interfaces and confusing type aliases 