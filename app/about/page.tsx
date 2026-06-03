import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FeatureGrid from "@/components/FeatureGrid";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/ReviewsSection";
import SectionHeader from "@/components/SectionHeader";
import { companyValues, whyHomeownersChooseUs } from "@/lib/content/values";
import { COMPANY_NAME, SERVICE_AREA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Altair Climate Control. Local HVAC service in Davis County, Utah focused on clear communication and quality workmanship.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`About ${COMPANY_NAME}`}
        description="We are a Davis County heating and cooling company built around doing the job right, keeping you informed, and treating your home with care."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Who We Are"
              title="Your Local Heating & Cooling Team"
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                {COMPANY_NAME} serves homeowners in {SERVICE_AREA}. Our focus is
                simple: show up when we say we will, explain what is going on
                with your system, and leave your home as clean as we found it.
              </p>
              <p>
                [Add a short company story here — how you started, who leads the
                team, and what matters most to you when working in a
                customer&apos;s home.]
              </p>
              <p>
                Utah summers and winters put real stress on furnaces and air
                conditioners. We work in the same communities we serve, so we
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
                  License / credentials
                </dt>
                <dd className="mt-1 text-slate-600">
                  [Add license number, insurance details, or certifications here.]
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">
                  Years in business
                </dt>
                <dd className="mt-1 text-slate-600">[Add year founded or years of experience.]</dd>
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
            for a free estimate.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
