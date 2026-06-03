import type { ServiceCity } from "@/lib/content/cities";

type CityCardsGridProps = {
  cities: ServiceCity[];
};

export default function CityCardsGrid({ cities }: CityCardsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cities.map((city) => (
        <article
          key={city.name}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-slate-900">{city.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {city.description}
          </p>
        </article>
      ))}
    </div>
  );
}
