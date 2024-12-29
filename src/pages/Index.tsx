import { Link } from "react-router-dom";
import { MessageSquare, Brain, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxNDQwdjUwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDUwYzgwIDAgMTIwIDUwIDIwMCA1MHMxMjAtNTAgMjAwLTUwIDEyMCA1MCAyMDAgNTAgMTIwLTUwIDIwMC01MCAxMjAgNTAgMjAwIDUwIDEyMC01MCAyMDAtNTAgMTIwIDUwIDIwMCA1MHYyMDBIMFY1MHoiIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iLjEiLz48L3N2Zz4=')] animate-wave" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
              Fight the parking pirates with Resolvo
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Don't let unfair parking tickets ruin your day. Use AI-powered appeals to fight back.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/get-started"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Leveraging AI to generate customized appeal statements
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our advanced AI analyzes your ticket and generates a personalized appeal letter based on successful cases.
            </p>
          </div>
        </div>
      </div>

      {/* Three-Step Process */}
      <div className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Don't let a parking ticket ruin your day
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MessageSquare className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Chat</h3>
              <p className="text-gray-600">
                Tell us about your ticket and why you think it's unfair
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Understand</h3>
              <p className="text-gray-600">
                Our AI analyzes your case and relevant laws
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Resolve</h3>
              <p className="text-gray-600">
                Get your personalized appeal letter
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
            >
              Start Your Appeal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;