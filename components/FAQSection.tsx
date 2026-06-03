import SectionHeader from "@/components/SectionHeader";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
};

export default function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: FAQSectionProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          centered
        />
        <dl className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {items.map((item) => (
            <div key={item.question} className="px-6 py-6 sm:px-8">
              <dt className="text-lg font-semibold text-slate-900">
                {item.question}
              </dt>
              <dd className="mt-3 leading-relaxed text-slate-600">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
