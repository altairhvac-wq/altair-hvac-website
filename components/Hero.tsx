import {
  EMERGENCY_STATEMENT,
  PHONE,
  PHONE_HREF,
  SERVICE_AREA,
} from "@/lib/constants";
import { ESTIMATE_MAILTO } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-600/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
          {SERVICE_AREA}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Heating &amp; Cooling Help for Your Home
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          When your furnace or AC acts up, you need someone who answers the phone,
          explains your options clearly, and does careful work. That is how we
          serve homeowners in Roy, Layton, Clearfield, Bountiful, Ogden, and
          nearby communities.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition-colors hover:bg-sky-400"
          >
            Call {PHONE}
          </a>
          <a
            href={ESTIMATE_MAILTO}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/20"
          >
            Request a Free Estimate
          </a>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            Free estimates
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            Mon–Sat, 7:30 AM – 6:00 PM
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            Urgent issues — call for availability
          </li>
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-slate-400">{EMERGENCY_STATEMENT}</p>
      </div>
    </section>
  );
}
