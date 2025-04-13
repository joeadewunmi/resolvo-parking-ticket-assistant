
import React from "react";
import EuroCarParks from "../pages/parking/EuroCarParks";
import EastKentNHS from "../pages/parking/EastKentNHS";
import AllParkingServices from "../pages/parking/AllParkingServices";
import AMParkingServices from "../pages/parking/AMParkingServices";
import ANPR365 from "../pages/parking/ANPR365";
import ParkingCollectionServices from "../pages/parking/ParkingCollectionServices";
import APCOAParking from "../pages/parking/APCOAParking";
import UKParkingAdministration from "../pages/parking/UKParkingAdministration";
import UKPC from "../pages/parking/UKParkingControl";
import UKParkingEnforcement from "../pages/parking/UKParkingEnforcement";
import NSL from "../pages/parking/NSL";
import OCS from "../pages/parking/OCS";
import NSGL from "../pages/parking/NSGL";
import PESS from "../pages/parking/PESS";
import QPark from "../pages/parking/QPark";

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
