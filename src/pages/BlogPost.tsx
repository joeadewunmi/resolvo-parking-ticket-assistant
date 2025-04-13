
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogPostBySlug, getBlogPosts, renderRichText } from '@/lib/contentful';
import { Entry, Asset } from 'contentful';
import { BlogPostSkeleton, AuthorSkeleton } from '@/types/contentful';
import { Loader2, ArrowLeft } from 'lucide-react';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Document } from '@contentful/rich-text-types';

type SafeContentfulImage = {
  url: string;
  title: string;
} | null;

// Helper to get estimated read time
const getEstimatedReadTime = (content: Document): number => {
  if (!content) return 0;
  
  // Extract all text from rich text document
  const extractTextFromNode = (node: any): string => {
    if (node.nodeType === 'text') {
      return node.value || '';
    }
    if (node.content) {
      return node.content.map((childNode: any) => extractTextFromNode(childNode)).join(' ');
    }
    return '';
  };
  
  const text = extractTextFromNode(content);
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// Helper to safely get cover image data
const getCoverImageData = (post: Entry<BlogPostSkeleton> | null): SafeContentfulImage => {
  if (!post?.fields?.coverImage?.fields?.file?.url) {
    return null;
  }
  
  return {
    url: post.fields.coverImage.fields.file.url,
    title: post.fields.coverImage.fields.title || ''
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Entry<BlogPostSkeleton> | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Entry<BlogPostSkeleton>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) {
        navigate('/blog');
        return;
      }

      setLoading(true);
      const fetchedPost = await getBlogPostBySlug(slug);
      
      if (!fetchedPost) {
        navigate('/blog');
        return;
      }
      
      setPost(fetchedPost);

      // Fetch related posts
      const allPosts = await getBlogPosts();
      setRelatedPosts(allPosts);
      
      setLoading(false);
    };

    fetchBlogPost();
  }, [slug, navigate]);

  // Safe data access helpers
  const getTitle = (): string => post?.fields?.title || 'Blog Post';
  const getSubtitle = (): string => post?.fields?.excerpt || '';
  const getDate = (): string => post?.fields?.date || '';
  const getAuthor = (): Entry<AuthorSkeleton> | null => post?.fields?.author || null;
  const getContent = (): Document | null => post?.fields?.content || null;
  const getCoverImage = (): SafeContentfulImage => getCoverImageData(post);

  // SEO data
  const pageTitle = `${getTitle()} | Resolvo`;
  const pageDescription = getSubtitle();
  const coverImage = getCoverImage();
  const coverImageUrl = coverImage ? `https:${coverImage.url}` : '';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {coverImageUrl && <meta property="og:image" content={coverImageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {coverImageUrl && <meta name="twitter:image" content={coverImageUrl} />}
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : post ? (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back Button */}
              <button 
                onClick={() => navigate('/blog')} 
                className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Blog</span>
              </button>
              
              {/* Blog Post Header */}
              <BlogPostHeader
                title={getTitle()}
                subtitle={getSubtitle()}
                date={getDate()}
                author={getAuthor()}
                coverImage={getCoverImage()}
                estimatedReadTime={getContent() ? getEstimatedReadTime(getContent()!) : undefined}
              />

              {/* Blog Post Content */}
              <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
                {renderRichText(getContent())}
              </div>

              {/* Related Posts */}
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

export default BlogPost;
