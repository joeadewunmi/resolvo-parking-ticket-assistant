import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { renderRichText } from '@/lib/contentful';
import { ArrowLeft } from 'lucide-react';
import type { BlogPost, Author } from '@/types/contentful';
import { Asset } from 'contentful';
import { useBlogPostData } from '@/hooks/useBlogPostData';
import BlogPostView from '@/components/blog/BlogPostView';

// Export the type for use in BlogPostView
export type SafeContentfulImage = {
  url: string;
  title: string;
} | null;

// Helper to get estimated read time
const getEstimatedReadTime = (content: any): number => {
  if (!content) return 0;
  
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

// Helper using the type guard - fixed type handling
const getCoverImageData = (post: BlogPost | null): SafeContentfulImage => {
  const featuredImage = post?.fields?.featuredImage;
  
  // Type guard to check if it's a resolved Asset
  if (featuredImage && typeof featuredImage === 'object' && 'fields' in featuredImage) {
    const asset = featuredImage as any; // Use any to bypass strict typing for now
    const fileUrl = asset.fields?.file?.url;
    const title = asset.fields?.title;

    if (typeof fileUrl === 'string') {
      return {
        url: fileUrl, 
        title: typeof title === 'string' ? title : ''
      };
    }
  }
  
  return null;
};

// Export the type for use in BlogPostView
export type AuthorProp = {
  name: string;
  avatar: string | null;
  socialLinks: {
    twitter: string;
  };
} | null;

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Use the custom hook to fetch data and manage state
  const { post, relatedPosts, loading, error } = useBlogPostData(slug);

  // Helper functions now operate on the 'post' state variable from the hook
  const getTitle = (): string => {
    const title = post?.fields?.title;
    return typeof title === 'string' ? title : 'Blog Post';
  };
  const getSubtitle = (): string => {
    const subtitle = post?.fields?.seoDescription;
    return typeof subtitle === 'string' ? subtitle : '';
  };
  const getDate = (): string => {
    const date = post?.fields?.publishDate;
    return typeof date === 'string' ? date : '';
  };
  
  const getAuthor = (): AuthorProp => {
    try {
      // Use 'as any' to bypass complex type checking
      const authorData = post?.fields?.authorName as any;
      
      // Log the data for debugging
      console.log("Author Data:", authorData);
      
      if (!authorData) {
        return null;
      }
      
      // Default values
      let name = "Resolvo Team";
      let avatarUrl: string | null = null;
      let twitterLink = "";
      
      // Try to extract name
      if (authorData.fields?.authorName) {
        name = authorData.fields.authorName;
      }
      
      // Try to extract profile picture
      if (authorData.fields?.profilePicture?.fields?.file?.url) {
        const url = authorData.fields.profilePicture.fields.file.url;
        avatarUrl = url.startsWith('//') ? `https:${url}` : url;
      }
      
      // Try to extract social links
      if (authorData.fields?.socialLinks) {
        twitterLink = authorData.fields.socialLinks;
      }
      
      console.log("Extracted author data:", { name, avatarUrl, twitterLink });
      
      return {
        name,
        avatar: avatarUrl,
        socialLinks: {
          twitter: twitterLink
        }
      };
    } catch (error) {
      console.error("Error in getAuthor:", error);
      return null;
    }
  };
  
  const getContent = (): any => {
    const content = post?.fields?.content;
    return content && typeof content === 'object' && content.nodeType === 'document' ? content : null;
  };
  const getCoverImage = (): SafeContentfulImage => getCoverImageData(post);

  // SEO data
  const pageTitle = `${getTitle()} | Resolvo`;
  const pageDescription = getSubtitle();
  const coverImage = getCoverImage();
  const coverImageUrl = coverImage?.url ? (coverImage.url.startsWith('https:') ? coverImage.url : `https:${coverImage.url}`) : ''; 

  // Schema.org structured data
  const authorForSchema = getAuthor();
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": getTitle(),
    "description": getSubtitle(),
    "image": coverImageUrl,
    "datePublished": getDate() || undefined,
    "author": {
      "@type": "Person",
      "name": authorForSchema?.name || "Resolvo Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Resolvo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://resolvo.uk/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png" 
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://resolvo.uk/blog/${slug}` 
    }
  };
  
  // Handle error state from the hook
  if (error) {
      // Option 1: Navigate away (similar to old behavior, but more explicit)
      // useEffect(() => { navigate('/blog'); }, [navigate]); // Needs useEffect if navigating
      // Option 2: Show an error message
      return (
          <div className="min-h-screen bg-white py-12 text-center text-red-600">
              <p>Error loading blog post: {error.message}</p>
              <button 
                  onClick={() => navigate('/blog')} 
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Blog
              </button>
          </div>
      );
  }

  // Render the view component, passing all necessary data and functions
  return (
    <BlogPostView 
      loading={loading}
      post={post}
      relatedPosts={relatedPosts}
      currentPostId={post?.sys.id || ''}
      slug={slug}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      coverImageUrl={coverImageUrl}
      schemaData={schemaData}
      onNavigateBack={() => navigate('/blog')}
      // Pass helper functions
      getTitle={getTitle}
      getSubtitle={getSubtitle}
      getDate={getDate}
      getAuthor={getAuthor}
      getContent={getContent}
      getCoverImage={getCoverImage}
      renderRichText={renderRichText} // Pass the imported function
      getEstimatedReadTime={getEstimatedReadTime} // Pass the local function
    />
  );
};

export default BlogPostPage;
