import React from "react";
import { mainRoutes } from "./mainRoutes";
import { parkingCompaniesGroup1 } from "./parkingCompaniesRoutes";
import { parkingCompaniesGroup2 } from "./parkingCompaniesRoutes2";
import { parkingCompaniesGroup3 } from "./parkingCompaniesRoutes3";
import { councilRoutes } from "./councilRoutes";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/ErrorBoundary";

// Route configuration with SEO metadata
export const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary><Layout /></ErrorBoundary>,
    children: [
      ...mainRoutes,
      ...parkingCompaniesGroup1,
      ...parkingCompaniesGroup2,
      ...parkingCompaniesGroup3,
      ...councilRoutes,
    ],
    meta: {
      title: 'Fight Your Parking Ticket for Free in Minutes',
      description: 'Got a parking ticket? Challenge it in minutes with Resolvo—the free, fast, and simple way to create a personalized appeal letter.',
    },
  },
];
