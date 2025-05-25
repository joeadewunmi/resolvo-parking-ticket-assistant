import { useEffect } from 'react';
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

  useEffect(() => {
    // Only scroll to top if there's no hash (fragment) in the URL
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // This component doesn't render anything
  return null;
}

export default ScrollToTop; 