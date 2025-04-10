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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RefreshCw } from "lucide-react";

const Blog = () => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: getAllBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes (matches cache TTL)
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  useEffect(() => {
    // Set meta tags for this page
    document.title = "Blog | Resolvo - Fight Your Parking Ticket";
  }, []);

  // Helper to safely get image URL
  const getImageUrl = (post: Entry<BlogPostSkeleton>): string | undefined => {
    if (
      !post || 
      !post.fields || 
      !post.fields.featuredImage || 
      !post.fields.featuredImage.fields || 
      !post.fields.featuredImage.fields.file || 
      !post.fields.featuredImage.fields.file.url
    ) {
      return undefined;
    }
    return `https:${post.fields.featuredImage.fields.file.url}`;
  };

  // Helper to safely get post title
  const getPostTitle = (post: Entry<BlogPostSkeleton>): string => {
    if (!post || !post.fields || typeof post.fields.title !== 'string') {
      return '';
    }
    return post.fields.title;
  };

  // Helper to safely get post description
  const getPostDescription = (post: Entry<BlogPostSkeleton>): string => {
    if (!post || !post.fields || typeof post.fields.seoDescription !== 'string') {
      return '';
    }
    return post.fields.seoDescription;
  };

  // Helper to safely get post slug
  const getPostSlug = (post: Entry<BlogPostSkeleton>): string => {
    if (!post || !post.fields || typeof post.fields.slug !== 'string') {
      return '';
    }
    return post.fields.slug;
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

  const handleRetry = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Resolvo Blog</h1>
            <p className="text-gray-600">
              Latest news and insights about parking tickets and appeals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

  if (isError) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Resolvo Blog</h1>
          <Alert className="max-w-2xl mx-auto my-8 bg-red-50 border border-red-200">
            <AlertTitle className="text-lg font-semibold text-red-700">
              Oops! We're having trouble loading our blog posts.
            </AlertTitle>
            <AlertDescription className="text-red-600 mt-2">
              We couldn't fetch the latest blog posts. This might be a temporary issue.
            </AlertDescription>
          </Alert>
          <Button 
            onClick={handleRetry} 
            className="mt-4 flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Handle the case where posts might be null or empty
  const hasNoPosts = !posts || posts.length === 0;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Resolvo Blog</h1>
          <p className="text-gray-600">
            Latest news and insights about parking tickets and appeals
          </p>
        </div>

        {hasNoPosts ? (
          <div className="text-center">
            <p className="text-lg text-gray-600">No blog posts available at the moment.</p>
            <Button onClick={handleRetry} className="mt-4">
              Refresh
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const imageUrl = getImageUrl(post);
              const title = getPostTitle(post);
              const description = getPostDescription(post);
              const slug = getPostSlug(post);
              const date = post.fields && post.fields.publishDate ? formatDate(post.fields.publishDate) : '';
              
              return (
                <Link key={post.sys.id} to={`/blog/${slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                    )}
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {description}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read more</Button>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
