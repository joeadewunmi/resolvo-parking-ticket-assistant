
import React from "react";
import Home from "../pages/Index";
import Faq from "../pages/FAQ";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import AppealHelp from "../pages/AppealHub";

// Main site routes with enhanced SEO metadata
export const mainRoutes = [
  {
    index: true,
    element: <Home />,
    handle: {
      title: "Fight Your Parking Ticket for Free in Minutes",
      description: "Got a parking ticket? Challenge it in minutes with Resolvo—the free, fast, and simple way to create a personalized appeal letter.",
      h1: "Fight Your Parking Ticket for Free in Minutes"
    }
  },
  {
    path: "faq",
    element: <Faq />,
    handle: {
      title: "Frequently Asked Questions About Parking Ticket Appeals | Resolvo",
      description: "Find answers to common questions about challenging parking tickets, appeals process, success rates, and using Resolvo's free parking ticket appeal generator.",
      h1: "Frequently Asked Questions About Parking Ticket Appeals"
    }
  },
  {
    path: "blog",
    element: <Blog />,
    handle: {
      title: "Parking Ticket Appeal Blog | Tips & Advice | Resolvo",
      description: "Expert tips and advice on parking ticket appeals, fighting unfair parking charges, and understanding your rights when dealing with private parking companies.",
      h1: "Parking Ticket Appeal Blog"
    }
  },
  {
    path: "blog/:slug",
    element: <BlogPost />,
    // Blog posts will use dynamic metadata generated from the content
  },
  {
    path: "appeal-help",
    element: <AppealHelp />,
    handle: {
      title: "Get Help With Your Parking Ticket Appeal | Resolvo",
      description: "Find the right help for your parking ticket appeal with Resolvo's free appeal letter generator for all UK parking companies.",
      h1: "Get Help With Your Parking Ticket Appeal"
    }
  },
];
