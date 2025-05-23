
import { RouteObject } from 'react-router-dom';
import Index from '../pages/Index';
import FAQ from '../pages/FAQ';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import AppealHub from '../pages/AppealHub';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPost />,
  },
  {
    path: '/appeal-hub',
    element: <AppealHub />,
  },
];
