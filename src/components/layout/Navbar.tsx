import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackingButton from "@/components/ui/TrackingButton";
import LazyImage from '@/components/ui/LazyImage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <LazyImage 
              src="/lovable-uploads/0b4c80bb-94c0-4d67-a82c-8bfb773d4500.png" 
              alt="Resolvo Logo" 
              className="h-10 w-10" 
              width={40} 
              height={40}
              fetchPriority="high"
            />
            <span className="font-bold text-xl text-primary">Resolvo</span>
          </Link>
          
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
              <TrackingButton
                href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                eventName="appeal_click"
                eventCategory="engagement"
                eventLabel="navbar_appeal_button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
              >
                Appeal now
              </TrackingButton>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Home
          </Link>
          <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Blog
          </Link>
          <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            FAQs
          </Link>
          <Link to="/councils" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
            Councils
          </Link>
          <TrackingButton
            href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
            eventName="appeal_click"
            eventCategory="engagement"
            eventLabel="mobile_appeal_button"
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-50"
          >
            Appeal now
          </TrackingButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
