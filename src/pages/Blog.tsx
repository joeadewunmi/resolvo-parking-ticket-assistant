import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Entry } from 'contentful';
import { getBlogPosts } from '@/lib/contentful';
import { BlogPostSkeleton } from '@/types/contentful';
import { formatDate } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState<Entry<BlogPostSkeleton>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getBlogPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Safe access helpers
  const getBlogTitle = (post: Entry<BlogPostSkeleton>) => post?.fields?.title || '';
  const getBlogSlug = (post: Entry<BlogPostSkeleton>) => post?.fields?.slug || '';
  const getBlogExcerpt = (post: Entry<BlogPostSkeleton>) => post?.fields?.excerpt || '';
  const getBlogDate = (post: Entry<BlogPostSkeleton>) => post?.fields?.date || '';
  const getBlogAuthor = (post: Entry<BlogPostSkeleton>) => post?.fields?.author?.fields?.name || '';
  
  // Safe image URL helper
  const getBlogCoverImage = (post: Entry<BlogPostSkeleton>) => {
    return post?.fields?.coverImage?.fields?.file?.url 
      ? `https:${post.fields.coverImage.fields.file.url}`
      : '';
  };

  return (
    <>
      <Helmet>
        <title>Blog | Resolvo</title>
        <meta name="description" content="Read our latest articles about parking fines, appeals, and more" />
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
                          <img 
                            src={getBlogCoverImage(posts[0])} 
                            alt={getBlogTitle(posts[0])}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                          <img 
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
