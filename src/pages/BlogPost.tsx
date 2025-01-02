import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { contentfulClient, BlogPost, ContentfulQueryParams } from "@/lib/contentful";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense, lazy } from 'react';

const RichTextContent = lazy(() => import('@/components/RichTextContent'));

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const queryParams: ContentfulQueryParams = {
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
        include: 2,
      };
      const response = await contentfulClient.getEntries<BlogPost>(queryParams);
      return response.items[0] as unknown as BlogPost;
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
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
        <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
        
        <div className="text-gray-500 mb-6">
          {new Date(post.fields.publishDate).toLocaleDateString()}
        </div>

        {post.fields.featuredImage && (
          <img
            src={`https:${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
            loading="lazy"
          />
        )}

        <div className="prose max-w-none">
          <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>}>
            {post.fields.content && (
              <RichTextContent content={post.fields.content} />
            )}
          </Suspense>
        </div>

        {post.fields.tags && Array.isArray(post.fields.tags) && post.fields.tags.length > 0 && (
          <div className="flex gap-2 mt-8">
            {post.fields.tags.map((tag) => (
              <Link
                key={tag.sys.id}
                to={`/blog/tag/${tag.fields.tagSlug}`}
                className="bg-secondary px-3 py-1 rounded-full text-sm hover:bg-secondary/80"
              >
                {tag.fields.tagName}
              </Link>
            ))}
          </div>
        )}

        {post.fields.authorName && (
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback>
                  {post.fields.authorName.fields.authorName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">
                  {post.fields.authorName.fields.authorName}
                </h3>
                {post.fields.authorName.fields.socialLinks && (
                  <a
                    href={post.fields.authorName.fields.socialLinks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Social Links
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {post.fields.relatedPost && post.fields.relatedPost.length > 0 && (
          <div className="border-t border-gray-200 mt-8 pt-8">
            <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {post.fields.relatedPost.map((relatedPost) => (
                <Link
                  key={relatedPost.sys.id}
                  to={`/blog/${relatedPost.fields.slug}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    {relatedPost.fields.featuredImage && (
                      <img
                        src={`https:${relatedPost.fields.featuredImage.fields.file.url}`}
                        alt={relatedPost.fields.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                    )}
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2">
                        {relatedPost.fields.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPostPage;