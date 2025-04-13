
import React from "react";
import { mainRoutes } from "./mainRoutes";
import { parkingCompaniesGroup1 } from "./parkingCompaniesRoutes";
import { parkingCompaniesGroup2 } from "./parkingCompaniesRoutes2";
import { parkingCompaniesGroup3 } from "./parkingCompaniesRoutes3";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/ErrorBoundary";

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
    ],
  },
];
