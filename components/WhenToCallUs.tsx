import SectionHeader from "@/components/SectionHeader";
import { whenToCallReasons } from "@/lib/content/services";

export default function WhenToCallUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Know the Signs"
          title="When to Call Us"
          description="Some HVAC issues can wait — others need attention right away. If you're unsure, give us a call and we'll help you decide the best next step."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whenToCallReasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {reason.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
