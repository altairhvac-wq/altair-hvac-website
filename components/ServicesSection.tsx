import Button from "@/components/Button";

const services = [
  {
    title: "HVAC Repair",
    description:
      "Furnace, AC, and heat pump problems diagnosed and fixed. We tell you what we found before we start work.",
  },
  {
    title: "HVAC Installation",
    description:
      "When it is time for new equipment, we help you choose a system that fits your home and walk you through installation day.",
  },
  {
    title: "HVAC Maintenance",
    description:
      "Spring and fall tune-ups that catch worn parts early and keep your system ready for Utah weather.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-stone-600">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Repairs, Installations &amp; Tune-Ups
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether your system stopped working overnight or you are planning
            ahead for the season, we handle the heating and cooling work most
            homeowners need.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold tabular-nums tracking-widest text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-4 border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="primary">
            See All Services &amp; Warning Signs
          </Button>
        </div>
      </div>
    </section>
  );
}
