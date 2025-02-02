import HeroSection from "@/components/landing/HeroSection";
import FlowDiagramSection from "@/components/landing/FlowDiagramSection";
import ValuePropositionSection from "@/components/landing/ValuePropositionSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FounderExperienceSection from "@/components/landing/FounderExperienceSection";
import EnterpriseSuccessSection from "@/components/landing/EnterpriseSuccessSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import { Navbar } from "@/components/Navbar";
import CaseStudySection from "@/components/landing/CaseStudySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <FlowDiagramSection />
        <FounderExperienceSection />
        <ValuePropositionSection />
        {/* <StatsSection /> */}
        <FeaturesSection />
        <CaseStudySection />
        <EnterpriseSuccessSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
