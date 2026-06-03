import { EMAIL } from "@/lib/constants";
import { QUOTE_MAILTO } from "@/lib/links";

export default function QuoteRequestPanel() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        Request a Free Estimate
      </h2>
      <p className="mt-3 leading-relaxed text-slate-600">
        Tell us about your project and we&apos;ll get back to you with pricing
        and next steps. For faster service, call us directly.
      </p>
      <a
        href={QUOTE_MAILTO}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-sky-700 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sky-800"
      >
        Email Your Request
      </a>
      <p className="mt-4 text-sm text-slate-500">
        Your email app will open with a simple template. Send it to{" "}
        <a href={`mailto:${EMAIL}`} className="text-sky-700 hover:text-sky-800">
          {EMAIL}
        </a>
        .
      </p>
    </section>
  );
}
