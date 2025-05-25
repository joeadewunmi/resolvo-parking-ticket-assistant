import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Entry, Asset } from 'contentful';
import { getBlogPosts } from '@/lib/contentful';
import { formatDate } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';
import PriorityImage from '@/components/ui/PriorityImage';

// Define the full Entry type using 'any' for fields for simpler access
// This avoids complex typing issues but relies on careful access below
type BlogPostEntry = Entry<any>;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch posts (getBlogPosts returns any[])
      const fetchedPosts = await getBlogPosts();
      // Explicitly cast to any[] to bypass stricter type checking for Contentful Entry
      setPosts((fetchedPosts as any[]) || []); // Ensure posts is always an array
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Safe access helpers using optional chaining and correct Field IDs
  // Cast to expected type at the end for clarity
  const getBlogTitle = (post: BlogPostEntry): string => (post?.fields?.title as string) || '';
  const getBlogSlug = (post: BlogPostEntry): string => (post?.fields?.slug as string) || '';
  const getBlogExcerpt = (post: BlogPostEntry): string => (post?.fields?.seoDescription as string) || ''; // Use seoDescription
  const getBlogDate = (post: BlogPostEntry): string => (post?.fields?.publishDate as string) || ''; // Use publishDate
  const getBlogAuthor = (post: BlogPostEntry): string => {
    // Access nested field safely
    const authorEntry = post?.fields?.authorName as Entry<any>; // Use blogPost's authorName reference field
    // Access the 'authorName' field WITHIN the linked Author entry
    return (authorEntry?.fields?.authorName as string) || ''; // Use the correct field ID from the Author model
  };
  const getBlogCoverImage = (post: BlogPostEntry): string => {
    // Access nested asset fields safely
    const imageAsset = post?.fields?.featuredImage as Asset; // Use featuredImage
    return imageAsset?.fields?.file?.url
      ? `https:${imageAsset.fields.file.url}`
      : '';
  };

  return (
    <>
      <Helmet>
        <title>Blog | Resolvo</title>
        <meta name="description" content="Read our latest articles about parking fines, appeals, and more" />
        <link rel="canonical" href="https://resolvo.uk/blog" />
      </Helmet>

      <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read our latest articles about parking fines, appeals, and advice on how to fight unfair charges
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-gray-600">No blog posts found.</p>
            </div>
          ) : (
            <div>
              {/* Featured post (first post) */}
              {posts.length > 0 && (
                <div className="mb-16">
                  <Link 
                    to={`/blog/${getBlogSlug(posts[0])}`} 
                    className="block group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Image */}
                      {getBlogCoverImage(posts[0]) && (
                        <div className="aspect-[16/9] overflow-hidden rounded-lg">
                          <PriorityImage 
                            src={getBlogCoverImage(posts[0])} 
                            alt={getBlogTitle(posts[0])}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            width={800}
                            height={450}
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div>
                        <div className="text-sm text-gray-500 mb-2">
                          {formatDate(getBlogDate(posts[0]))}
                          {getBlogAuthor(posts[0]) && (
                            <> • By {getBlogAuthor(posts[0])}</>
                          )}
                        </div>
                        <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {getBlogTitle(posts[0])}
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {getBlogExcerpt(posts[0])}
                        </p>
                        <span className="text-primary font-medium group-hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Rest of the posts in a grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map(post => (
                  <Link 
                    key={post.sys.id} 
                    to={`/blog/${getBlogSlug(post)}`} 
                    className="block group"
                  >
                    <div className="h-full flex flex-col">
                      {/* Image */}
                      {getBlogCoverImage(post) && (
                        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                          <LazyImage 
                            src={getBlogCoverImage(post)}
                            alt={getBlogTitle(post)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="flex flex-col flex-1">
                        <div className="text-sm text-gray-500 mb-2">
                          {formatDate(getBlogDate(post))}
                          {getBlogAuthor(post) && (
                            <> • By {getBlogAuthor(post)}</>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {getBlogTitle(post)}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                          {getBlogExcerpt(post)}
                        </p>
                        <span className="text-primary font-medium group-hover:underline mt-auto">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
