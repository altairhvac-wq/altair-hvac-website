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
    "Pay for HVAC repairs and installations over time. Learn how financing works and ask about options during your free estimate in Davis County, Utah.",
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment Options"
        title="Financing for HVAC Repairs & Installations"
        description="A new furnace or AC is a major expense. Financing can spread the cost into monthly payments so you can fix comfort problems sooner — we will explain your options clearly during your estimate."
        primaryCta={{ label: "Request Free Estimate", href: "/contact" }}
        secondaryCta={{ label: "Call Us", href: PHONE_HREF }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Pay Over Time"
              title="You Should Not Have to Put Off Comfort"
              description="If your system failed or repairs are adding up, financing may help you move forward without paying everything at once. Approval and terms depend on the program — we walk you through it step by step."
              centered
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Why Homeowners Ask About Financing"
        title="How Financing Can Help"
        items={financingBenefits}
        centered
        variant="slate"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Uses"
            title="What Homeowners Often Finance"
            description="These are typical projects — ask us whether yours may qualify:"
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
            Ready to talk numbers?{" "}
            <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
              Request a free estimate
            </Link>{" "}
            and mention financing when we follow up. Browse our{" "}
            <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
              services
            </Link>{" "}
            to see what we can help with.
          </p>
        </div>
      </section>

      <FAQSection
        eyebrow="Questions Homeowners Ask"
        title="Financing FAQ"
        description="Straight answers about paying for HVAC work over time."
        items={financingFaqs}
      />

      <ContactCTA />
    </>
  );
}
