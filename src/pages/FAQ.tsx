import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faqs";

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
        
        <Accordion type="single" collapsible className="w-full space-y-4">
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

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => window.open("https://chat.openai.com/g/g-2tFgbECaJ-resolvo", "_blank")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            Appeal now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;