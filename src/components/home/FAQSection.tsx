import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Resolvo?",
      answer: "Resolvo is designed to help people challenge parking tickets using the latest UK parking laws. Each year, millions of tickets are issued, often due to unclear signs or confusing rules. Resolvo matches your situation with the correct laws to create a strong appeal.\n\nNote: Resolvo works for private parking tickets and council-issued Penalty Charge Notices (PCNs) but not Fixed Penalty Notices (FPNs) which are usually appealed in court"
    },
    {
      question: "How do I access Resolvo?",
      answer: "To access Resolvo, simply click the \"Appeal\" button on our website. You'll be directed to ChatGPT, where you'll need to log in or create an account if you don't already have one. Once logged in, you can start your parking ticket appeal right away"
    },
    {
      question: "Is Resolvo free to use?",
      answer: "Yes! Resolvo is completely free, and we'll never ask for your payment details."
    },
    {
      question: "How does Resolvo work?",
      answer: "Resolvo uses artificial intelligence to analyse your situation and match it with the latest UK parking laws."
    },
    {
      question: "What if I have multiple tickets?",
      answer: "No problem—Resolvo can help with multiple tickets. Just start a new chat for each ticket."
    },
    {
      question: "Do I have to talk to someone?",
      answer: "No, you don't need to make any phone calls. Your appeal letter is created online instantly."
    },
    {
      question: "Is this legal advice?",
      answer: "Resolvo offers guidance on handling parking tickets, but it's not legal advice. If you need legal representation, we recommend contacting a qualified lawyer."
    },
    {
      question: "How does Resolvo protect my privacy?",
      answer: "Your information is completely private and secure. We never share your details with anyone."
    },
    {
      question: "When can I use Resolvo?",
      answer: "Anytime! Resolvo works 24/7."
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