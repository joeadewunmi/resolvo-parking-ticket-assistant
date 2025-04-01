import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, BlogPostSkeleton } from "@/lib/contentful";
import { Entry } from "contentful";

const Blog = () => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery<Entry<BlogPostSkeleton>[]>({
    queryKey: ["blog-posts"],
    queryFn: async () => getAllBlogPosts(),
    structuralSharing: false,
    refetchOnWindowFocus: false, // ✅ Prevent re-fetch on tab switch
    staleTime: 1000 * 60 * 5,     // ✅ Cache for 5 minutes
    enabled: true,                // ✅ Explicitly enabled for clarity
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 bg-white">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 bg-white">
        <div className="text-center text-red-500">
          Failed to load blog posts. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 bg-white">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <Link key={post.sys.id} to={`/blog/${post.fields.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              {post.fields.featuredImage && (
                <img
                  src={`https:${post.fields.featuredImage.fields.file.url}`}
                  alt={post.fields.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
              )}
              <CardHeader>
                <CardTitle>{post.fields.title}</CardTitle>
                <CardDescription>
                  {new Date(post.fields.publishDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">
                  {post.fields.seoDescription || ""}
                </p>
                <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
