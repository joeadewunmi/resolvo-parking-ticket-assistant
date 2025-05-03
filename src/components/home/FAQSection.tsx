
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  limit?: number;
}

const FAQSection = ({ limit }: FAQSectionProps) => {
  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary text-center mb-12">
          Resolvo FAQs
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {displayedFaqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="text-left font-medium py-4 px-5 hover:bg-gray-50 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 pt-2 text-gray-600 bg-gray-50 whitespace-pre-line">
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
