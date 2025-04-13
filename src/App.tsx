
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/layout/Layout";
import Home from "./pages/Index";
import Faq from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AppealHelp from "./pages/AppealHub";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ErrorBoundary from "./components/ErrorBoundary";

// Import all parking company pages from the parking directory
import EuroCarParks from "./pages/parking/EuroCarParks";
import EastKentNHS from "./pages/parking/EastKentNHS";
import AllParkingServices from "./pages/parking/AllParkingServices";
import AMParkingServices from "./pages/parking/AMParkingServices";
import ANPR365 from "./pages/parking/ANPR365";
import ParkingCollectionServices from "./pages/parking/ParkingCollectionServices";
import APCOAParking from "./pages/parking/APCOAParking";
import UKParkingAdministration from "./pages/parking/UKParkingAdministration";
import UKPC from "./pages/parking/UKPC";
import UKParkingEnforcement from "./pages/parking/UKParkingEnforcement";
import NSL from "./pages/parking/NSL";
import OCS from "./pages/parking/OCS";
import NSGL from "./pages/parking/NSGL";
import PESS from "./pages/parking/PESS";
import QPark from "./pages/parking/QPark";
import SafeDuty from "./pages/parking/SafeDuty";
import ParkMaven from "./pages/parking/ParkMaven";
import P4Parking from "./pages/parking/P4Parking";
import Carparkers from "./pages/parking/Carparkers";
import ParkingEye from "./pages/parking/ParkingEye";
import MK1Parking from "./pages/parking/MK1Parking";
import RCPParking from "./pages/parking/RCPParking";
import RMCParking from "./pages/parking/RMCParking";
import CityPermits from "./pages/parking/CityPermits";
import PremierPark from "./pages/parking/PremierPark";
import SabaParking from "./pages/parking/SabaParking";
import LodgeParking from "./pages/parking/LodgeParking";
import SmartParking from "./pages/parking/SmartParking";
import CityCarParks from "./pages/parking/CityCarParks";
import SecureASpace from "./pages/parking/SecureASpace";
import SelectParking from "./pages/parking/SelectParking";
import SpringParking from "./pages/parking/SpringParking";
import MinsterBaywatch from "./pages/parking/MinsterBaywatch";
import CarParkServices from "./pages/parking/CarParkServices";
import BritanniaParking from "./pages/parking/BritanniaParking";
import CivilEnforcement from "./pages/parking/CivilEnforcement";
import NationalCarParks from "./pages/parking/NationalCarParks";
import EliteCarParking from "./pages/parking/EliteCarParking";
import METParkingServices from "./pages/parking/METParkingServices";
import ComplyParkSolutions from "./pages/parking/ComplyParkSolutions";
import ObservicesParking from "./pages/parking/ObservicesParking";
import RFCCarParkManagement from "./pages/parking/RFCCarParkManagement";
import CapitalCarParkControl from "./pages/parking/CapitalCarParkControl";
import SecureParkingSolutions from "./pages/parking/SecureParkingSolutions";
import ShieldSecurityServices from "./pages/parking/ShieldSecurityServices";
import ParkingControlSolutions from "./pages/parking/ParkingControlSolutions";
import PrivateParkingSolutions from "./pages/parking/PrivateParkingSolutions";
import DorsetCountyHospital from "./pages/parking/DorsetCountyHospital";
import ProfessionalParkingSolutions from "./pages/parking/ProfessionalParkingSolutions";
import CanterburyChristChurchUniversity from "./pages/parking/CanterburyChristChurchUniversity";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary><Layout /></ErrorBoundary>,
      children: [
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
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        // All parking company routes
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
        {
          path: "safe-duty",
          element: <SafeDuty />,
        },
        {
          path: "parkmaven",
          element: <ParkMaven />,
        },
        {
          path: "p4-parking",
          element: <P4Parking />,
        },
        {
          path: "carparkers",
          element: <Carparkers />,
        },
        {
          path: "parkingeye",
          element: <ParkingEye />,
        },
        {
          path: "mk1-parking",
          element: <MK1Parking />,
        },
        {
          path: "rcp-parking",
          element: <RCPParking />,
        },
        {
          path: "rmc-parking",
          element: <RMCParking />,
        },
        {
          path: "city-permits",
          element: <CityPermits />,
        },
        {
          path: "premier-park",
          element: <PremierPark />,
        },
        {
          path: "saba-parking",
          element: <SabaParking />,
        },
        {
          path: "lodge-parking",
          element: <LodgeParking />,
        },
        {
          path: "smart-parking",
          element: <SmartParking />,
        },
        {
          path: "city-car-parks",
          element: <CityCarParks />,
        },
        {
          path: "secure-a-space",
          element: <SecureASpace />,
        },
        {
          path: "select-parking",
          element: <SelectParking />,
        },
        {
          path: "spring-parking",
          element: <SpringParking />,
        },
        {
          path: "minster-baywatch",
          element: <MinsterBaywatch />,
        },
        {
          path: "car-park-services",
          element: <CarParkServices />,
        },
        {
          path: "britannia-parking",
          element: <BritanniaParking />,
        },
        {
          path: "civil-enforcement",
          element: <CivilEnforcement />,
        },
        {
          path: "national-car-parks",
          element: <NationalCarParks />,
        },
        {
          path: "elite-car-parking",
          element: <EliteCarParking />,
        },
        {
          path: "met-parking-services",
          element: <METParkingServices />,
        },
        {
          path: "comply-park-solutions",
          element: <ComplyParkSolutions />,
        },
        {
          path: "observices-parking",
          element: <ObservicesParking />,
        },
        {
          path: "rfc-car-park-management",
          element: <RFCCarParkManagement />,
        },
        {
          path: "capital-car-park-control",
          element: <CapitalCarParkControl />,
        },
        {
          path: "secure-parking-solutions",
          element: <SecureParkingSolutions />,
        },
        {
          path: "shield-security-services",
          element: <ShieldSecurityServices />,
        },
        {
          path: "parking-control-solutions",
          element: <ParkingControlSolutions />,
        },
        {
          path: "private-parking-solutions",
          element: <PrivateParkingSolutions />,
        },
        {
          path: "dorset-county-hospital",
          element: <DorsetCountyHospital />,
        },
        {
          path: "professional-parking-solutions",
          element: <ProfessionalParkingSolutions />,
        },
        {
          path: "canterbury-christ-church-university",
          element: <CanterburyChristChurchUniversity />,
        },
      ],
    },
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
