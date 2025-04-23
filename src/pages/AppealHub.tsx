import React from 'react';
import { Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQSection from '@/components/home/FAQSection';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

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
  
  { name: "Canterbury Christ Church University Appeal Guide", path: "/canterbury-christ-church-university" },
  { name: "Capital Car Park Control Appeal Guide", path: "/capital-car-park-control" },
  { name: "Car Park Services Appeal Guide", path: "/car-park-services" },
  { name: "Carparkers Appeal Guide", path: "/carparkers" },
  { name: "City Car Parks Appeal Guide", path: "/city-car-parks" },
  { name: "City Permits Appeal Guide", path: "/city-permits" },
  { name: "Civil Enforcement Appeal Guide", path: "/civil-enforcement" },
  { name: "Comply Park Solutions Appeal Guide", path: "/comply-park-solutions" },
  { name: "Dorset County Hospital Foundation Trust Appeal Guide", path: "/dorset-county-hospital" },
  { name: "EFIPS - Westfield Parking Appeal Guide", path: "/westfield-parking" },
  { name: "Elite Car Parking Management Appeal Guide", path: "/elite-car-parking" },
  { name: "Eternity Fire & Security Appeal Guide", path: "/eternity-fire-security" },
  { name: "Fisc Parking Solutions Appeal Guide", path: "/fisc-parking-solutions" },
  { name: "GBP Management Appeal Guide", path: "/gbp-management" },
  { name: "Green Parking Appeal Guide", path: "/green-parking" },
  { name: "Highview Parking Appeal Guide", path: "/highview-parking" },
  { name: "Horizon Parking Appeal Guide", path: "/horizon-parking" },
  { name: "Initial Parking Appeal Guide", path: "/initial-parking" },
  { name: "JD Parking Consultants Appeal Guide", path: "/jd-parking-consultants" },
  { name: "Key Parking UK Appeal Guide", path: "/key-parking-uk" },
  { name: "LDK Security Group Appeal Guide", path: "/ldk-security-group" },
  { name: "Lodge Parking Appeal Guide", path: "/lodge-parking" },
  { name: "Leeds Teaching Hospitals NHS Trust Appeal Guide", path: "/leeds-teaching-hospitals" },
  { name: "MET Parking Services Appeal Guide", path: "/met-parking-services" },
  { name: "Minster Baywatch Appeal Guide", path: "/minster-baywatch" },
  { name: "MK1 Parking Appeal Guide", path: "/mk1-parking" },
  { name: "National Car Parks Appeal Guide", path: "/national-car-parks" },
  { name: "NSGL Appeal Guide", path: "/nsgl" },
  { name: "NSL Appeal Guide", path: "/nsl" },
  { name: "Observices Parking Consultancy Appeal Guide", path: "/observices-parking" },
  { name: "OCS Appeal Guide", path: "/ocs" },
  { name: "P4 Parking Appeal Guide", path: "/p4-parking" },
  { name: "ParkingEye Appeal Guide", path: "/parkingeye" },
  { name: "Parking Control Solutions Appeal Guide", path: "/parking-control-solutions" },
  { name: "ParkMaven Appeal Guide", path: "/parkmaven" },
  { name: "Premier Park Appeal Guide", path: "/premier-park" },
  { name: "Private Parking Solutions Appeal Guide", path: "/private-parking-solutions" },
  { name: "Professional Parking Solutions Appeal Guide", path: "/professional-parking-solutions" },
  { name: "PESS Appeal Guide", path: "/pess" }
];

// Sort companies alphabetically
const sortedCompanies = [...parkingCompanies].sort((a, b) => 
  a.name.localeCompare(b.name)
);

const AppealHub = () => {
  // Group companies into categories for better organization
  const chunkedCompanies = sortedCompanies.reduce((acc, company, index) => {
    const chunkIndex = Math.floor(index / 15);
    if (!acc[chunkIndex]) acc[chunkIndex] = [];
    acc[chunkIndex].push(company);
    return acc;
  }, [] as typeof sortedCompanies[]);

  return (
    <article className="min-h-screen bg-background">
      <Helmet>
        <title>Parking Ticket Appeal Hub | Find Your Appeal Guide</title>
        <meta name="description" content="Find the right appeal guide for your parking ticket. Expert guidance for appealing tickets from all major UK parking companies." />
        <meta name="keywords" content="parking ticket appeal, parking fine appeal, PCN appeal guide, parking company appeals" />
        <link rel="canonical" href="https://resolvo.uk/appeal-hub" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 tracking-tight">
            Parking Ticket Appeal Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Find expert guidance for appealing your parking ticket based on the issuing company
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-10">
          {/* Private Parking Companies Section */}
          <section aria-labelledby="companies-heading">
            <div className="flex items-center gap-3 mb-6">
              <Building className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 id="companies-heading" className="text-2xl font-bold text-primary">
                Appeal Guides by Company
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chunkedCompanies.map((chunk, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {chunk.map((company) => (
                        <li key={company.name}>
                          <Link
                            to={company.path}
                            className="group flex items-center text-foreground hover:text-primary transition-colors duration-200"
                            title={`View appeal guide for ${company.name}`}
                          >
                            <span className="flex-1">{company.name}</span>
                            <ArrowRight 
                              className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section aria-labelledby="cta-heading" className="bg-secondary/20 rounded-lg p-8 text-center">
            <h2 id="cta-heading" className="text-2xl font-bold text-primary mb-4">
              Start Your Appeal Today
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't see your specific parking enforcer? No problem!<br />
              Our AI can help with any type of parking ticket appeal.
            </p>
            <a
              href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              Start Your Appeal
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>
            <FAQSection limit={4} />
          </section>
        </main>
      </div>
    </article>
  );
};

export default AppealHub;
