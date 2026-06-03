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

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call or email for a free HVAC estimate. Serving Davis County, Utah including Bountiful, Layton, Kaysville, and surrounding cities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us for a Free Estimate"
        description="Call for immediate help or send us a message to schedule service. We respond quickly and serve homeowners throughout the area."
        primaryCta={{ label: `Call ${PHONE}`, href: PHONE_HREF }}
        secondaryCta={{ label: `Email ${EMAIL}`, href: `mailto:${EMAIL}` }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Reach Us"
                title="Call, Email, or Request a Quote"
                description="We're here to help with repairs, maintenance, installations, and emergency service."
              />

              <div className="mt-10 space-y-8">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Phone</h2>
                  <p className="mt-2 text-slate-600">
                    For the fastest response — especially for urgent heating or
                    cooling issues — call us directly.
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
                    Send project details, photos, or scheduling questions anytime.
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
                    Service Area
                  </h2>
                  <p className="mt-2 text-slate-600">
                    We proudly serve {SERVICE_AREA} and surrounding communities.
                  </p>
                  <Link
                    href="/service-areas"
                    className="mt-4 inline-block font-semibold text-sky-700 hover:text-sky-800"
                  >
                    View all service areas →
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
                Business Hours
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
                Hours are subject to change. Call ahead to confirm availability
                for same-day appointments.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <h2 className="text-xl font-bold text-slate-900">
                Emergency Service
              </h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                No heat in the middle of winter? AC out during a heat wave? We
                offer 24/7 emergency HVAC service for urgent situations. Call{" "}
                <a href={PHONE_HREF} className="font-semibold text-sky-700 hover:text-sky-800">
                  {PHONE}
                </a>{" "}
                anytime — if we can&apos;t answer immediately, leave a message
                and we&apos;ll return your call as soon as possible.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Learn more about our{" "}
                <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
                  HVAC services
                </Link>{" "}
                or ask about{" "}
                <Link href="/financing" className="font-semibold text-sky-700 hover:text-sky-800">
                  financing options
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
