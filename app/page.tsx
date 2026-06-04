import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import FinancingCTA from "@/components/FinancingCTA";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICE_AREA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Heating & Cooling | Free Estimates",
  description:
    `HVAC repair, installation, and maintenance for homeowners in ${SERVICE_AREA}. Call for a free estimate — no obligation.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedProjectsSection />
      <WhatToExpectSection />
      <WhyChooseUs />
      <ReviewsSection />
      <FinancingCTA />
      <ContactCTA />
    </>
  );
}
