import Link from "next/link";

export default function FinancingCTA() {
  return (
    <section className="bg-sky-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-sky-800 to-sky-700 px-8 py-12 text-white sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
              Financing Available
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              A Big Repair Does Not Have to Wait
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-sky-100">
              If a new system or major repair is more than you want to pay upfront,
              ask about financing during your estimate. We will explain how it
              works in plain terms.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/financing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-800 transition-colors hover:bg-sky-50"
              >
                How Financing Works
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Ask During Your Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
