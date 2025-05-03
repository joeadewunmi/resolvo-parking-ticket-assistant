import React from 'react';
import { Link } from "react-router-dom";
import { Building } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { supportedCouncils } from '@/data/supportedCouncils';
import TrackingButton from '@/components/ui/TrackingButton';
import { Card, CardContent } from "@/components/ui/card";

const CouncilAppealHub = () => {
  // Sort councils alphabetically by name
  const sortedCouncils = [...supportedCouncils].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Helmet>
        <title>Council Parking Ticket Appeal Information | Resolvo</title>
        <meta name="description" content="Find information and resources to appeal parking tickets from specific UK councils. Get help with your PCN appeal." />
        <link rel="canonical" href="https://resolvo.uk/local-authorities" />
        <meta property="og:title" content="Council Parking Ticket Appeal Information | Resolvo" />
        <meta property="og:description" content="Find information and resources to appeal parking tickets from specific UK councils." />
        <meta property="og:url" content="https://resolvo.uk/local-authorities" />
        <meta name="twitter:title" content="Council Parking Ticket Appeal Information | Resolvo" />
        <meta name="twitter:description" content="Find information and resources to appeal parking tickets from specific UK councils." />
      </Helmet>

      <div className="bg-background text-foreground min-h-screen">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
            <Building className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              UK Council Parking Appeal Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find specific information and resources for appealing parking charge notices (PCNs) from any UK council.
            </p>
            <div className="mt-8">
              <TrackingButton
                href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                eventName="appeal_click"
                eventCategory="engagement"
                eventLabel="local_authorities_hero"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Appeal now
              </TrackingButton>
            </div>
          </div>

          {/* Council List Section */}
          <div className="max-w-6xl mx-auto">
            <Card className="p-6 md:p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sortedCouncils.map((council) => (
                    <Link
                      key={council.slug}
                      to={`/${council.slug}`}
                      className="p-4 rounded-md hover:bg-accent/10 transition-colors duration-200 text-foreground hover:text-primary flex items-center"
                      title={`View appeal guide for ${council.name}`}
                    >
                      <span className="text-sm">{council.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CouncilAppealHub; 