import HeroSection from "@/components/home/HeroSection";
import AppealSection from "@/components/home/AppealSection";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AppealSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
};

export default Index;