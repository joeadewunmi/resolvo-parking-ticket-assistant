import { Link } from "react-router-dom";
import { MessageSquare, Brain, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
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
                Fight Your Unfair Parking Fine
              </h1>
              <p className="mt-6 text-lg text-primary/80">
                Got a parking ticket? Resolvo will write an appeal for you in minutes - quick,easy and stress-free.
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
                <p className="mt-2 text-sm text-primary/70"> Used by 500+ people to sort out their tickets.</p>
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
                Just got a parking ticket? Resolvo helps you write an appeal in minutes - quick, easy and stress free.
              </p>
              <div className="mt-8">
                <Link
                  to="/get-started"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  Appeal now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
         {/* Three-Step Process */}
      <div className="py-24 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Chat",
                description: "Simply start a conversation with Resolvo. Tell it about your parking ticket conditions."
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Understand",
                description: "Resolvo will ask a few quick questions to understand your situation better."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Resolve",
                description: "Your letter will be written and ready for you to present with your appeal."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-secondary rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            
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
            Resolvo FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What is Resolvo?",
                answer: "Resolvo is an AI-powered service that helps you appeal parking tickets."
              },
              {
                question: "Is Resolvo free to use?",
                answer: "Yes, Resolvo is completely free to use for basic appeals."
              },
              {
                question: "How does Resolvo work?",
                answer: "Resolvo uses AI to analyze your situation and generate a customized appeal letter."
              },
              {
                question: "What if I have multiple parking tickets?",
                answer: "Resolvo can help you appeal multiple tickets. Each ticket will be handled individually."
              },
              {
                question: "Can Resolvo guarantee a successful appeal?",
                answer: "While Resolvo provides expert advice on fighting your parking ticket and maintains a high rate of success, we cannot guarantee that your ticket will be dismissed."
              },
              {
                question: "How does Resolvo protect my privacy?",
                answer: "We use industry-standard encryption and never share your personal information."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Index;
