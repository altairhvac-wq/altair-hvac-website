import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import CtaTextLink from "@/components/CtaTextLink";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { COMPANY_NAME } from "@/lib/constants";

const SOFTWARE_URL = "https://www.altair-op.com";

export const metadata: Metadata = {
  title: "The Software Our Owner Built",
  description:
    "The owner of Altair Climate Control also built Altair Operating System, field service software for HVAC, plumbing and electrical shops.",
  alternates: {
    canonical: "/our-software",
  },
  openGraph: {
    url: "/our-software",
  },
};

const dailyUses = [
  {
    title: "Leads",
    description: "New calls and requests are tracked as leads until they become jobs.",
  },
  {
    title: "Estimates",
    description: "Customers read and approve their estimate on their phone.",
  },
  {
    title: "Dispatch",
    description: "The office sees the day's jobs and who is going where.",
  },
  {
    title: "Technician phone view",
    description: "Techs open the job on their phone with the details already filled in.",
  },
  {
    title: "Invoices and payment links",
    description: "The invoice is built from the job, and customers can pay from a link.",
  },
  {
    title: "Time clock",
    description: "Techs clock in and out from the same app.",
  },
];

export default function OurSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Software"
        title="The Software That Runs Our Shop"
        description="Our owner built field service software called Altair Operating System. Here is why, and what it does."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader eyebrow="Why We Built It" title="One Job, Typed Once" />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                The owner of {COMPANY_NAME} also built field service software
                called{" "}
                <CtaTextLink href={SOFTWARE_URL} className="underline underline-offset-4">
                  Altair Operating System
                </CtaTextLink>
                .
              </p>
              <p>
                Running a shop meant typing the same job details again and again:
                once when you called, again on the estimate, again for the
                technician, and again on the invoice. We wanted to enter them
                once and have them follow the job from the first call to the
                final invoice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What It Does"
            title="For the Office and the Technicians"
            centered
          />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dailyUses.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader eyebrow="For Other Contractors" title="Run a Shop Too?" />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Altair Operating System is for HVAC, plumbing and electrical
                shops. Plans start at $39 a month, and there is a 14-day free
                trial with no card required.
              </p>
              <p>
                <CtaTextLink href={SOFTWARE_URL} className="underline underline-offset-4">
                  See how it works
                </CtaTextLink>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600">
            Here for your heating or cooling? See our{" "}
            <CtaTextLink href="/services">services</CtaTextLink> or{" "}
            <CtaTextLink href="/contact">get in touch</CtaTextLink>.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
