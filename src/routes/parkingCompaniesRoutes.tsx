
import React from "react";
import EuroCarParks from "../pages/EuroCarParks";
import EastKentNHS from "../pages/EastKentNHS";
import AllParkingServices from "../pages/AllParkingServices";
import AMParkingServices from "../pages/AMParkingServices";
import ANPR365 from "../pages/ANPR365";
import ParkingCollectionServices from "../pages/ParkingCollectionServices";
import APCOAParking from "../pages/APCOAParking";
import UKParkingAdministration from "../pages/UKParkingAdministration";
import UKPC from "../pages/UKParkingControl";
import UKParkingEnforcement from "../pages/UKParkingEnforcement";
import NSL from "../pages/NSL";
import OCS from "../pages/OCS";
import NSGL from "../pages/NSGL";
import PESS from "../pages/PESS";
import QPark from "../pages/QPark";

// First group of parking companies
export const parkingCompaniesGroup1 = [
  {
    path: "euro-car-parks",
    element: <EuroCarParks />,
  },
  {
    path: "east-kent-nhs",
    element: <EastKentNHS />,
  },
  {
    path: "all-parking-services",
    element: <AllParkingServices />,
  },
  {
    path: "am-parking-services",
    element: <AMParkingServices />,
  },
  {
    path: "anpr-365",
    element: <ANPR365 />,
  },
  {
    path: "parking-collection-services",
    element: <ParkingCollectionServices />,
  },
  {
    path: "apcoa-parking",
    element: <APCOAParking />,
  },
  {
    path: "uk-parking-administration",
    element: <UKParkingAdministration />,
  },
  {
    path: "ukpc",
    element: <UKPC />,
  },
  {
    path: "uk-parking-enforcement",
    element: <UKParkingEnforcement />,
  },
  {
    path: "nsl",
    element: <NSL />,
  },
  {
    path: "ocs",
    element: <OCS />,
  },
  {
    path: "nsgl",
    element: <NSGL />,
  },
  {
    path: "pess",
    element: <PESS />,
  },
  {
    path: "q-park",
    element: <QPark />,
  },
];
