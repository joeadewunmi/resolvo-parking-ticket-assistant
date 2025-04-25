
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Building, ArrowRight, Search, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from 'react-helmet-async';
import { createSlug } from '../utils/councilUtils';

// All council names from the scripts/council-slugs.js file
const councilNames = [
  "Barnsley", "Birmingham", "Bolton", "Bradford", "Bury", "Calderdale", "Coventry",
  "Doncaster", "Dudley", "Gateshead", "Kirklees", "Knowsley", "Leeds", "Liverpool",
  "Manchester", "North Tyneside", "Newcastle Upon Tyne", "Oldham", "Rochdale", 
  "Rotherham", "South Tyneside", "Salford", "Sandwell", "Sefton", "Sheffield", 
  "Solihull", "St Helens", "Stockport", "Sunderland", "Tameside", "Trafford", 
  "Wakefield", "Walsall", "Wigan", "Wirral", "Wolverhampton", "Barking and Dagenham", 
  "Barnet", "Bexley", "Brent", "Bromley", "Camden", "Croydon", "Ealing", "Enfield", 
  "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow", "Havering", 
  "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea", "Kingston upon Thames", 
  "Lambeth", "Lewisham", "Merton", "Newham", "Redbridge", "Richmond upon Thames", 
  "Southwark", "Sutton", "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster", 
  "Bath and North East Somerset", "Bedford", "Blackburn with Darwen", "Blackpool", 
  "Bournemouth, Christchurch and Poole", "Bracknell Forest", "Brighton and Hove", 
  "Bristol", "Buckinghamshire", "Central Bedfordshire", "Cheshire East", 
  "Cheshire West and Chester", "Cornwall", "Cumberland", "Darlington", "Derby", 
  "Dorset", "East Riding of Yorkshire", "Halton", "Hartlepool", "Herefordshire", 
  "Isle of Wight", "Hull", "Leicester", "Luton", "Medway", "Middlesbrough", 
  "Milton Keynes", "North East Lincolnshire", "North Lincolnshire", 
  "North Northamptonshire", "North Somerset", "North Yorkshire", "Nottingham", 
  "Peterborough", "Plymouth", "Portsmouth", "Reading", "Redcar and Cleveland", 
  "Rutland", "Shropshire", "Slough", "Somerset", "Southampton", "Southend-on-Sea", 
  "South Gloucestershire", "Stockton-on-Tees", "Stoke-on-Trent", "Swindon", 
  "Telford and Wrekin", "Thurrock", "Torbay", "Warrington", "Westmorland and Furness", 
  "West Berkshire", "West Northamptonshire", "Wiltshire", "Windsor and Maidenhead", 
  "Wokingham", "City of York", "Cambridgeshire", "Derbyshire", "Devon", "East Sussex", 
  "Essex", "Gloucestershire", "Hampshire", "Hertfordshire", "Kent", "Lancashire", 
  "Leicestershire", "Lincolnshire", "Norfolk", "Nottinghamshire", "Oxfordshire", 
  "Staffordshire", "Suffolk", "Surrey", "Warwickshire", "West Sussex", "Worcestershire"
];

// Function to create council objects with name, path and first letter
const generateCouncilsList = () => {
  return councilNames.map(name => ({
    name: `${name} Council`,
    path: `/${createSlug(name)}`,
    firstLetter: name.charAt(0).toUpperCase()
  }));
};

// Group councils by first letter
const groupCouncilsByLetter = (councils) => {
  return councils.reduce((grouped, council) => {
    const letter = council.firstLetter;
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(council);
    return grouped;
  }, {});
};

// Group councils by region (simplified version - in real implementation this would use actual region data)
const regions = {
  "London": ["Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Camden", 
             "Croydon", "Ealing", "Enfield", "Greenwich", "Hackney", "Hammersmith and Fulham",
             "Haringey", "Harrow", "Havering", "Hillingdon", "Hounslow", "Islington", 
             "Kensington and Chelsea", "Kingston upon Thames", "Lambeth", "Lewisham", 
             "Merton", "Newham", "Redbridge", "Richmond upon Thames", "Southwark",
             "Sutton", "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster"],
  "North West": ["Blackburn with Darwen", "Blackpool", "Bolton", "Bury", "Cheshire East", 
                "Cheshire West and Chester", "Cumberland", "Halton", "Knowsley", "Lancashire",
                "Liverpool", "Manchester", "Oldham", "Rochdale", "Salford", "Sefton", 
                "St Helens", "Stockport", "Tameside", "Trafford", "Warrington", 
                "Westmorland and Furness", "Wigan", "Wirral"],
  "North East": ["Darlington", "Durham", "Gateshead", "Hartlepool", "Middlesbrough", 
                "Newcastle Upon Tyne", "North Tyneside", "Northumberland", "Redcar and Cleveland",
                "South Tyneside", "Stockton-on-Tees", "Sunderland"],
  "Yorkshire and the Humber": ["Barnsley", "Bradford", "Calderdale", "Doncaster", "East Riding of Yorkshire",
                              "Hull", "Kirklees", "Leeds", "North East Lincolnshire", 
                              "North Lincolnshire", "North Yorkshire", "Rotherham", "Sheffield",
                              "Wakefield", "York"],
  "West Midlands": ["Birmingham", "Coventry", "Dudley", "Herefordshire", "Sandwell", "Shropshire",
                    "Solihull", "Staffordshire", "Stoke-on-Trent", "Telford and Wrekin", 
                    "Walsall", "Warwickshire", "Wolverhampton", "Worcestershire"],
  "East Midlands": ["Derby", "Derbyshire", "Leicester", "Leicestershire", "Lincolnshire", 
                    "Milton Keynes", "Northamptonshire", "Nottingham", "Nottinghamshire", "Rutland"],
  "East of England": ["Bedford", "Cambridgeshire", "Central Bedfordshire", "Essex", "Hertfordshire", 
                      "Luton", "Norfolk", "Peterborough", "Suffolk", "Thurrock"],
  "South West": ["Bath and North East Somerset", "Bournemouth, Christchurch and Poole", "Bristol",
                "Cornwall", "Devon", "Dorset", "Gloucestershire", "North Somerset", 
                "Plymouth", "Somerset", "South Gloucestershire", "Swindon", "Torbay", "Wiltshire"],
  "South East": ["Bracknell Forest", "Brighton and Hove", "Buckinghamshire", "East Sussex", 
                "Hampshire", "Isle of Wight", "Kent", "Medway", "Oxfordshire", "Portsmouth",
                "Reading", "Slough", "Southampton", "Surrey", "West Berkshire", 
                "West Sussex", "Windsor and Maidenhead", "Wokingham"]
};

// Map council names to their regions
const getCouncilRegion = (councilName) => {
  const simplifiedName = councilName.replace(" Council", "");
  
  for (const [region, councils] of Object.entries(regions)) {
    if (councils.some(council => simplifiedName.startsWith(council))) {
      return region;
    }
  }
  return "Other";
};

// Group councils by region
const groupCouncilsByRegion = (councils) => {
  return councils.reduce((grouped, council) => {
    const region = getCouncilRegion(council.name);
    if (!grouped[region]) {
      grouped[region] = [];
    }
    grouped[region].push(council);
    return grouped;
  }, {});
};

const CouncilPCNAppealHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("alphabetical");
  
  const allCouncils = useMemo(() => generateCouncilsList(), []);
  
  // Filter councils based on search query
  const filteredCouncils = useMemo(() => {
    if (!searchQuery.trim()) return allCouncils;
    
    const query = searchQuery.toLowerCase();
    return allCouncils.filter(council => 
      council.name.toLowerCase().includes(query)
    );
  }, [allCouncils, searchQuery]);
  
  // Group councils by first letter (alphabetical)
  const alphabeticalGroups = useMemo(() => {
    const grouped = groupCouncilsByLetter(filteredCouncils);
    // Sort letters alphabetically
    return Object.keys(grouped).sort().map(letter => ({
      letter,
      councils: grouped[letter].sort((a, b) => a.name.localeCompare(b.name))
    }));
  }, [filteredCouncils]);
  
  // Group councils by region
  const regionalGroups = useMemo(() => {
    const grouped = groupCouncilsByRegion(filteredCouncils);
    // Sort regions alphabetically and then councils alphabetically within regions
    return Object.keys(grouped).sort().map(region => ({
      region,
      councils: grouped[region].sort((a, b) => a.name.localeCompare(b.name))
    }));
  }, [filteredCouncils]);
  
  return (
    <article className="min-h-screen bg-background">
      <Helmet>
        <title>Council PCN Appeal Hub | Guide to Appealing Council Parking Tickets</title>
        <meta name="description" content="Find expert guidance for appealing council parking tickets. Select your local authority and get a customized appeal strategy for your PCN." />
        <meta name="keywords" content="council PCN appeal, parking fine appeal, council PCN, local authority PCN, challenge council parking ticket" />
        <link rel="canonical" href="https://resolvo.uk/council-pcn-appeal-hub" />
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
          {/* Search and Filtering */}
          <section aria-labelledby="search-heading" className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 id="search-heading" className="text-2xl font-bold text-primary">
                Find Your Council
              </h2>
            </div>
            
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for your council..."
                className="w-full pl-10 pr-4 py-3 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>
          </section>
          
          {/* View Tabs */}
          <section aria-labelledby="view-options-heading">
            <Tabs defaultValue="alphabetical" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 id="view-options-heading" className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Building className="h-6 w-6" aria-hidden="true" />
                  All Councils
                </h2>
                
                <TabsList className="grid grid-cols-2 w-[300px]">
                  <TabsTrigger value="alphabetical">Alphabetical</TabsTrigger>
                  <TabsTrigger value="regional">By Region</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="alphabetical" className="space-y-8">
                {filteredCouncils.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No councils found matching "{searchQuery}"</p>
                    <Button 
                      variant="outline" 
                      className="mt-4" 
                      onClick={() => setSearchQuery("")}
                    >
                      Clear search
                    </Button>
                  </div>
                ) : (
                  alphabeticalGroups.map(group => (
                    <div key={group.letter} className="space-y-4">
                      <h3 id={`letter-${group.letter}`} className="text-2xl font-bold text-primary border-b pb-2">
                        {group.letter}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.councils.map(council => (
                          <Link
                            key={council.path}
                            to={council.path}
                            className="flex items-center justify-between p-4 bg-card hover:bg-accent/10 rounded-lg transition-colors duration-200"
                          >
                            <span>{council.name}</span>
                            <ArrowRight className="h-4 w-4 opacity-70" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              
              <TabsContent value="regional" className="space-y-8">
                {filteredCouncils.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No councils found matching "{searchQuery}"</p>
                    <Button 
                      variant="outline" 
                      className="mt-4" 
                      onClick={() => setSearchQuery("")}
                    >
                      Clear search
                    </Button>
                  </div>
                ) : (
                  regionalGroups.map(group => (
                    <Card key={group.region} className="overflow-hidden">
                      <CardContent className="p-0">
                        <h3 id={`region-${group.region}`} className="text-xl font-bold text-primary bg-accent/10 p-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5" aria-hidden="true" />
                          {group.region}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                          {group.councils.map(council => (
                            <Link
                              key={council.path}
                              to={council.path}
                              className="flex items-center justify-between p-3 hover:bg-accent/10 rounded-md transition-colors duration-200"
                            >
                              <span>{council.name}</span>
                              <ArrowRight className="h-4 w-4 opacity-70" />
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </section>

          {/* Call to Action Section */}
          <section aria-labelledby="cta-heading" className="bg-secondary/20 rounded-lg p-8 text-center mt-16">
            <h2 id="cta-heading" className="text-2xl font-bold text-primary mb-4">
              Start Your Council PCN Appeal Today
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

export default CouncilPCNAppealHub;
