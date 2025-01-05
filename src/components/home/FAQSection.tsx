import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

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
        <Accordion type="single" collapsible className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600 whitespace-pre-line">
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