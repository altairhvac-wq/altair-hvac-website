import { EMAIL, PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";

const estimateMailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Free Estimate Request")}`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-600/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
          Serving the {SERVICE_AREA}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Expert Heating &amp; Cooling You Can Trust
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Fast, reliable HVAC service for your home and business. Repairs,
          installations, and maintenance — backed by licensed technicians and
          honest pricing.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition-colors hover:bg-sky-400"
          >
            Call Now — {PHONE}
          </a>
          <a
            href={estimateMailto}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/20"
          >
            Free Estimate
          </a>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            24/7 Emergency Service
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            Licensed &amp; Insured
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            Satisfaction Guaranteed
          </li>
        </ul>
      </div>
    </section>
  );
}
