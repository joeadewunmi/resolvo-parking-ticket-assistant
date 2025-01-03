import { Link } from "react-router-dom";
import { Twitter } from "lucide-react";

const Footer = () => {
  const handleWhatsAppShare = () => {
    const message = "Check out Resolvo - Fight unfair parking tickets with AI-powered appeals!";
    const url = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message + " " + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Resolvo</h3>
            <p className="text-sm">
              Fighting parking tickets with AI-powered appeals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-accent">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm mb-4">
              Questions? Reach out to us at<br />
              resolvoparking@gmail.com
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="https://x.com/resolvoparking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm hover:text-accent"
              >
                <Twitter className="h-5 w-5 mr-2" />
                Follow us on Twitter
              </a>
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center text-sm hover:text-accent"
              >
                <img 
                  src="/lovable-uploads/a67315a3-9a9d-4913-a9f4-231e38b2a42b.png"
                  alt="WhatsApp"
                  className="h-5 w-5 mr-2"
                />
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Resolvo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;