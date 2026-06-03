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
    "Learn about our local HVAC team serving Davis County, Utah. Honest pricing, clean work, reliable communication, and quality installations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={`About ${COMPANY_NAME}`}
        description="We're a locally focused heating and cooling company built on straightforward service, skilled workmanship, and respect for your home."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Local Company"
              title="Heating & Cooling Experts in Your Community"
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                {COMPANY_NAME} was founded with a simple goal: give homeowners in{" "}
                {SERVICE_AREA} a HVAC team they can actually trust. Too many
                families have dealt with vague pricing, missed appointments, or
                rushed work — we built our company to be the opposite of that
                experience.
              </p>
              <p>
                Our technicians live and work in the same communities we serve.
                We understand Utah&apos;s hot summers and cold winters, and we
                know how important reliable heating and cooling is for your
                family&apos;s comfort and safety.
              </p>
              <p>
                Whether you need a same-day repair, a seasonal tune-up, or a
                full system replacement, we take time to explain your options,
                answer your questions, and leave your home as clean as we found
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Why Homeowners Choose Us"
        title="Trusted Local HVAC Experts"
        description="We focus on doing the job right — with clear communication from the first call to the final walkthrough."
        items={whyHomeownersChooseUs}
        centered
        variant="slate"
      />

      <FeatureGrid
        eyebrow="Our Values"
        title="How We Work on Every Job"
        description="These principles guide every repair, installation, and maintenance visit."
        items={companyValues}
        variant="white"
      />

      <ReviewsSection />

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600">
            Ready to work with a team that puts your home first?{" "}
            <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
              View our services
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
