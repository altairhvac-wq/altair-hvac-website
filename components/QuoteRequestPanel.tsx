import EstimateRequestForm from "@/components/EstimateRequestForm";
import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/constants";

export default function QuoteRequestPanel() {
  return (
    <section className="rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Written request
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900">
        Request an Estimate
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Tell us about your home and system. The more context you share, the better we
        can prepare — still no obligation to book work.
      </p>

      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-stone-900">Prefer to talk now?</p>
          <p className="mt-1 text-sm text-stone-600">
            Most homeowners call first — we will walk through options on the phone.
          </p>
        </div>
        <Button href={PHONE_HREF} variant="primary" fullWidthMobile={false}>
          Call {PHONE}
        </Button>
      </div>

      <div className="mt-8">
        <EstimateRequestForm />
      </div>

      <p className="mt-6 text-sm text-stone-500">
        You can also email us directly at{" "}
        <CtaTextLink href={`mailto:${EMAIL}`}>{EMAIL}</CtaTextLink> if you already
        have photos or documents ready.
      </p>
    </section>
  );
}
