import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
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
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary text-center mb-12">
          Resolvo FAQs
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
  );
};

export default FAQSection;