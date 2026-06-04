import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import CtaTextLink from "@/components/CtaTextLink";
import FAQSection from "@/components/FAQSection";
import FeatureGrid from "@/components/FeatureGrid";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import {
  financingBenefits,
  financingFaqs,
  financingUses,
} from "@/lib/content/financing";
import { FINANCING_STATEMENT, PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HVAC Financing",
  description:
    `Altair Climate Control is evaluating financing options for future customers in ${SERVICE_AREA}. Learn more and request a free estimate.`,
  alternates: {
    canonical: "/financing",
  },
  openGraph: {
    url: "/financing",
  },
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment Options"
        title="Financing — Not Available Yet"
        description={`${FINANCING_STATEMENT} We will share details here and during estimates when programs are ready.`}
        primaryCta={{ label: `Call ${PHONE}`, href: PHONE_HREF }}
        secondaryCta={{ label: "Request your estimate", href: "/contact" }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Where We Stand Today"
              title="You Can Still Plan Your Project"
              description="A new furnace or AC is a major expense. We are researching financing programs that may help some homeowners spread costs over time — but we do not offer financing right now. You can still get a free estimate and talk through options that fit your budget today."
              centered
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="What We Are Working Toward"
        title="Why We Are Looking Into Financing"
        items={financingBenefits}
        centered
        variant="slate"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Future Uses"
            title="Projects Homeowners Often Want to Finance"
            description="If we add financing later, these are typical projects homeowners ask about:"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {financingUses.map((use, index) => (
              <li
                key={use}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700"
              >
                <span className="text-xs font-semibold tabular-nums tracking-widest text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2">{use}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-slate-600">
            Need help now without financing?{" "}
            <CtaTextLink href="/contact">Request your estimate</CtaTextLink> and we
            will walk you through repair and replacement options. Browse our{" "}
            <CtaTextLink href="/services">services</CtaTextLink>{" "}
            to see what we can help with.
          </p>
        </div>
      </section>

      <FAQSection
        eyebrow="Questions Homeowners Ask"
        title="Financing FAQ"
        description="Straight answers about where we are today and what to expect later."
        items={financingFaqs}
      />

      <ContactCTA />
    </>
  );
}
