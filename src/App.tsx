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

// New parking company pages
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

// Create a client
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
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
