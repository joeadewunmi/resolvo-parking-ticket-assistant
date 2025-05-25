import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop is a component that scrolls the window to the top
 * whenever the route changes in a React Router application.
 * 
 * It should be placed near the root of your component tree,
 * typically inside the Router component, but not necessarily inside a Route.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Only run this effect if the pathname has changed
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      
      // Only scroll to top if there's no hash (fragment) in the URL
      if (!hash) {
        // Small delay to ensure content is rendered before scrolling
        const timeoutId = setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }, 100);

        return () => clearTimeout(timeoutId);
      } else {
        // If there is a hash, scroll to the element with that ID
        const timeoutId = setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [pathname, hash]);

  // This component doesn't render anything
  return null;
}

export default ScrollToTop; 