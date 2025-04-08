
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Entry } from "contentful";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, BlogPostSkeleton } from "@/lib/contentful";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: getAllBlogPosts,
  });

  useEffect(() => {
    // Set meta tags for this page
    document.title = "Blog | Resolvo - Fight Your Parking Ticket";
  }, []);

  // Helper to safely get image URL
  const getImageUrl = (post: Entry<BlogPostSkeleton>): string | undefined => {
    if (!post?.fields?.featuredImage?.fields?.file?.url) {
      return undefined;
    }
    return `https:${post.fields.featuredImage.fields.file.url}`;
  };

  // Helper to safely get post title
  const getPostTitle = (post: Entry<BlogPostSkeleton>): string => {
    return post?.fields?.title || '';
  };

  // Helper to safely get post description
  const getPostDescription = (post: Entry<BlogPostSkeleton>): string => {
    return post?.fields?.seoDescription || '';
  };

  // Helper to safely get post slug
  const getPostSlug = (post: Entry<BlogPostSkeleton>): string => {
    return post?.fields?.slug || '';
  };

  // Helper to safely format date
  const formatDate = (dateString?: string): string => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (e) {
      return '';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Resolvo Blog</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Latest news and insights about parking tickets and appeals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="h-full">
                <Skeleton className="w-full h-48 rounded-t-lg" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-1/3" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We're having trouble loading our blog posts. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-6">Resolvo Blog</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Latest news and insights about parking tickets and appeals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <Link key={post.sys.id} to={`/blog/${getPostSlug(post)}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                {getImageUrl(post) && (
                  <img
                    src={getImageUrl(post)}
                    alt={getPostTitle(post)}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                )}
                <CardHeader>
                  <CardTitle>{getPostTitle(post)}</CardTitle>
                  <CardDescription>
                    {formatDate(post.fields.publishDate)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="leading-relaxed">
                  {getPostDescription(post)}
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read more</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
