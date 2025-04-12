import React from "react";
import { mainRoutes } from "./mainRoutes";
import { parkingCompaniesGroup1 } from "./parkingCompaniesRoutes";
import { parkingCompaniesGroup2 } from "./parkingCompaniesRoutes2";
import { parkingCompaniesGroup3 } from "./parkingCompaniesRoutes3";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import SEOHead from "../components/SEOHead";

// Route configuration with SEO metadata
export const routes = [
  {
    path: "/",
    element: (
      <>
        <SEOHead />
        <Layout />
      </>
    ),
    errorElement: <ErrorBoundary><Layout /></ErrorBoundary>,
    children: [
      ...mainRoutes,
      ...parkingCompaniesGroup1,
      ...parkingCompaniesGroup2,
      ...parkingCompaniesGroup3,
    ],
    meta: {
      title: 'Fight Your Parking Ticket for Free in Minutes',
      description: 'Got a parking ticket? Challenge it in minutes with Resolvo—the free, fast, and simple way to create a personalized appeal letter.',
    },
  },
];
