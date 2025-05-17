import { Helmet } from "react-helmet-async";
import { faqs } from "@/data/faqs"; // Import faqs

import HeroSection from "@/components/home/HeroSection";
import AppealSection from "@/components/home/AppealSection";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  // Create FAQ Schema based on the full faqs list
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
    <div className="min-h-screen">
      <Helmet>
        <title>Free Parking Ticket Appeal Letter | Resolvo | Fight PCNs & Private Fines</title>
        <meta
          name="description"
          content="Got an unfair parking ticket? Resolvo uses AI trained on UK parking law to write winning appeal letters for council PCNs & private fines. Fight back for free."
        />
        <link rel="canonical" href="https://resolvo.uk/" />
        {/* Add other relevant meta tags like Open Graph, Twitter Cards if desired */}
        <meta property="og:title" content="Free Parking Ticket Appeal Letter | Resolvo | Fight PCNs & Private Fines" />
        <meta property="og:description" content="Got an unfair parking ticket? Resolvo uses AI trained on UK parking law to write winning appeal letters for council PCNs & private fines. Fight back for free." />
        <meta property="og:url" content="https://resolvo.uk/" />
        <meta property="og:type" content="website" />
         <meta property="og:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Parking Ticket Appeal Letter | Resolvo | Fight PCNs & Private Fines" />
        <meta name="twitter:description" content="Got an unfair parking ticket? Resolvo uses AI trained on UK parking law to write winning appeal letters for council PCNs & private fines. Fight back for free." />
         <meta name="twitter:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" />
        {/* Inject FAQ Schema */}
        {faqs && faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      <HeroSection />
      <AppealSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
};

export default Index;
