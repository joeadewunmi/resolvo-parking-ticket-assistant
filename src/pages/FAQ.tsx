import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Resolvo ?",
    answer: "Resolvo is a tool anyone can use to challenge parking tickets. In the UK, parking tickets are a big problem. Last year, over 11 million parking tickets were issued on private land—that’s around 30,000 every day!
Most people aren’t trying to break rules; they’re just caught out by unclear signs or confusing parking rules. That’s why we built Resolvo. It matches your situation with the correct rules to create a strong appeal. Resolvo uses the latest UK parking laws to help you write a solid appeal.

Note: Resolvo works with private parking tickets and council-issued Penalty Charge Notices (PCNs), but it cannot help with Fixed Penalty Notices (FPNs), as these usually need to be appealed in court..",
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
