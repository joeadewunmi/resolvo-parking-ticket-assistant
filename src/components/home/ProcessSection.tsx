import { MessageSquare, Brain, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  return (
    <div className="py-24 bg-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "Chat",
              description: "Tell us what happened with how you got your ticket - every detail helps. You can even upload a photo of the ticket –and we’ll pull out key information automatically"
            },
            {
              icon: <Brain className="h-8 w-8" />,
              title: "Understand",
              description: "We look at everything you've told us.You might get a few questions to understand what happened. Did you have a permit? Was there a sign? "
            },
            {
              icon: <CheckCircle className="h-8 w-8" />,
              title: "Resolve",
              description: " We will instantly generate an appeal letter tailored to your specific situation, ready to send. You can review it, make any changes, and then use it to fight your ticket."
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
  );
};

export default ProcessSection;
