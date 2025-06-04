import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Brain, CheckCircle } from "lucide-react";
import FAQSection from "@/components/home/FAQSection";
import { Helmet } from "react-helmet-async";
import TrackingButton from "@/components/ui/TrackingButton";
import LazyImage from '@/components/ui/LazyImage';

interface CouncilTemplateProps {
  councilName: string;
  councilSlug: string;
  faqs: Array<{ question: string; answer: string }>;
}

const CouncilTemplate = ({ councilName, councilSlug, faqs }: CouncilTemplateProps) => {
  // Create FAQ Schema based on the faqs prop
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Appeal Your {councilName} Parking Ticket Appeal for Free with Resolvo</title>
        <meta name="description" content={`Got a parking fine from ${councilName}? Get a winning appeal letter for free to help you fight it`} />
        <link rel="canonical" href={`https://resolvo.uk/${councilSlug}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://resolvo.uk/${councilSlug}`} />
        <meta property="og:title" content={`Appeal Your ${councilName} Parking Ticket Appeal for Free with Resolvo`} />
        <meta property="og:description" content={`Got a parking fine from ${councilName}? Get a winning appeal letter for free to help you fight it`} />
        <meta property="og:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resolvo.uk" />
        <meta property="twitter:url" content={`https://resolvo.uk/${councilSlug}`} />
        <meta name="twitter:title" content={`Appeal Your ${councilName} Parking Ticket Appeal for Free with Resolvo`} />
        <meta name="twitter:description" content={`Got a parking fine from ${councilName}? Get a winning appeal letter for free to help you fight it`} />
        <meta name="twitter:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" />
        {/* Inject FAQ Schema */}
        {faqs && faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-[#FFD700] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 bottom-0">
            <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V200H0V0Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
                Fight Your Unfair {councilName} Parking Fine
              </h1>
              <p className="mt-6 text-lg text-primary/80">
                Got a {councilName} ticket? Get a free appeal written in minutes to help you fight it.
              </p>
              <div className="mt-8">
                <TrackingButton
                  href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                  eventName="appeal_click"
                  eventCategory="engagement"
                  eventLabel={`council_${councilSlug}_hero_section`}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Appeal now
                </TrackingButton>
                <p className="mt-2 text-sm text-primary/70 font-bold">Used by 900+ users </p>
                <p className="mt-1 text-sm text-primary/70">Requires ChatGPT login</p>
              </div>
            </div>
            <div className="block">
              <LazyImage 
                src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.webp" 
                alt={`Parking officer issuing a ticket from ${councilName}`}
                className="w-full h-auto rounded-lg shadow-xl" 
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Appeal Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl blur-xl"></div>
              <div className="relative">
                <LazyImage 
                  src="/lovable-uploads/20205d8ab3571-d3cc-4f1a-ac1b-f2ef9753fe50.webp" 
                  alt={`Appeal letter example for a ${councilName} fine generated by Resolvo`}
                  className="rounded-lg shadow-2xl w-full h-auto object-cover object-top"
                  style={{ maxHeight: "600px" }}
                  width={540}
                  height={720}
                />
                <p className="text-center mt-4 text-gray-600 text-sm">Written by Resolvo</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary">
                Don't let a parking ticket ruin your day
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {councilName} issues many parking tickets every day. But many of them can be challenged if you know the rules.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Resolvo is trained on the latest UK parking laws, including the specific rules that councils must follow when issuing Penalty Charge Notices (PCNs).
              </p>
              <div className="mt-8">
                <TrackingButton
                  href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                  eventName="appeal_click"
                  eventCategory="engagement"
                  eventLabel={`council_${councilSlug}_appeal_section`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  Appeal now
                </TrackingButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-12">
            How to Appeal a {councilName} Fine in 3 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <MessageSquare className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Chat</h3>
              <p className="text-gray-600">Tell us what happened with how you got your ticket, every detail helps. You can even upload a photo of the ticket –and we'll pull out key information automatically</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <Brain className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Understand</h3>
              <p className="text-gray-600">We look at everything you've told us. You might get a few questions to understand what happened. Did you have a permit? Was there a sign?</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <CheckCircle className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Resolve</h3>
              <p className="text-gray-600">We will instantly generate an appeal letter tailored to your situation. You can review it, make any changes you like, and then use it to fight your ticket.</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <TrackingButton
              href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
              eventName="appeal_click"
              eventCategory="engagement"
              eventLabel={`council_${councilSlug}_steps_section`}
              className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Appeal now
            </TrackingButton>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-12">
            {councilName} Fine FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 space-y-4">
            <Link to="/faq" className="inline-flex items-center text-blue-600 hover:underline">
              View all frequently asked questions
            </Link>
            <div>
              <Link to="/appeal-help" className="inline-flex items-center text-blue-600 hover:underline">
                Back to Appeal Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilTemplate; 