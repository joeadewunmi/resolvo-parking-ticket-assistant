
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getClient, renderRichText } from "../lib/contentful";
import { BlogPost, PostMetaType } from "../types/contentful";
import { Helmet } from "react-helmet-async";
import BlogPostHeader from "../components/blog/BlogPostHeader";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostAuthor from "../components/blog/BlogPostAuthor";
import BlogPostTags from "../components/blog/BlogPostTags";
import RelatedPosts from "../components/blog/RelatedPosts";

// Type-check the image field properly
const getImageUrl = (image: any) => {
  if (!image) return null;
  // Check if it's a contentful Asset with fields
  if (image.fields && image.fields.file) {
    return `https:${image.fields.file.url}`;
  }
  // Handle other potential formats
  return null;
};

// Function to extract author information from the contentful entry
const extractAuthorInfo = (authorEntry: any) => {
  if (!authorEntry?.fields) return null;
  
  const authorFields = authorEntry.fields;
  
  return {
    name: authorFields.name || '',
    bio: authorFields.bio || '',
    avatar: authorFields.avatar?.fields?.file?.url 
      ? `https:${authorFields.avatar.fields.file.url}` 
      : undefined,
    socialLinks: {
      twitter: authorFields.twitter || undefined,
      linkedin: authorFields.linkedin || undefined,
      website: authorFields.website || undefined,
    }
  };
};

// Function to prepare cover image data from contentful entry
const prepareCoverImage = (featuredImage: any) => {
  if (!featuredImage?.fields) return null;
  
  return {
    url: featuredImage.fields.file?.url || '',
    title: featuredImage.fields.title || '',
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<PostMetaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const client = getClient();
        
        // Fetch the blog post
        const response = await client.getEntries({
          content_type: "blogPost",
          "fields.slug": slug,
          include: 2, // Include linked entries (like author)
        });

        if (response.items.length === 0) {
          setError("Post not found");
          setLoading(false);
          return;
        }

        const postData = response.items[0];
        setPost(postData as unknown as BlogPost);

        // Fetch related posts (posts with similar tags)
        if (postData.fields.tags) {
          const tagsQuery = postData.fields.tags
            .map((tag: string) => `"${tag}"`)
            .join(",");
          
          const relatedResponse = await client.getEntries({
            content_type: "blogPost",
            "fields.slug[ne]": slug, // Exclude current post
            "fields.tags[in]": tagsQuery,
            limit: 3,
            order: "-fields.publishDate",
          });

          setRelatedPosts(relatedResponse.items as unknown as PostMetaType[]);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Error fetching blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    // Reset state when slug changes
    return () => {
      setPost(null);
      setRelatedPosts([]);
      setError(null);
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            {error || "Post not found"}
          </h1>
          <p className="mb-8">
            The blog post you're looking for couldn't be found.
          </p>
        </div>
      </div>
    );
  }

  const {
    title,
    subtitle = '',
    author,
    publishDate,
    featuredImage,
    content,
    tags,
  } = post.fields;

  // Prepare data for components
  const authorInfo = extractAuthorInfo(author);
  const coverImage = prepareCoverImage(featuredImage);

  return (
    <article className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Resolvo Blog</title>
        <meta name="description" content={subtitle || ""} />
        {tags && <meta name="keywords" content={tags.join(", ")} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle || ""} />
        {coverImage && <meta property="og:image" content={`https:${coverImage.url}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle || ""} />
        {coverImage && <meta name="twitter:image" content={`https:${coverImage.url}`} />}
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <BlogPostHeader 
            title={title} 
            subtitle={subtitle || ''} 
            date={publishDate} 
            author={authorInfo || {name: 'Unknown'}} 
            coverImage={coverImage} 
          />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <BlogPostContent content={content} />
            </div>
            
            <aside className="space-y-8">
              {author && <BlogPostAuthor author={author} />}
              {tags && tags.length > 0 && <BlogPostTags tags={tags} />}
            </aside>
          </div>
          
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <RelatedPosts posts={relatedPosts} currentPostId={post.sys.id} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
