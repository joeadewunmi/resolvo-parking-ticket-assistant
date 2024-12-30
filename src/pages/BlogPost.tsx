import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { contentfulClient, BlogPost } from "@/lib/contentful";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const response = await contentfulClient.getEntries<BlogPost>({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
      });
      return response.items[0];
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded w-full mt-8"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-12">
        <div className="text-center text-red-500">
          Failed to load blog post. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>

      <article className="prose prose-lg mx-auto">
        {post.fields.featuredImage && (
          <img
            src={post.fields.featuredImage.fields.file.url}
            alt={post.fields.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        <h1>{post.fields.title}</h1>
        <div className="text-gray-500 mb-8">
          {new Date(post.sys.createdAt).toLocaleDateString()}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.fields.content }} />
      </article>
    </div>
  );
};

export default BlogPostPage;