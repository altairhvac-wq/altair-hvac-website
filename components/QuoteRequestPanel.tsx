import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/constants";
import { QUOTE_MAILTO } from "@/lib/links";

export default function QuoteRequestPanel() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        Request an Estimate
      </h2>
      <p className="mt-3 leading-relaxed text-slate-600">
        Share your name, address, and what is going on with your system. There is
        no obligation — we will reply with next steps or follow up by phone if
        that is easier.
      </p>
      <div className="mt-6">
        <Button href={QUOTE_MAILTO} variant="primary">
          Email Your Request
        </Button>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Your email app opens with a short template sent to{" "}
        <CtaTextLink href={`mailto:${EMAIL}`}>{EMAIL}</CtaTextLink>. Prefer to
        talk?{" "}
        <CtaTextLink href={PHONE_HREF}>Call {PHONE}</CtaTextLink>.
      </p>
    </section>
  );
}
