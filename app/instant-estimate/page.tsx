import type { Metadata } from "next";
import Button from "@/components/Button";
import InstantBudgetEstimator from "@/components/InstantBudgetEstimator";
import PageHero from "@/components/PageHero";
import { PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";
import { CONTACT_ESTIMATE_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Instant HVAC Budget Estimator",
  description:
    `Get a rough HVAC budget planning range in under a minute. Not a final quote — exact pricing requires an in-home evaluation. Serving ${SERVICE_AREA}.`,
  alternates: {
    canonical: "/instant-estimate",
  },
  openGraph: {
    url: "/instant-estimate",
    title: "Instant HVAC Budget Estimator",
    description:
      "Get a rough planning range in under a minute. Not a final quote — exact pricing requires an in-home evaluation.",
  },
};

export default function InstantEstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Planning Tool"
        title="Instant HVAC Budget Estimator"
        description="Get a rough planning range in under a minute. This is not a final quote — exact pricing requires an in-home evaluation."
      />

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <InstantBudgetEstimator />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Ready for exact pricing?
            </h2>
            <p className="mt-3 leading-relaxed text-stone-600">
              Most homeowners call first for a quick conversation. You can also
              request a written estimate — no obligation to book work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={PHONE_HREF} variant="primary">
                Call {PHONE}
              </Button>
              <Button
                href={CONTACT_ESTIMATE_URL}
                variant="inverse"
                className="border-2 border-stone-300 hover:border-stone-400"
              >
                Request an Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
