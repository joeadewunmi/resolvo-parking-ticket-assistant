import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import EuroCarParks from "./pages/EuroCarParks";
import EastKentNHS from "./pages/EastKentNHS";
import AllParkingServices from "./pages/AllParkingServices";
import AMParkingServices from "./pages/AMParkingServices";
import ANPR365 from "./pages/ANPR365";
import ParkingCollectionServices from "./pages/ParkingCollectionServices";
import APCOAParking from "./pages/APCOAParking";
import UKParkingAdministration from "./pages/UKParkingAdministration";
import UKPC from "./pages/UKPC";
import UKParkingEnforcement from "./pages/UKParkingEnforcement";
import NSL from "./pages/NSL";
import OCS from "./pages/OCS";
import NSGL from "./pages/NSGL";
import PESS from "./pages/PESS";
import QPark from "./pages/QPark";
import SafeDuty from "./pages/SafeDuty";
import ParkMaven from "./pages/ParkMaven";
import P4Parking from "./pages/P4Parking";
import Carparkers from "./pages/Carparkers";
import ParkingEye from "./pages/ParkingEye";
import MK1Parking from "./pages/MK1Parking";
import RCPParking from "./pages/RCPParking";
import RMCParking from "./pages/RMCParking";
import CityPermits from "./pages/CityPermits";
import PremierPark from "./pages/PremierPark";
import SabaParking from "./pages/SabaParking";
import LodgeParking from "./pages/LodgeParking";
import SmartParking from "./pages/SmartParking";
import CityCarParks from "./pages/CityCarParks";
import SecureASpace from "./pages/SecureASpace";
import SelectParking from "./pages/SelectParking";
import SpringParking from "./pages/SpringParking";
import MinsterBaywatch from "./pages/MinsterBaywatch";
import CarParkServices from "./pages/CarParkServices";
import BritanniaParking from "./pages/BritanniaParking";
import CivilEnforcement from "./pages/CivilEnforcement";
import NationalCarParks from "./pages/NationalCarParks";
import EliteCarParking from "./pages/EliteCarParking";
import METParkingServices from "./pages/METParkingServices";
import ComplyParkSolutions from "./pages/ComplyParkSolutions";
import ObservicesParking from "./pages/ObservicesParking";
import RFCCarParkManagement from "./pages/RFCCarParkManagement";
import CapitalCarParkControl from "./pages/CapitalCarParkControl";
import SecureParkingSolutions from "./pages/SecureParkingSolutions";
import ShieldSecurityServices from "./pages/ShieldSecurityServices";
import ParkingControlSolutions from "./pages/ParkingControlSolutions";
import PrivateParkingSolutions from "./pages/PrivateParkingSolutions";
import DorsetCountyHospital from "./pages/DorsetCountyHospital";
import ProfessionalParkingSolutions from "./pages/ProfessionalParkingSolutions";
import CanterburyChristChurchUniversity from "./pages/CanterburyChristChurchUniversity";
import AppealHelp from "./pages/AppealHelp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/euro-car-parks",
      element: <EuroCarParks />,
    },
    {
      path: "/east-kent-nhs",
      element: <EastKentNHS />,
    },
    {
      path: "/all-parking-services",
      element: <AllParkingServices />,
    },
    {
      path: "/am-parking-services",
      element: <AMParkingServices />,
    },
    {
      path: "/anpr-365",
      element: <ANPR365 />,
    },
    {
      path: "/parking-collection-services",
      element: <ParkingCollectionServices />,
    },
    {
      path: "/apcoa-parking",
      element: <APCOAParking />,
    },
    {
      path: "/uk-parking-administration",
      element: <UKParkingAdministration />,
    },
    {
      path: "/ukpc",
      element: <UKPC />,
    },
    {
      path: "/uk-parking-enforcement",
      element: <UKParkingEnforcement />,
    },
    {
      path: "/nsl",
      element: <NSL />,
    },
    {
      path: "/ocs",
      element: <OCS />,
    },
    {
      path: "/nsgl",
      element: <NSGL />,
    },
    {
      path: "/pess",
      element: <PESS />,
    },
    {
      path: "/q-park",
      element: <QPark />,
    },
    {
      path: "/safe-duty",
      element: <SafeDuty />,
    },
    {
      path: "/parkmaven",
      element: <ParkMaven />,
    },
    {
      path: "/p4-parking",
      element: <P4Parking />,
    },
    {
      path: "/carparkers",
      element: <Carparkers />,
    },
    {
      path: "/parkingeye",
      element: <ParkingEye />,
    },
    {
      path: "/mk1-parking",
      element: <MK1Parking />,
    },
    {
      path: "/rcp-parking",
      element: <RCPParking />,
    },
    {
      path: "/rmc-parking",
      element: <RMCParking />,
    },
    {
      path: "/city-permits",
      element: <CityPermits />,
    },
    {
      path: "/premier-park",
      element: <PremierPark />,
    },
    {
      path: "/saba-parking",
      element: <SabaParking />,
    },
    {
      path: "/lodge-parking",
      element: <LodgeParking />,
    },
    {
      path: "/smart-parking",
      element: <SmartParking />,
    },
    {
      path: "/city-car-parks",
      element: <CityCarParks />,
    },
    {
      path: "/secure-a-space",
      element: <SecureASpace />,
    },
    {
      path: "/select-parking",
      element: <SelectParking />,
    },
    {
      path: "/spring-parking",
      element: <SpringParking />,
    },
    {
      path: "/minster-baywatch",
      element: <MinsterBaywatch />,
    },
    {
      path: "/car-park-services",
      element: <CarParkServices />,
    },
    {
      path: "/britannia-parking",
      element: <BritanniaParking />,
    },
    {
      path: "/civil-enforcement",
      element: <CivilEnforcement />,
    },
    {
      path: "/national-car-parks",
      element: <NationalCarParks />,
    },
    {
      path: "/elite-car-parking",
      element: <EliteCarParking />,
    },
    {
      path: "/met-parking-services",
      element: <METParkingServices />,
    },
    {
      path: "/comply-park-solutions",
      element: <ComplyParkSolutions />,
    },
    {
      path: "/observices-parking",
      element: <ObservicesParking />,
    },
    {
      path: "/rfc-car-park-management",
      element: <RFCCarParkManagement />,
    },
    {
      path: "/capital-car-park-control",
      element: <CapitalCarParkControl />,
    },
    {
      path: "/secure-parking-solutions",
      element: <SecureParkingSolutions />,
    },
    {
      path: "/shield-security-services",
      element: <ShieldSecurityServices />,
    },
    {
      path: "/parking-control-solutions",
      element: <ParkingControlSolutions />,
    },
    {
      path: "/private-parking-solutions",
      element: <PrivateParkingSolutions />,
    },
    {
      path: "/dorset-county-hospital",
      element: <DorsetCountyHospital />,
    },
    {
      path: "/professional-parking-solutions",
      element: <ProfessionalParkingSolutions />,
    },
    {
      path: "/canterbury-christ-church-university",
      element: <CanterburyChristChurchUniversity />,
    },
    {
      path: "/appeal-help",
      element: <AppealHelp />,
    },
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
