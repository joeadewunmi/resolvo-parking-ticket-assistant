
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { Helmet } from "react-helmet-async";
import { Library } from "lucide-react";

const FAQ = () => {
  // Create FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions About Parking Tickets | Resolvo</title>
        <meta name="description" content="Find answers to common questions about parking tickets, appeals, and how Resolvo can help you challenge unfair parking fines." />
        <link rel="canonical" href="https://resolvo.uk/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hub-style Introduction */}
          <div className="text-center mb-12">
            <Library className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our service and how we can help you appeal your parking ticket
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
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

            <div className="mt-12 text-center">
              <a
                href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Appeal my ticket now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
