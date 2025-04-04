
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Brain, CheckCircle } from "lucide-react";
import FAQSection from "@/components/home/FAQSection";
import { faqs } from "@/data/faqs";

const ANPR365 = () => {
  return (
    <div className="min-h-screen">
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
                Appeal Your ANPR 365 Parking Fine
              </h1>
              <p className="mt-6 text-lg text-primary/80">
                Got an ANPR 365 ticket? Get a free appeal written in minutes to help you fight it.
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
                <p className="mt-2 text-sm text-primary/70 font-bold">Used by 800+ users </p>
                <p className="mt-1 text-sm text-primary/70">Requires ChatGPT login</p>
              </div>
            </div>
            <div className="block">
              <img 
                src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.png" 
                alt="Parking officer issuing a ticket from ANPR 365" 
                className="w-full h-auto rounded-lg shadow-xl" 
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
                <img 
                  src="/lovable-uploads/65a99b15-80e2-4483-80cb-824db7613e33.png" 
                  alt="Appeal letter example for fine generated by Resolvo" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover object-top"
                  style={{ maxHeight: "600px" }}
                />
                <p className="text-center mt-4 text-gray-600 text-sm">Written by Resolvo</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary">
                Don't let a parking ticket ruin your day
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                ANPR 365 uses automated cameras to issue parking tickets. But many of them can be challenged if you know the rules.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Resolvo is trained on the latest UK parking laws, including the specific regulations that govern automated number plate recognition (ANPR) systems.
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
            How to Appeal an ANPR 365 Fine in 3 Steps
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
            ANPR 365 Fine FAQs
          </h2>
          <div className="space-y-6">
            {faqs.slice(0, 5).map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col gap-4">
            <Link to="/faq" className="inline-flex items-center text-blue-600 hover:underline">
              View all frequently asked questions
            </Link>
            <Link to="/appeal-help" className="inline-flex items-center text-blue-600 hover:underline">
              Visit our Appeal Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ANPR365;
