import CtaTextLink from "@/components/CtaTextLink";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function InstantEstimateReassurance() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 text-center sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Quick tip
      </p>
      <h2 className="mt-3 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
        Save this page for later
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Bookmark this estimator on your phone to finish later or share with
        someone in your household.
      </p>
      <p className="mt-5 text-sm text-stone-600">
        Need help now?{" "}
        <CtaTextLink href={PHONE_HREF}>Call {PHONE}</CtaTextLink>
      </p>
    </div>
  );
}
