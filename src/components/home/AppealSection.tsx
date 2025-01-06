import { Link } from "react-router-dom";

const AppealSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl blur-xl"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/65a99b15-80e2-4483-80cb-824db7613e33.png" 
                alt="Example of an AI-generated parking ticket appeal letter showing a detailed appeal against a ParkingEye charge at an Asda car park" 
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
              Resolvo is trained on the latest parking regulations such as the Traffic Management Act to help you write an appeal in minutes.
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
  );
};

export default AppealSection;