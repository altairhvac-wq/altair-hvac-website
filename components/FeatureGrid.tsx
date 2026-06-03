import SectionHeader from "@/components/SectionHeader";

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: { title: string; description: string }[];
  centered?: boolean;
  variant?: "white" | "slate";
};

export default function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
  centered = false,
  variant = "white",
}: FeatureGridProps) {
  const bgClass = variant === "slate" ? "bg-slate-50" : "bg-white";
  const cardClass =
    variant === "slate"
      ? "rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
      : "flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8";

  return (
    <section className={`${bgClass} py-16 sm:py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          centered={centered}
        />
        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${centered ? "lg:grid-cols-2" : ""}`}
        >
          {items.map((item) => (
            <article key={item.title} className={cardClass}>
              {variant === "white" && (
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white"
                  aria-hidden
                >
                  ✓
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
