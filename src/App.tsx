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
import NotFound from "./pages/NotFound";
import CouncilPage from "./pages/councils/CouncilPage";

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
import AtlasEnforcement from "./pages/AtlasEnforcement";
import EternityFireSecurity from "./pages/EternityFireSecurity";
import KeyParkingUK from "./pages/KeyParkingUK";
import AzureParking from "./pages/AzureParking";
import BaySentrySolutions from "./pages/BaySentrySolutions";
import WestfieldParking from "./pages/WestfieldParking";
import TotalCarParks from "./pages/TotalCarParks";
import TotalParkingSolutions from "./pages/TotalParkingSolutions";
import UniversityOfEdinburgh from "./pages/UniversityOfEdinburgh";
import UniversityOfKent from "./pages/UniversityOfKent";
import WorkflowDynamics from "./pages/WorkflowDynamics";
// Add imports for the missing pages (combined list)
import FiscParkingSolutions from "./pages/FiscParkingSolutions";
import FlashPark from "./pages/FlashPark";
import GBPManagement from "./pages/GBPManagement";
import GreenParking from "./pages/GreenParking";
import HighviewParking from "./pages/HighviewParking";
import HorizonParking from "./pages/HorizonParking";
import JDParkingConsultants from "./pages/JDParkingConsultants";
import LDKSecurityGroup from "./pages/LDKSecurityGroup";
import LeedsTeachingHospitals from "./pages/LeedsTeachingHospitals";

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
        path: "total-car-parks",
        element: <TotalCarParks />,
      },
      {
        path: "total-parking-solutions",
        element: <TotalParkingSolutions />,
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
      {
        path: "atlas-enforcement",
        element: <AtlasEnforcement />,
      },
      {
        path: "azure-parking",
        element: <AzureParking />,
      },
      {
        path: "bay-sentry-solutions",
        element: <BaySentrySolutions />,
      },
      {
        path: "eternity-fire-security",
        element: <EternityFireSecurity />,
      },
      {
        path: "key-parking-uk",
        element: <KeyParkingUK />,
      },
      {
        path: "university-of-edinburgh",
        element: <UniversityOfEdinburgh />,
      },
      {
        path: "university-of-kent",
        element: <UniversityOfKent />,
      },
      {
        path: "westfield-parking",
        element: <WestfieldParking />,
      },
      {
        path: "workflow-dynamics",
        element: <WorkflowDynamics />,
      },
      // Add routes for the missing pages (alphabetically)
      {
        path: "fisc-parking-solutions",
        element: <FiscParkingSolutions />,
      },
      {
        path: "flashpark",
        element: <FlashPark />,
      },
      {
        path: "gbp-management",
        element: <GBPManagement />,
      },
      {
        path: "green-parking",
        element: <GreenParking />,
      },
      {
        path: "highview-parking",
        element: <HighviewParking />,
      },
      {
        path: "horizon-parking",
        element: <HorizonParking />,
      },
      {
        path: "jd-parking-consultants",
        element: <JDParkingConsultants />,
      },
      {
        path: "ldk-security-group",
        element: <LDKSecurityGroup />,
      },
      {
        path: "leeds-teaching-hospitals",
        element: <LeedsTeachingHospitals />,
      },
      // Move councilSlug route here, just before the catch-all
      {
        path: ":councilSlug",
        element: <CouncilPage />,
      },
      // Catch-all route - MUST BE LAST
      {
        path: "*", 
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
