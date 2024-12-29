import { Link } from "react-router-dom";
import { MessageSquare, Brain, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-accent to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxNDQwdjUwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ0PSJNMCA1MGM4MCAwIDEyMCA1MCAyMDAgNTBzMTIwLTUwIDIwMC01MCAxMjAgNTAgMjAwIDUwIDEyMC01MCAyMDAtNTAgMTIwIDUwIDIwMCA1MCAxMjAtNTAgMjAwLTUwIDEyMCA1MCAyMDAgNTB2MjAwSDBWNTB6IiBmaWxsPSIjRkZENzAwIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9zdmc+')] animate-wave opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Fight the parking pirates with Resolvo
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-primary/80 sm:text-xl md:mt-8 md:max-w-3xl">
              Don't let unfair parking tickets ruin your day. Use AI-powered appeals to fight back.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <Link
                to="/get-started"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl md:text-lg md:px-12"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Leveraging AI to generate customized appeal statements
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our advanced AI analyzes your ticket and generates a personalized appeal letter based on successful cases.
            </p>
          </div>
        </div>
      </div>

      {/* Three-Step Process */}
      <div className="py-24 bg-gradient-to-br from-secondary/50 to-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Don't let a parking ticket ruin your day
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <MessageSquare className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Chat</h3>
                <p className="text-gray-600">
                  Tell us about your ticket and why you think it's unfair
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Brain className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Understand</h3>
                <p className="text-gray-600">
                  Our AI analyzes your case and relevant laws
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Resolve</h3>
                <p className="text-gray-600">
                  Get your personalized appeal letter
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
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