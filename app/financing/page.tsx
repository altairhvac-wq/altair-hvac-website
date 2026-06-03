import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FAQSection from "@/components/FAQSection";
import FeatureGrid from "@/components/FeatureGrid";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import {
  financingBenefits,
  financingFaqs,
  financingUses,
} from "@/lib/content/financing";
import { PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HVAC Financing",
  description:
    "Flexible financing options for HVAC repairs and installations. Comfort now, payments over time. Ask about plans during your free estimate.",
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Flexible Payment Options"
        title="HVAC Financing Made Simple"
        description="Don't let budget timing keep you from the comfort your home needs. We offer financing options to help qualified homeowners spread the cost over manageable monthly payments."
        primaryCta={{ label: "Ask About Financing", href: "/contact" }}
        secondaryCta={{ label: "Call Us Today", href: PHONE_HREF }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Pay Over Time"
              title="Comfort Now, Payments Over Time"
              description="A broken furnace or aging AC shouldn't mean months of discomfort. Financing helps you address heating and cooling needs promptly while keeping payments predictable."
              centered
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Benefits"
        title="Why Consider HVAC Financing"
        items={financingBenefits}
        centered
        variant="slate"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Eligible Projects"
            title="What You Can Use Financing For"
            description="Financing is commonly available for qualifying projects such as:"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {financingUses.map((use) => (
              <li
                key={use}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-700 text-xs font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                {use}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-slate-600">
            Every project is different.{" "}
            <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
              Contact us
            </Link>{" "}
            for a free estimate and we&apos;ll discuss options that may fit your
            situation. You can also browse our{" "}
            <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
              full list of services
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQSection
        eyebrow="Common Questions"
        title="Financing FAQ"
        description="Answers to questions homeowners often ask about paying for HVAC work over time."
        items={financingFaqs}
      />

      <ContactCTA />
    </>
  );
}
