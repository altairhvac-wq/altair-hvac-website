import Link from "next/link";
import { EMAIL, PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";
import { ESTIMATE_MAILTO } from "@/lib/links";

export default function ContactCTA() {
  return (
    <section className="bg-slate-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Ready to Talk?
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Call or Request a Free Estimate
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            No pressure — tell us what is going on with your heating or cooling
            and we will help you figure out the next step. Serving {SERVICE_AREA}.
          </p>

          <p className="mt-8">
            <a
              href={PHONE_HREF}
              className="text-3xl font-bold tracking-tight text-white transition-colors hover:text-sky-300 sm:text-4xl"
            >
              {PHONE}
            </a>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sky-400 sm:w-auto"
            >
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-slate-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
            >
              Request Free Estimate
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Prefer email?{" "}
            <a href={ESTIMATE_MAILTO} className="text-sky-400 hover:text-sky-300">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
