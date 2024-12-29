import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Fighting Parking Tickets: A Simple Guide to Appealing",
    excerpt: "Learn the basics of appealing parking tickets and increase your chances of success.",
    image: "/placeholder.svg",
    slug: "fighting-parking-tickets",
  },
  {
    id: 2,
    title: "Navigating Police Parking Ticket FAQs",
    excerpt: "Common questions about police-issued parking tickets and how to handle them.",
    image: "/placeholder.svg",
    slug: "police-parking-tickets-faq",
  },
  {
    id: 3,
    title: "Understanding Parking Ticket Appeals",
    excerpt: "A comprehensive guide to the parking ticket appeal process.",
    image: "/placeholder.svg",
    slug: "understanding-appeals",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">The Resolvo Blog</h1>
          <p className="text-gray-600">
            Expert insights and tips for handling parking tickets
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary hover:text-accent font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;