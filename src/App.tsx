
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
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
