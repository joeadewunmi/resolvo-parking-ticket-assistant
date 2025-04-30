import { Link } from "react-router-dom";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
              Fight Your Unfair Parking Fine
            </h1>
            <p className="mt-6 text-lg text-primary/80">
              Got a parking ticket? Get an appeal written in minutes to help you challenge it.
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
            <img 
              src="/lovable-uploads/0df908b2-60ab-48ff-ab80-e651966ad99d.png" 
              alt='Photo by Caspar Rae on Unsplash - A parking enforcement officer in a high-visibility yellow jacket issuing a ticket to a white Volkswagen car in a parking lot' 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
