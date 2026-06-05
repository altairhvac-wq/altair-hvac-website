import CtaTextLink from "@/components/CtaTextLink";
import InstantBudgetEstimator from "@/components/InstantBudgetEstimator";
import SectionHeader from "@/components/SectionHeader";
import { INSTANT_ESTIMATE_URL } from "@/lib/links";

export default function InstantBudgetEstimatorSection() {
  return (
    <section id="instant-estimate" className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Planning Tool"
          title="Instant Budget Estimator"
          description="Answer a few quick questions for a rough budget range to help you plan. This is not a quote — an in-home evaluation is required for exact pricing."
          centered
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-stone-600">
          Scanning from a door hanger or card?{" "}
          <CtaTextLink href={INSTANT_ESTIMATE_URL}>
            Open the dedicated estimator page →
          </CtaTextLink>
        </p>

        <div className="mt-12">
          <InstantBudgetEstimator />
        </div>
      </div>
    </section>
  );
}
