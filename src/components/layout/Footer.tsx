import React from 'react';
import { Link } from "react-router-dom";
import LazyImage from '@/components/ui/LazyImage'; // Import LazyImage

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <LazyImage 
                src="/lovable-uploads/b58acd45-81f6-4d47-b21f-ca0781f07e0c.png" 
                alt="Resolvo Logo" 
                className="h-8 w-8 object-contain" 
                width={32} 
                height={32}
              />
              <span className="text-xl font-bold text-white">Resolvo</span>
            </div>
            <p className="text-sm">
              Fight Your Unfair Parking Fine For Free In Minutes
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
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Appeal Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/appeal-help" className="text-sm hover:text-accent">
                  Appeal Hub
                </Link>
              </li>
              <li>
                <Link to="/councils" className="text-sm hover:text-accent">
                  Councils
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
                <LazyImage 
                  src="/lovable-uploads/77a848da-b43f-40d0-9f27-7a8c2bc58193.png"
                  alt="X (formerly Twitter)"
                  className="h-5 w-5 mr-2 brightness-0 invert"
                  width={20}
                  height={20}
                />
                Follow us on Twitter
              </a>
              <a
                href="https://www.tiktok.com/@resolvoparking1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm hover:text-accent"
              >
                <LazyImage 
                  src="/lovable-uploads/349f9204-8344-4a31-a6b1-ebb5df84cbc5.png"
                  alt="TikTok"
                  className="h-5 w-5 mr-2 brightness-0 invert bg-transparent"
                  width={20}
                  height={20}
                />
                Follow us on TikTok
              </a>
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center text-sm hover:text-accent"
              >
                <LazyImage 
                  src="/lovable-uploads/a67315a3-9a9d-4913-a9f4-231e38b2a42b.png"
                  alt="WhatsApp"
                  className="h-5 w-5 mr-2 brightness-0 invert"
                  width={20}
                  height={20}
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
