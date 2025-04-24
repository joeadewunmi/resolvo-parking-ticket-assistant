
import React from 'react';
import { Link } from "react-router-dom";
import { Building, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

// All council slugs from the scripts/council-slugs.js file
const councils = [
  { name: "Barnsley Council", path: "/barnsley" },
  { name: "Birmingham City Council", path: "/birmingham" },
  { name: "Bradford Council", path: "/bradford" },
  { name: "Coventry City Council", path: "/coventry" },
  { name: "Leeds City Council", path: "/leeds" },
  { name: "Leicester City Council", path: "/leicester" },
  { name: "Liverpool City Council", path: "/liverpool" },
  { name: "Manchester City Council", path: "/manchester" },
  { name: "Nottingham City Council", path: "/nottingham" },
  { name: "Plymouth City Council", path: "/plymouth" }
];

// Sort councils alphabetically
const sortedCouncils = [...councils].sort((a, b) => 
  a.name.localeCompare(b.name)
);

const CouncilAppealHub = () => {
  // Group councils into categories for better organization
  const chunkedCouncils = sortedCouncils.reduce((acc, council, index) => {
    const chunkIndex = Math.floor(index / 15);
    if (!acc[chunkIndex]) acc[chunkIndex] = [];
    acc[chunkIndex].push(council);
    return acc;
  }, [] as typeof sortedCouncils[]);

  return (
    <article className="min-h-screen bg-background">
      <Helmet>
        <title>Council PCN Appeal Hub | Find Your Council Appeal Guide</title>
        <meta name="description" content="Find the right appeal guide for your council parking ticket. Expert guidance for appealing PCNs from all major UK councils." />
        <meta name="keywords" content="council PCN appeal, parking fine appeal, council parking ticket appeal guide" />
        <link rel="canonical" href="https://resolvo.uk/council-appeal-hub" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 tracking-tight">
            Council PCN Appeal Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Find expert guidance for appealing your council parking ticket
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-10">
          {/* Councils Section */}
          <section aria-labelledby="councils-heading">
            <div className="flex items-center gap-3 mb-6">
              <Building className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 id="councils-heading" className="text-2xl font-bold text-primary">
                Appeal Guides by Council
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chunkedCouncils.map((chunk, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {chunk.map((council) => (
                        <li key={council.name}>
                          <Link
                            to={council.path}
                            className="group flex items-center text-foreground hover:text-primary transition-colors duration-200"
                            title={`View appeal guide for ${council.name}`}
                          >
                            <span className="flex-1">{council.name}</span>
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
              Don't see your council listed? No problem!<br />
              Our AI can help with any type of council parking ticket appeal.
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
        </main>
      </div>
    </article>
  );
};

export default CouncilAppealHub;
