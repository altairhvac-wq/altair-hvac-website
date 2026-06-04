import SectionHeader from "@/components/SectionHeader";

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: { title: string; description: string }[];
  centered?: boolean;
  variant?: "white" | "slate";
  numbered?: boolean;
};

export default function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
  centered = false,
  variant = "white",
  numbered = true,
}: FeatureGridProps) {
  const bgClass = variant === "slate" ? "bg-slate-50" : "bg-white";
  const cardClass =
    variant === "slate"
      ? "rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
      : "rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8";

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
          {items.map((item, index) => (
            <article key={item.title} className={cardClass}>
              {numbered && (
                <p className="text-sm font-semibold tabular-nums tracking-widest text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
              )}
              <div className={numbered ? "mt-4 border-t border-slate-200 pt-6" : ""}>
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
