import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"

import Index from './pages/Index';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AppealHub from './pages/AppealHub';
import EuroCarParks from './pages/EuroCarParks';
import UKParkingAdministration from './pages/UKParkingAdministration';
import UKParkingControl from './pages/UKParkingControl';
import UKParkingEnforcement from './pages/UKParkingEnforcement';
import EastKentNHS from './pages/EastKentNHS';
import AllParkingServices from './pages/AllParkingServices';
import AMParkingServices from './pages/AMParkingServices';
import ANPR365 from './pages/ANPR365';
import ParkingCollectionServices from './pages/ParkingCollectionServices';
import APCOAParking from './pages/APCOAParking';

import WorkflowDynamics from './pages/WorkflowDynamics';
import FlashPark from './pages/FlashPark';
import UniversityOfKent from './pages/UniversityOfKent';
import UniversityOfEdinburgh from './pages/UniversityOfEdinburgh';
import TotalParkingSolutions from './pages/TotalParkingSolutions';
import TotalCarParks from './pages/TotalCarParks';
import SpringParking from './pages/SpringParking';
import SmartParking from './pages/SmartParking';
import ShieldSecurityServices from './pages/ShieldSecurityServices';
import SelectParking from './pages/SelectParking';
import SecureParkingSolutions from './pages/SecureParkingSolutions';
import SecureASpace from './pages/SecureASpace';
import SafeDuty from './pages/SafeDuty';
import SabaParking from './pages/SabaParking';
import RMCParking from './pages/RMCParking';
import RFCCarParkManagement from './pages/RFCCarParkManagement';
import RCPParking from './pages/RCPParking';
import QPark from './pages/QPark';
import AtlasEnforcement from './pages/AtlasEnforcement';
import AzureParking from './pages/AzureParking';
import BaySentrySolutions from './pages/BaySentrySolutions';
import BritanniaParking from './pages/BritanniaParking';

import CanterburyChristChurchUniversity from './pages/CanterburyChristChurchUniversity';
import CapitalCarParkControl from './pages/CapitalCarParkControl';
import CarParkServices from './pages/CarParkServices';
import Carparkers from './pages/Carparkers';
import CityCarParks from './pages/CityCarParks';
import CityPermits from './pages/CityPermits';
import CivilEnforcement from './pages/CivilEnforcement';
import ComplyParkSolutions from './pages/ComplyParkSolutions';
import DorsetCountyHospital from './pages/DorsetCountyHospital';
import WestfieldParking from './pages/WestfieldParking';
import EliteCarParking from './pages/EliteCarParking';
import EternityFireSecurity from './pages/EternityFireSecurity';
import FiscParkingSolutions from './pages/FiscParkingSolutions';
import GBPManagement from './pages/GBPManagement';
import GreenParking from './pages/GreenParking';
import HighviewParking from './pages/HighviewParking';
import HorizonParking from './pages/HorizonParking';
import InitialParking from './pages/InitialParking';
import JDParkingConsultants from './pages/JDParkingConsultants';
import KeyParkingUK from './pages/KeyParkingUK';
import LDKSecurityGroup from './pages/LDKSecurityGroup';
import LodgeParking from './pages/LodgeParking';
import LeedsTeachingHospitals from './pages/LeedsTeachingHospitals';
import METParkingServices from './pages/METParkingServices';
import MinsterBaywatch from './pages/MinsterBaywatch';
import MK1Parking from './pages/MK1Parking';
import NationalCarParks from './pages/NationalCarParks';
import NSGL from './pages/NSGL';
import NSL from './pages/NSL';
import ObservicesParking from './pages/ObservicesParking';
import OCS from './pages/OCS';
import P4Parking from './pages/P4Parking';
import ParkingEye from './pages/ParkingEye';
import ParkingControlSolutions from './pages/ParkingControlSolutions';
import ParkMaven from './pages/ParkMaven';
import PremierPark from './pages/PremierPark';
import PrivateParkingSolutions from './pages/PrivateParkingSolutions';
import ProfessionalParkingSolutions from './pages/ProfessionalParkingSolutions';
import PESS from './pages/PESS';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/appeal-hub" element={<AppealHub />} />
            
            <Route path="/euro-car-parks" element={<EuroCarParks />} />
            <Route path="/uk-parking-administration" element={<UKParkingAdministration />} />
            <Route path="/ukpc" element={<UKParkingControl />} />
            <Route path="/uk-parking-enforcement" element={<UKParkingEnforcement />} />
            <Route path="/east-kent-nhs" element={<EastKentNHS />} />
            <Route path="/all-parking-services" element={<AllParkingServices />} />
            <Route path="/am-parking-services" element={<AMParkingServices />} />
            <Route path="/anpr-365" element={<ANPR365 />} />
            <Route path="/parking-collection-services" element={<ParkingCollectionServices />} />
            <Route path="/apcoa-parking" element={<APCOAParking />} />
            
            <Route path="/workflow-dynamics" element={<WorkflowDynamics />} />
            <Route path="/flashpark" element={<FlashPark />} />
            <Route path="/university-of-kent" element={<UniversityOfKent />} />
            <Route path="/university-of-edinburgh" element={<UniversityOfEdinburgh />} />
            <Route path="/total-parking-solutions" element={<TotalParkingSolutions />} />
            <Route path="/total-car-parks" element={<TotalCarParks />} />
            <Route path="/spring-parking" element={<SpringParking />} />
            <Route path="/smart-parking" element={<SmartParking />} />
            <Route path="/shield-security-services" element={<ShieldSecurityServices />} />
            <Route path="/select-parking" element={<SelectParking />} />
            <Route path="/secure-parking-solutions" element={<SecureParkingSolutions />} />
            <Route path="/secure-a-space" element={<SecureASpace />} />
            <Route path="/safe-duty" element={<SafeDuty />} />
            <Route path="/saba-parking" element={<SabaParking />} />
            <Route path="/rmc-parking" element={<RMCParking />} />
            <Route path="/rfc-car-park-management" element={<RFCCarParkManagement />} />
            <Route path="/rcp-parking" element={<RCPParking />} />
            <Route path="/q-park" element={<QPark />} />
            <Route path="/atlas-enforcement" element={<AtlasEnforcement />} />
            <Route path="/azure-parking" element={<AzureParking />} />
            <Route path="/bay-sentry-solutions" element={<BaySentrySolutions />} />
            <Route path="/britannia-parking" element={<BritanniaParking />} />

            <Route path="/canterbury-christ-church-university" element={<CanterburyChristChurchUniversity />} />
            <Route path="/capital-car-park-control" element={<CapitalCarParkControl />} />
            <Route path="/car-park-services" element={<CarParkServices />} />
            <Route path="/carparkers" element={<Carparkers />} />
            <Route path="/city-car-parks" element={<CityCarParks />} />
            <Route path="/city-permits" element={<CityPermits />} />
            <Route path="/civil-enforcement" element={<CivilEnforcement />} />
            <Route path="/comply-park-solutions" element={<ComplyParkSolutions />} />
            <Route path="/dorset-county-hospital" element={<DorsetCountyHospital />} />
            <Route path="/westfield-parking" element={<WestfieldParking />} />
            <Route path="/elite-car-parking" element={<EliteCarParking />} />
            <Route path="/eternity-fire-security" element={<EternityFireSecurity />} />
            <Route path="/fisc-parking-solutions" element={<FiscParkingSolutions />} />
            <Route path="/gbp-management" element={<GBPManagement />} />
            <Route path="/green-parking" element={<GreenParking />} />
            <Route path="/highview-parking" element={<HighviewParking />} />
            <Route path="/horizon-parking" element={<HorizonParking />} />
            <Route path="/initial-parking" element={<InitialParking />} />
            <Route path="/jd-parking-consultants" element={<JDParkingConsultants />} />
            <Route path="/key-parking-uk" element={<KeyParkingUK />} />
            <Route path="/ldk-security-group" element={<LDKSecurityGroup />} />
            <Route path="/lodge-parking" element={<LodgeParking />} />
            <Route path="/leeds-teaching-hospitals" element={<LeedsTeachingHospitals />} />
            <Route path="/met-parking-services" element={<METParkingServices />} />
            <Route path="/minster-baywatch" element={<MinsterBaywatch />} />
            <Route path="/mk1-parking" element={<MK1Parking />} />
            <Route path="/national-car-parks" element={<NationalCarParks />} />
            <Route path="/nsgl" element={<NSGL />} />
            <Route path="/nsl" element={<NSL />} />
            <Route path="/observices-parking" element={<ObservicesParking />} />
            <Route path="/ocs" element={<OCS />} />
            <Route path="/p4-parking" element={<P4Parking />} />
            <Route path="/parkingeye" element={<ParkingEye />} />
            <Route path="/parking-control-solutions" element={<ParkingControlSolutions />} />
            <Route path="/parkmaven" element={<ParkMaven />} />
            <Route path="/premier-park" element={<PremierPark />} />
            <Route path="/private-parking-solutions" element={<PrivateParkingSolutions />} />
            <Route path="/professional-parking-solutions" element={<ProfessionalParkingSolutions />} />
            <Route path="/pess" element={<PESS />} />
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
