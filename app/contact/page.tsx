import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import QuoteRequestPanel from "@/components/QuoteRequestPanel";
import SectionHeader from "@/components/SectionHeader";
import {
  EMAIL,
  PHONE,
  PHONE_HREF,
  SERVICE_AREA,
} from "@/lib/constants";
import { ESTIMATE_MAILTO } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call or email Altair Climate Control for a free HVAC estimate in Davis County, Utah. No obligation — we are happy to answer questions about repairs, installs, and financing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch — We Are Here to Help"
        description="Call if something is wrong right now. Email or request an estimate if you are planning ahead. Either way, there is no obligation to book work."
        primaryCta={{ label: `Call ${PHONE}`, href: PHONE_HREF }}
        secondaryCta={{ label: "Request Free Estimate", href: ESTIMATE_MAILTO }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Reach Us"
                title="The Easiest Way to Reach Us"
                description="Pick what works for you. If your heat or AC is out, calling is usually fastest."
              />

              <div className="mt-10 space-y-8">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Phone</h2>
                  <p className="mt-2 text-slate-600">
                    Best for urgent problems — no heat, no cooling, strange smells,
                    or anything that worries you.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-4 inline-block text-2xl font-bold text-sky-700 transition-colors hover:text-sky-800"
                  >
                    {PHONE}
                  </a>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Email</h2>
                  <p className="mt-2 text-slate-600">
                    Send photos, your address, and a short description of the issue.
                    We will reply with next steps.
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-4 inline-block text-lg font-semibold text-sky-700 transition-colors hover:text-sky-800"
                  >
                    {EMAIL}
                  </a>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Service area
                  </h2>
                  <p className="mt-2 text-slate-600">
                    We serve homeowners throughout {SERVICE_AREA}. Not sure we cover
                    your street? Call or email with your address and we will confirm.
                  </p>
                  <Link
                    href="/service-areas"
                    className="mt-4 inline-block font-semibold text-sky-700 hover:text-sky-800"
                  >
                    View cities we serve →
                  </Link>
                </article>
              </div>
            </div>

            <QuoteRequestPanel />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h2 className="text-xl font-bold text-slate-900">
                Business hours
              </h2>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex justify-between gap-4">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-slate-900">8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-medium text-slate-900">9:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-900">Closed</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-500">
                [Confirm hours and update if needed.] Call ahead for same-day
                availability.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <h2 className="text-xl font-bold text-slate-900">
                After-hours emergencies
              </h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                No heat on a cold night or AC out in a heat wave? Call{" "}
                <a href={PHONE_HREF} className="font-semibold text-sky-700 hover:text-sky-800">
                  {PHONE}
                </a>
                . If we cannot answer right away, leave a message with your name,
                address, and what is happening — we will call back as soon as we can.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                See our{" "}
                <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
                  HVAC services
                </Link>{" "}
                or ask about{" "}
                <Link href="/financing" className="font-semibold text-sky-700 hover:text-sky-800">
                  financing
                </Link>{" "}
                when you speak with us.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
