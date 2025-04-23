import React from "react";
import CouncilPage from "../pages/councils/CouncilPage";

// Council catch-all route for dynamic URL slugs
export const councilRoutes = [
  {
    path: ":councilSlug",
    element: <CouncilPage />,
  },
]; 