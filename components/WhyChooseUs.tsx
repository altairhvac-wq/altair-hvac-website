import { SERVICE_AREA } from "@/lib/constants";

const reasons = [
  {
    title: "We explain before we fix",
    description:
      "You hear what is wrong, what we recommend, and what it costs — before work begins.",
  },
  {
    title: "We respect your home",
    description:
      "Work areas are protected, and we clean up when the job is finished.",
  },
  {
    title: "We show up when we say we will",
    description:
      "Clear scheduling and updates so you are not left wondering when help will arrive.",
  },
  {
    title: "We work where you live",
    description: `Local heating and cooling service for homeowners in ${SERVICE_AREA} and surrounding communities.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Why Homeowners Call Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Straightforward Service You Can Count On
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Good HVAC work is about more than tools — it is about communication,
            showing up, and treating your home the way we would want ours treated.
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
