"use client";

import { useMemo } from "react";
import Button from "@/components/Button";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import {
  DIAGNOSTIC_COST_NOTE,
  DIAGNOSTIC_VISIT_RANGE,
  formatDiagnosticRange,
  getDiagnosticGuidance,
  TYPICAL_REPAIR_RANGE,
  type DiagnosticInput,
} from "@/lib/estimator/diagnostic";
import { CONTACT_ESTIMATE_URL } from "@/lib/links";

type DiagnosticEstimatePanelProps = {
  values: DiagnosticInput;
  headline?: string;
  showIntro?: boolean;
};

export default function DiagnosticEstimatePanel({
  values,
  headline = "Most HVAC problems do not require immediate replacement.",
  showIntro = true,
}: DiagnosticEstimatePanelProps) {
  const guidance = useMemo(() => getDiagnosticGuidance(values), [values]);
  const hasSymptom = values.symptom !== "";

  return (
    <div
      className="rounded-2xl border border-stone-200 bg-stone-900 p-6 text-white sm:p-8"
      aria-live="polite"
    >
      {showIntro ? (
        <h2 className="text-xl font-bold leading-snug tracking-tight text-stone-100 sm:text-2xl">
          {headline}
        </h2>
      ) : null}

      <div className={showIntro ? "mt-8 space-y-6" : "space-y-6"}>
        <article className="rounded-xl border border-stone-700 bg-stone-950/50 p-5">
          <h3 className="text-base font-semibold text-stone-100">
            Diagnostic Visit
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-400">
            Typical diagnostic and system evaluation:
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-stone-100 sm:text-3xl">
            {formatDiagnosticRange(
              DIAGNOSTIC_VISIT_RANGE.min,
              DIAGNOSTIC_VISIT_RANGE.max,
            )}
          </p>
        </article>

        <article className="rounded-xl border border-stone-700 bg-stone-950/50 p-5">
          <h3 className="text-base font-semibold text-stone-100">
            Typical Repair Range
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-400">
            Many common repairs fall between:
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-stone-100 sm:text-3xl">
            {formatDiagnosticRange(
              TYPICAL_REPAIR_RANGE.min,
              TYPICAL_REPAIR_RANGE.max,
            )}
          </p>
        </article>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-stone-400">
        {DIAGNOSTIC_COST_NOTE}
      </p>

      {hasSymptom && guidance.symptomGuidance ? (
        <p className="mt-6 rounded-xl border border-stone-700 bg-stone-950/60 px-4 py-4 text-sm leading-relaxed text-stone-300">
          {guidance.symptomGuidance}
        </p>
      ) : null}

      {guidance.additionalNotes.length > 1 ? (
        <ul className="mt-4 space-y-2">
          {guidance.additionalNotes.slice(1).map((note) => (
            <li
              key={note}
              className="text-sm leading-relaxed text-stone-400 before:mr-2 before:content-['•']"
            >
              {note}
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-8 rounded-xl border border-stone-700 bg-stone-950/60 px-4 py-4 text-sm leading-relaxed text-stone-300">
        <span className="font-semibold text-stone-100">Service estimate only.</span>{" "}
        Final pricing requires an on-site evaluation. We will explain what we
        find before any repair work begins.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Button href={PHONE_HREF} variant="primaryHero">
          Call {PHONE}
        </Button>
        <Button href={CONTACT_ESTIMATE_URL} variant="outlineOnColor">
          Schedule Diagnostic
        </Button>
      </div>
    </div>
  );
}
