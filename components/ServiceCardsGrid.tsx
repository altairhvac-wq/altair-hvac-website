import type { Service } from "@/lib/content/services";

type ServiceCardsGridProps = {
  services: Service[];
};

export default function ServiceCardsGrid({ services }: ServiceCardsGridProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
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
            <p className="mt-4 text-sm font-semibold text-slate-900">
              Why homeowners call us
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              {service.whyItMatters}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              Signs you may need service
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
              {service.signs.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
