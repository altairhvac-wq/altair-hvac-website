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
    "AC repair, furnace repair, installation, maintenance, emergency service, and indoor air quality solutions. Serving homeowners throughout Davis County, Utah.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving ${SERVICE_AREA}`}
        title="Complete HVAC Services for Your Home"
        description="From emergency repairs to planned maintenance and new installations, our licensed technicians keep your home comfortable in every season."
        primaryCta={{ label: `Call ${PHONE}`, href: PHONE_HREF }}
        secondaryCta={{ label: "Free Estimate", href: ESTIMATE_MAILTO }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Heating & Cooling Services"
            description="Whether you need a quick repair or a full system upgrade, we provide honest recommendations and quality work on every job."
          />
          <div className="mt-12">
            <ServiceCardsGrid services={services} />
          </div>
          <p className="mt-10 text-center text-slate-600">
            Not sure which service you need?{" "}
            <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
              Contact us
            </Link>{" "}
            or browse our{" "}
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
