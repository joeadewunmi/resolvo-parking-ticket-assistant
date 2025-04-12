
import React from "react";
import { mainRoutes } from "./mainRoutes";
import { parkingCompaniesGroup1 } from "./parkingCompaniesRoutes";
import { parkingCompaniesGroup2 } from "./parkingCompaniesRoutes2";
import { parkingCompaniesGroup3 } from "./parkingCompaniesRoutes3";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import SEOHead from "../components/SEOHead";

// Enhanced route configuration with SEO metadata for SSG
export const routeConfig = [
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
  },
];
