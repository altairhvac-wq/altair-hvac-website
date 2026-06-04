import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { callPrepTips, whatToExpectSteps } from "@/lib/content/projects";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function WhatToExpectSection() {
  return (
    <section id="what-to-expect" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before You Call"
          title="What to Expect When You Call"
          description="No scripts or sales pressure — just a straightforward conversation so we can understand your situation and tell you honestly what happens next."
          centered
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatToExpectSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-sm font-semibold tabular-nums tracking-widest text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-4 border-t border-slate-200 pt-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:flex sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Helpful details to have ready
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              You do not need to be an HVAC expert — these basics help us respond
              faster and schedule the right visit.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {callPrepTips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400"
                    aria-hidden
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 shrink-0 sm:mt-0">
            <Button href={PHONE_HREF} variant="primary">
              Call {PHONE}
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
