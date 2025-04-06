
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
        <div className="space-y-6">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
