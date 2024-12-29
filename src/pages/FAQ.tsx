import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Resolvo do?",
    answer: "Resolvo is an AI-powered tool that helps you fight unfair parking tickets by generating customized appeal letters based on successful cases and local parking laws.",
  },
  {
    question: "How does the appeal process work?",
    answer: "Our process is simple: you tell us about your ticket, our AI analyzes your case and relevant laws, and then generates a personalized appeal letter that you can submit to the authorities.",
  },
  {
    question: "What are my chances of winning an appeal?",
    answer: "Success rates vary depending on the specific circumstances of your case. However, our AI-powered system learns from successful appeals to maximize your chances of getting your ticket dismissed or reduced.",
  },
  {
    question: "How long does the process take?",
    answer: "Generating your appeal letter typically takes just a few minutes. The official review process by authorities can take 2-4 weeks, depending on your location.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Resolvo FAQs</h1>
          <p className="text-gray-600">
            Find answers to commonly asked questions about our service
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;