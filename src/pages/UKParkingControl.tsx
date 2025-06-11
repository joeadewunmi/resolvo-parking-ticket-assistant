import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Brain, CheckCircle } from "lucide-react";
import FAQSection from "@/components/home/FAQSection";
import { euroCarParksFaqs } from "@/data/faqs";
import { Helmet } from "react-helmet-async";
import Image from "@/components/ui/Image";

const UKParkingControl = () => {
  // Prepare FAQs for schema, adapting from euroCarParksFaqs
  const schemaFaqs = euroCarParksFaqs.map(faq => ({
    question: faq.question.replace("Euro Car Parks", "UKPC"),
    answer: faq.answer.replace(/Euro Car Parks/g, "UKPC")
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": schemaFaqs.map(faq => ({
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
        <title>Appeal Your UKPC Fine | Resolvo</title>
        <meta name="description" content="Got a UKPC parking ticket? Get a free appeal written in minutes to help you fight it." />
        <link rel="canonical" href="https://resolvo.uk/ukpc" />
        <meta property="og:title" content="Appeal Your UKPC Fine | Resolvo" />
        <meta property="og:description" content="Got a UKPC parking ticket? Get a free appeal written in minutes to help you fight it." />
        <meta property="og:url" content="https://resolvo.uk/ukpc" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Appeal Your UKPC Fine | Resolvo" />
        <meta name="twitter:description" content="Got a UKPC parking ticket? Get a free appeal written in minutes to help you fight it." />
        <meta name="twitter:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" />
        {/* Inject FAQ Schema */}
        {schemaFaqs && schemaFaqs.length > 0 && (
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
                Appeal Your UKPC Fine
              </h1>
              <p className="mt-6 text-lg text-primary/80">
                Got a UKPC ticket? Get a free appeal written in minutes to help you fight it.
              </p>
              <div className="mt-8">
                <a
                  href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Appeal now
                </a>
                <p className="mt-2 text-sm text-primary/70 font-bold">Used by 1000+ users </p>
                <p className="mt-1 text-sm text-primary/70">Requires ChatGPT login</p>
              </div>
            </div>
            <div className="block">
              <Image 
                src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.webp" 
                alt="Parking officer issuing a ticket from UKPC" 
                className="w-full h-auto rounded-lg shadow-xl" 
                width={800}
                height={600}
                loading="eager"
                fetchPriority="high"
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
                <Image 
                  src="/lovable-uploads/20205d8ab3571-d3cc-4f1a-ac1b-f2ef9753fe50.webp" 
                  alt="Appeal letter example for a UKPC fine generated by Resolvo" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover object-top"
                  style={{ maxHeight: "600px" }}
                  width={800}
                  height={600}
                />
                <p className="text-center mt-4 text-gray-600 text-sm">Written by Resolvo</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary">
                Don't let a parking ticket ruin your day
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                UKPC issues thousands of parking tickets every year. But many of them can be challenged if you know the rules.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Resolvo is trained on the latest UK parking laws, including the rules UKPC must follow as a member of the British Parking Association.
              </p>
              <div className="mt-8">
                <a
                  href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  Appeal now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-12">
            How to Appeal a UKPC Fine in 3 Steps
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
            <a
              href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Appeal now
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-12">
            UKPC Fine FAQs
          </h2>
          <div className="space-y-6">
            {euroCarParksFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{faq.question.replace("Euro Car Parks", "UKPC")}</h3>
                <p className="text-gray-600">{faq.answer.replace(/Euro Car Parks/g, "UKPC")}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/faq" className="inline-flex items-center justify-center text-blue-600 hover:underline">
                View all frequently asked questions
              </Link>
              <Link to="/appeal-hub" className="inline-flex items-center justify-center text-blue-600 hover:underline">
                Appeal Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UKParkingControl;
