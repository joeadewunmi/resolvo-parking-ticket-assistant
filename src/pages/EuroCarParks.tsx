
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const EuroCarParks = () => {
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
                Appeal Your Euro Car Parks Fine
              </h1>
              <p className="mt-6 text-lg text-primary/80">
                Got a Euro Car Parks ticket? Get a free appeal letter written in minutes using up-to-date UK parking regulations.
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
              <div className="mt-6">
                <Link to="/appeal-hub" className="inline-flex items-center text-primary hover:text-primary/80">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Appeal Hub
                </Link>
              </div>
            </div>
            <div className="block">
              <img 
                src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.png" 
                alt="A parking enforcement officer from Euro Car Parks issuing a ticket to a white car in a parking lot" 
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
                  alt="Example of an AI-generated appeal letter for a Euro Car Parks fine showing detailed grounds for appeal" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover object-top"
                  style={{ maxHeight: "600px" }}
                />
                <p className="text-center mt-4 text-gray-600 text-sm">Written by Resolvo</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary">
                Don't pay your Euro Car Parks fine without appealing first
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Euro Car Parks issues thousands of parking tickets every day. Many can be successfully challenged if you know the right regulations and procedures.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Resolvo is trained on the latest UK parking laws, including the rules Euro Car Parks must follow as a member of the British Parking Association.
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
            How to Appeal Your Euro Car Parks Fine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Tell Us About Your Fine</h3>
              <p className="text-gray-600">Share the details about your Euro Car Parks fine, the location, and why you believe it's unfair. Upload a photo of your ticket for faster results.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 17.5c2.5 0 4.5-2 4.5-4.5 0-1.5-.5-2-2-3-1.4-.9-2-1.8-2-3 0-1.1.9-2 2-2"></path><path d="M12 4v1"></path><path d="M12 19v1"></path></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Get Expert Guidance</h3>
              <p className="text-gray-600">Our AI will analyze your case using British Parking Association guidelines that Euro Car Parks must follow, identifying the strongest grounds for appeal.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-secondary rounded-lg">
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Submit Your Appeal</h3>
              <p className="text-gray-600">Receive a professional appeal letter for your Euro Car Parks fine that you can submit immediately. No legal expertise required.</p>
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
            Euro Car Parks Fine FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">How long do I have to appeal a Euro Car Parks fine?</h3>
              <p className="text-gray-600">You typically have 28 days to appeal a Euro Car Parks Parking Charge Notice (PCN). It's important to act quickly as the fine can increase after this period.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Can Euro Car Parks legally enforce their fines?</h3>
              <p className="text-gray-600">As a private company, Euro Car Parks can't issue "fines" like authorities can, but they can issue Parking Charge Notices based on breach of contract. They would need to take you to court to enforce payment.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What are common grounds for appealing a Euro Car Parks ticket?</h3>
              <p className="text-gray-600">Common grounds include: unclear signage, payment machine issues, valid ticket but displayed incorrectly, mitigating circumstances, or errors in the PCN details.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">How successful are appeals against Euro Car Parks?</h3>
              <p className="text-gray-600">Many appeals are successful, especially when the parking operator hasn't followed proper procedures. A well-written appeal with clear evidence has a good chance of success.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/faq" className="inline-flex items-center text-blue-600 hover:underline">
              View all frequently asked questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuroCarParks;
