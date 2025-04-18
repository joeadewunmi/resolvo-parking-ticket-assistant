
import React from "react";
import Home from "../pages/Index";
import Faq from "../pages/FAQ";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import AppealHelp from "../pages/AppealHub";

// Main site routes
export const mainRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:slug",
    element: <BlogPost />,
  },
  {
    path: "appeal-help",
    element: <AppealHelp />,
  },
];
