import React from 'react';
import { Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQSection from '@/components/home/FAQSection';

// All parking companies with routes
const parkingCompanies = [
  { name: "APCOA Parking Appeal Guide", path: "/apcoa-parking" },
  { name: "All Parking Services Appeal Guide", path: "/all-parking-services" },
  { name: "AM Parking Services Appeal Guide", path: "/am-parking-services" },
  { name: "ANPR 365 Appeal Guide", path: "/anpr-365" },
  { name: "East Kent NHS Appeal Guide", path: "/east-kent-nhs" },
  { name: "Euro Car Parks Appeal Guide", path: "/euro-car-parks" },
  { name: "Parking Collection Services Appeal Guide", path: "/parking-collection-services" },
  { name: "UK Parking Administration Appeal Guide", path: "/uk-parking-administration" },
  { name: "UK Parking Control (UKPC) Appeal Guide", path: "/ukpc" },
  { name: "UK Parking Enforcement Appeal Guide", path: "/uk-parking-enforcement" },
  
  { name: "Workflow Dynamics Appeal Guide", path: "/workflow-dynamics" },
  { name: "FlashPark Appeal Guide", path: "/flashpark" },
  { name: "University of Kent Appeal Guide", path: "/university-of-kent" },
  { name: "University of Edinburgh Appeal Guide", path: "/university-of-edinburgh" },
  { name: "Total Parking Solutions Appeal Guide", path: "/total-parking-solutions" },
  { name: "Total Car Parks Appeal Guide", path: "/total-car-parks" },
  { name: "Spring Parking Appeal Guide", path: "/spring-parking" },
  { name: "Smart Parking Appeal Guide", path: "/smart-parking" },
  { name: "Shield Security Services Appeal Guide", path: "/shield-security-services" },
  { name: "Select Parking Appeal Guide", path: "/select-parking" },
  { name: "Secure Parking Solutions Appeal Guide", path: "/secure-parking-solutions" },
  { name: "Secure A Space Appeal Guide", path: "/secure-a-space" },
  { name: "Safe Duty Appeal Guide", path: "/safe-duty" },
  { name: "Saba Parking Appeal Guide", path: "/saba-parking" },
  { name: "RMC Parking Appeal Guide", path: "/rmc-parking" },
  { name: "RFC Car Park Management Appeal Guide", path: "/rfc-car-park-management" },
  { name: "RCP Parking Appeal Guide", path: "/rcp-parking" },
  { name: "Q Park Appeal Guide", path: "/q-park" },
  { name: "Atlas Enforcement Appeal Guide", path: "/atlas-enforcement" },
  { name: "Azure Parking Appeal Guide", path: "/azure-parking" },
  { name: "Bay Sentry Solutions Appeal Guide", path: "/bay-sentry-solutions" },
  { name: "Britannia Parking Appeal Guide", path: "/britannia-parking" },
];

// Sort companies alphabetically
const sortedCompanies = [...parkingCompanies].sort((a, b) => 
  a.name.localeCompare(b.name)
);

const AppealHub = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Appeal Hub</h1>
          <p className="text-xl text-gray-600">
            Find the right appeal guide based on who issued your parking ticket
          </p>
        </div>
        
        <div className="space-y-10">
          {/* Private Parking Companies Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Appeal a Fine from a Private Parking Company</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {sortedCompanies.map((company, index) => (
                  <li key={index}>
                    <Link to={company.path} className="text-blue-600 hover:underline flex items-center">
                      <span>{company.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="text-center mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-4">Start Your Appeal Today</h2>
            <p className="text-lg mb-6">
              Don't see your specific parking enforcer? No problem!<br />
              Our AI can help with any type of parking ticket appeal.
            </p>
            <a
              href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Appeal now
            </a>
          </section>
          
          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection limit={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppealHub;
