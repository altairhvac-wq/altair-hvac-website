import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FinancingCTA from "@/components/FinancingCTA";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import WhenToCallUs from "@/components/WhenToCallUs";
import { services } from "@/lib/content/services";
import { PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";
import { ESTIMATE_MAILTO } from "@/lib/links";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    `AC repair, furnace repair, installation, maintenance, and indoor air quality for homeowners in ${SERVICE_AREA}.`,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={SERVICE_AREA}
        title="Heating & Cooling Services for Your Home"
        description="From a broken AC in July to a furnace that will not start in January, we help local homeowners get comfortable again — with clear answers and careful work."
        primaryCta={{ label: `Call ${PHONE}`, href: PHONE_HREF }}
        secondaryCta={{ label: "Request free estimate by email", href: ESTIMATE_MAILTO }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Services We Provide"
            description="Each service below explains why it matters, what we do, and warning signs that it may be time to call."
          />
          <div className="mt-12">
            <ServiceCardsGrid services={services} />
          </div>
          <p className="mt-10 text-center text-slate-600">
            Not sure what you need?{" "}
            <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
              Contact us
            </Link>{" "}
            — describe the problem and we will point you in the right direction. See our{" "}
            <Link href="/service-areas" className="font-semibold text-sky-700 hover:text-sky-800">
              service areas
            </Link>
            .
          </p>
        </div>
      </section>

      <WhenToCallUs />
      <FinancingCTA />
      <ContactCTA />
    </>
  );
}
