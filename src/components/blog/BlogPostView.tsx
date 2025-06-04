import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Document } from '@contentful/rich-text-types';
import type { BlogPost } from '@/types/contentful';
import type { SafeContentfulImage, AuthorProp } from '@/pages/BlogPost'; // Assuming types are exported from BlogPostPage
import { Skeleton } from "@/components/ui/skeleton";

// Props interface for the BlogPostView component
interface BlogPostViewProps {
  loading: boolean;
  post: BlogPost | null;
  relatedPosts: BlogPost[];
  currentPostId: string;
  slug: string | undefined;
  pageTitle: string;
  pageDescription: string;
  coverImageUrl: string;
  schemaData: Record<string, any>; // or a more specific type for schema.org data
  onNavigateBack: () => void;
  // Data formatting functions passed as props
  getTitle: () => string;
  getSubtitle: () => string;
  getDate: () => string;
  getAuthor: () => AuthorProp;
  getContent: () => Document | null;
  getCoverImage: () => SafeContentfulImage;
  renderRichText: (content: Document | null) => React.ReactNode;
  getEstimatedReadTime: (content: Document | null) => number;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({
  loading,
  post,
  relatedPosts,
  currentPostId,
  slug,
  pageTitle,
  pageDescription,
  coverImageUrl,
  schemaData,
  onNavigateBack,
  getTitle,
  getSubtitle,
  getDate,
  getAuthor,
  getContent,
  getCoverImage,
  renderRichText,
  getEstimatedReadTime,
}) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {slug && <link rel="canonical" href={`https://resolvo.uk/blog/${slug}`} />}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {coverImageUrl && <meta property="og:image" content={coverImageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {coverImageUrl && <meta name="twitter:image" content={coverImageUrl} />} 
        {/* Conditionally render schema if date is available - check property used in BlogPostPage */}
        {schemaData.datePublished && (
            <script type="application/ld+json">
              {JSON.stringify(schemaData)}
            </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onNavigateBack} 
            className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Blog</span>
          </button>
          
          {loading ? (
            <div className="space-y-8">
              {/* Header skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
              
              {/* Cover image skeleton */}
              <Skeleton className="w-full h-[400px] rounded-lg" />
              
              {/* Content skeleton */}
              <div className="max-w-3xl mx-auto space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          ) : post ? (
            <>
              <BlogPostHeader
                title={getTitle()}
                subtitle={getSubtitle()}
                date={getDate()}
                author={getAuthor()}
                coverImage={getCoverImage()}
                estimatedReadTime={getEstimatedReadTime(getContent())}
              />

              <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
                {renderRichText(getContent())}
              </div>

              {relatedPosts.length > 0 && (
                <RelatedPosts posts={relatedPosts} currentPostId={currentPostId} /> 
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-gray-600">Blog post not found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPostView; 