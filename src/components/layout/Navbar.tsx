import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Resolvo</span>
              <img 
                src="/lovable-uploads/de7ac283-e809-42cf-a7a3-b92c9a12a975.png" 
                alt="Resolvo Logo" 
                className="h-8 w-8"
                width="32"
                height="32"
              />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4 items-center">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-accent">
                Home
              </Link>
              <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-accent">
                Blog
              </Link>
              <Link to="/faq" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-accent">
                FAQs
              </Link>
              <Link to="/councils" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-accent">
                Councils
              </Link>
              <a
                href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Appeal now</Button>
              </a>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-accent"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-accent"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-accent"
              onClick={toggleMenu}
            >
              FAQs
            </Link>
            <Link
              to="/councils"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-accent"
              onClick={toggleMenu}
            >
              Councils
            </Link>
            <a
              href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2"
              onClick={toggleMenu}
            >
              <Button className="w-full">Appeal now</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
