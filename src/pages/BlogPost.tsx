import { useParams } from "react-router-dom";
import { Share2 } from "lucide-react";

const blogPosts = {
  "fighting-parking-tickets": {
    title: "Fighting Parking Tickets: A Simple Guide to Appealing",
    content: `
      <h2>Understanding Your Rights</h2>
      <p>When you receive a parking ticket, it's important to know that you have the right to appeal if you believe the ticket was issued unfairly. This guide will walk you through the process of appealing your parking ticket effectively.</p>
      
      <h2>Steps to Appeal</h2>
      <ul>
        <li>Gather evidence (photos, witness statements)</li>
        <li>Review local parking laws</li>
        <li>Write a clear and concise appeal</li>
        <li>Submit within the deadline</li>
      </ul>
    `,
    image: "/placeholder.svg",
    relatedPosts: [
      {
        id: 2,
        title: "Navigating Police Parking Ticket FAQs",
        slug: "police-parking-tickets-faq",
      },
      {
        id: 3,
        title: "Understanding Parking Ticket Appeals",
        slug: "understanding-appeals",
      },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
        
        <button
          onClick={sharePost}
          className="flex items-center text-gray-600 hover:text-accent mb-8"
        >
          <Share2 className="h-5 w-5 mr-2" />
          Share this post
        </button>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <a
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <h3 className="text-lg font-medium text-primary">
                  {relatedPost.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;