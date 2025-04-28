import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2, ArrowLeft } from 'lucide-react';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Document } from '@contentful/rich-text-types';
import type { BlogPost } from '@/types/contentful';
import type { SafeContentfulImage, AuthorProp } from '@/pages/BlogPost'; // Assuming types are exported from BlogPostPage

// Props interface for the BlogPostView component
interface BlogPostViewProps {
  loading: boolean;
  post: BlogPost | null;
  relatedPosts: BlogPost[];
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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : post ? (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={onNavigateBack} 
                className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Blog</span>
              </button>
              
              <BlogPostHeader
                title={getTitle()}        // Use passed prop function
                subtitle={getSubtitle()}  // Use passed prop function
                date={getDate()}          // Use passed prop function
                author={getAuthor()}      // Use passed prop function
                coverImage={getCoverImage()}// Use passed prop function
                estimatedReadTime={getEstimatedReadTime(getContent())} // Use passed prop functions
              />

              <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
                {renderRichText(getContent())} // Use passed prop function
              </div>

              {relatedPosts.length > 0 && (
                <RelatedPosts posts={relatedPosts} currentPostId={post.sys.id} /> 
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">Blog post not found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPostView; 