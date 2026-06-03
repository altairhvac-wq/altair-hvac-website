const reasons = [
  {
    title: "Licensed",
    description:
      "Fully licensed and insured technicians who meet local code requirements on every job.",
  },
  {
    title: "Experienced",
    description:
      "Seasoned HVAC professionals with hands-on experience on all major heating and cooling brands.",
  },
  {
    title: "Fast Response",
    description:
      "Same-day and emergency appointments when you need comfort restored quickly.",
  },
  {
    title: "Honest Pricing",
    description:
      "Clear, upfront estimates before work begins — no hidden fees or surprise charges.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted Local HVAC Experts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We treat every home with respect, transparency, and workmanship you
            can count on year after year.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white"
                aria-hidden
              >
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
