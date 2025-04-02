import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/appeal-help" element={<AppealHub />} />
          <Route path="/euro-car-parks" element={<EuroCarParks />} />
          <Route path="/uk-parking-administration" element={<UKParkingAdministration />} />
          <Route path="/uk-parking-control" element={<UKParkingControl />} />
          <Route path="/uk-parking-enforcement" element={<UKParkingEnforcement />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
