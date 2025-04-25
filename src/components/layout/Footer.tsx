
import { Link } from "react-router-dom";

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
            <h3 className="text-xl font-bold mb-4">Resolvo</h3>
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
                <Link to="/council-appeal-hub" className="text-sm hover:text-accent">
                  Council Appeal Hub
                </Link>
              </li>
              <li>
                <Link to="/council-pcn-appeal" className="text-sm hover:text-accent">
                  Council PCN Appeal
                </Link>
              </li>
              <li>
                <Link to="/appeal-help" className="text-sm hover:text-accent">
                  Private Company Appeals
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
                <img 
                  src="/lovable-uploads/77a848da-b43f-40d0-9f27-7a8c2bc58193.png"
                  alt="X (formerly Twitter)"
                  className="h-5 w-5 mr-2 brightness-0 invert"
                />
                Follow us on Twitter
              </a>
              <a
                href="https://www.tiktok.com/@resolvoparking1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm hover:text-accent"
              >
                <img 
                  src="/lovable-uploads/208594d9-bfc1-47eb-b8b2-bc5b4c8a57da.png"
                  alt="TikTok"
                  className="h-5 w-5 mr-2 brightness-0 invert bg-transparent"
                />
                Follow us on TikTok
              </a>
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center text-sm hover:text-accent"
              >
                <img 
                  src="/lovable-uploads/a67315a3-9a9d-4913-a9f4-231e38b2a42b.png"
                  alt="WhatsApp"
                  className="h-5 w-5 mr-2 brightness-0 invert"
                />
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Resolvo. All rights reserved.
            <span className="mx-2">|</span>
            <a href="https://sprunkid.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              Sprunkid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
