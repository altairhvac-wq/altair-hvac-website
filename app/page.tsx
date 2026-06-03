import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import FinancingCTA from "@/components/FinancingCTA";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Heating & Cooling Services | Free Estimates",
  description:
    "Expert HVAC repair, installation, and maintenance. Licensed technicians, fast response, and honest pricing. Call for a free estimate today.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <FinancingCTA />
      <ContactCTA />
    </>
  );
}
