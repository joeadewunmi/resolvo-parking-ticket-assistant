import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TrackingButton from "@/components/ui/TrackingButton";
import Image from '@/components/ui/Image';

const HeroSection = () => {
  return (
    <div className="relative bg-[#FFD700] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 bottom-0">
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V200H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-primary leading-tight">
              Fight Your Unfair Parking Fine
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary/80 max-w-2xl mx-auto lg:mx-0">
              Got a parking ticket? Get an appeal written in minutes to help you challenge it.
            </p>
            <div className="mt-6 sm:mt-8 space-y-3">
              <a
                href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-lg sm:text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                Appeal now
              </a>
              <div className="text-sm text-primary/70 space-y-1">
                <p className="font-bold">Used by 1000+ users</p>
                <p>Requires ChatGPT login</p>
              </div>
            </div>
          </div>
          <div className="block order-first lg:order-last">
            <Image 
              src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.webp" 
              alt="Hero image of someone appealing a parking ticket"
              className="w-full h-auto rounded-lg shadow-xl"
              width={600}
              height={400}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
