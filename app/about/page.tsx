import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FeatureGrid from "@/components/FeatureGrid";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";
import SectionHeader from "@/components/SectionHeader";
import { companyValues, whyHomeownersChooseUs } from "@/lib/content/values";
import {
  COMPANY_NAME,
  LICENSING_STATEMENT,
  SERVICE_AREA,
  YEARS_IN_BUSINESS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Altair Climate Control — a local HVAC company serving Roy, Layton, Clearfield, Bountiful, and Ogden, Utah. Clear communication and quality workmanship.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`About ${COMPANY_NAME}`}
        description="A small, local heating and cooling company focused on clear communication, careful work, and treating your home with respect."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Who We Are"
              title="Building Trust One Home at a Time"
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                {COMPANY_NAME} serves homeowners in {SERVICE_AREA} and the
                surrounding communities. We have been in business for about{" "}
                {YEARS_IN_BUSINESS} year — not decades — and we are upfront about
                that. We are building our reputation through how we communicate,
                the quality of our workmanship, and the experience you have from
                the first call to the final walkthrough.
              </p>
              <p>
                Our focus is simple: show up when we say we will, explain what is
                going on with your system in plain language, and leave your home
                as clean as we found it. We do not use high-pressure sales tactics
                or vague promises we cannot back up.
              </p>
              <p>
                Utah summers and winters put real stress on furnaces and air
                conditioners. We work in the same neighborhoods we serve, so we
                understand what local homes need when equipment fails or wears out.
              </p>
              <p>
                Whether you need a repair today, a tune-up before the season
                changes, or help planning a replacement, we take time to answer
                your questions and walk you through options — no jargon, no
                pressure.
              </p>
            </div>

            <dl className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-slate-900">
                  Licensing &amp; insurance
                </dt>
                <dd className="mt-1 text-slate-600">{LICENSING_STATEMENT}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">
                  Time in business
                </dt>
                <dd className="mt-1 text-slate-600">
                  About {YEARS_IN_BUSINESS} year. We are a newer company focused
                  on earning trust through consistent, honest service.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Why Homeowners Work With Us"
        title="What You Can Expect From Our Team"
        description="These are the standards we hold ourselves to on every visit."
        items={whyHomeownersChooseUs}
        centered
        variant="slate"
      />

      <FeatureGrid
        eyebrow="How We Work"
        title="Our Approach on Every Job"
        description="From the first phone call to the final walkthrough."
        items={companyValues}
        variant="white"
      />

      <ReviewsSection />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600">
            See what we offer on our{" "}
            <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
              services page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
              get in touch
            </Link>{" "}
            to request an estimate.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
