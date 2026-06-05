"use client";

import { useState } from "react";
import DiagnosticEstimatePanel from "@/components/DiagnosticEstimatePanel";
import ReplacementBudgetEstimator from "@/components/ReplacementBudgetEstimator";
import {
  EstimatorField,
  selectClass,
} from "@/components/estimator/fields";
import {
  DIAGNOSTIC_SYMPTOM_OPTIONS,
  EMPTY_DIAGNOSTIC_INPUT,
  ESTIMATOR_EQUIPMENT_AGE_OPTIONS,
  ESTIMATOR_URGENCY_OPTIONS,
  HELP_NEED_OPTIONS,
} from "@/lib/estimator/options";
import type { DiagnosticInput } from "@/lib/estimator/diagnostic";
import type { HelpNeed } from "@/lib/estimator/types";

const choiceButtonClass =
  "w-full rounded-xl border px-4 py-4 text-left text-sm font-semibold leading-snug transition-colors sm:text-base";
const choiceButtonActiveClass =
  "border-stone-900 bg-stone-900 text-white";
const choiceButtonInactiveClass =
  "border-stone-300 bg-white text-stone-800 hover:border-stone-400";

function DiagnosticRepairForm({
  values,
  onChange,
  embedded = false,
}: {
  values: DiagnosticInput;
  onChange: (values: DiagnosticInput) => void;
  embedded?: boolean;
}) {
  function updateField<K extends keyof DiagnosticInput>(
    key: K,
    value: DiagnosticInput[K],
  ) {
    onChange({ ...values, [key]: value });
  }

  const fields = (
    <div className="mt-6 space-y-5">
      <EstimatorField id="diagnostic-equipment-age" label="System age">
        <select
          id="diagnostic-equipment-age"
          className={selectClass}
          value={values.equipmentAge}
          onChange={(event) =>
            updateField(
              "equipmentAge",
              event.target.value as DiagnosticInput["equipmentAge"],
            )
          }
        >
          <option value="">Select system age</option>
          {ESTIMATOR_EQUIPMENT_AGE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </EstimatorField>

      <EstimatorField id="diagnostic-symptom" label="What is going on?">
        <select
          id="diagnostic-symptom"
          className={selectClass}
          value={values.symptom}
          onChange={(event) =>
            updateField(
              "symptom",
              event.target.value as DiagnosticInput["symptom"],
            )
          }
        >
          <option value="">Select a symptom</option>
          {DIAGNOSTIC_SYMPTOM_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </EstimatorField>

      <EstimatorField id="diagnostic-urgency" label="Urgency">
        <select
          id="diagnostic-urgency"
          className={selectClass}
          value={values.urgency}
          onChange={(event) =>
            updateField(
              "urgency",
              event.target.value as DiagnosticInput["urgency"],
            )
          }
        >
          <option value="">Select urgency</option>
          {ESTIMATOR_URGENCY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </EstimatorField>
    </div>
  );

  if (embedded) {
    return (
      <form
        onSubmit={(event) => event.preventDefault()}
        aria-label="Diagnostic service estimator"
      >
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-stone-500">
          Your system
        </p>
        {fields}
      </form>
    );
  }

  return (
    <form
      className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
      onSubmit={(event) => event.preventDefault()}
      aria-label="Diagnostic service estimator"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Your system
      </p>
      {fields}
    </form>
  );
}

export default function InstantBudgetEstimator() {
  const [helpNeed, setHelpNeed] = useState<HelpNeed | "">("");
  const [diagnosticValues, setDiagnosticValues] = useState<DiagnosticInput>({
    ...EMPTY_DIAGNOSTIC_INPUT,
  });
  const [showReplacementOnNotSure, setShowReplacementOnNotSure] =
    useState(false);

  function selectHelpNeed(value: HelpNeed) {
    setHelpNeed(value);
    setShowReplacementOnNotSure(false);
    setDiagnosticValues({ ...EMPTY_DIAGNOSTIC_INPUT });
  }

  function resetSelection() {
    setHelpNeed("");
    setShowReplacementOnNotSure(false);
    setDiagnosticValues({ ...EMPTY_DIAGNOSTIC_INPUT });
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
          Step 1
        </p>
        <h2 className="mt-3 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
          What do you need help with?
        </h2>

        <div className="mt-6 space-y-3">
          {HELP_NEED_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${choiceButtonClass} ${
                helpNeed === option.value
                  ? choiceButtonActiveClass
                  : choiceButtonInactiveClass
              }`}
              aria-pressed={helpNeed === option.value}
              onClick={() => selectHelpNeed(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {helpNeed !== "" ? (
          <p className="mt-6">
            <button
              type="button"
              className="text-sm font-semibold text-stone-600 underline-offset-2 hover:text-stone-900 hover:underline"
              onClick={resetSelection}
            >
              Change selection
            </button>
          </p>
        ) : null}
      </div>

      {helpNeed === "replacement" ? <ReplacementBudgetEstimator /> : null}

      {helpNeed === "repair" ? (
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <DiagnosticRepairForm
            values={diagnosticValues}
            onChange={setDiagnosticValues}
          />
          <DiagnosticEstimatePanel values={diagnosticValues} />
        </div>
      ) : null}

      {helpNeed === "not-sure" ? (
        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                Start here
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-700 sm:text-lg">
                Many homeowners aren&apos;t sure whether they need a repair or
                replacement. Start with a diagnostic evaluation and we&apos;ll
                help determine the most cost-effective path.
              </p>

              {!showReplacementOnNotSure ? (
                <DiagnosticRepairForm
                  values={diagnosticValues}
                  onChange={setDiagnosticValues}
                  embedded
                />
              ) : null}
            </div>

            <DiagnosticEstimatePanel
              values={diagnosticValues}
              headline="A diagnostic visit is often the best first step."
            />
          </div>

          {!showReplacementOnNotSure ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 text-center sm:p-8">
              <p className="text-sm leading-relaxed text-stone-600">
                Already planning ahead for new equipment? You can still view
                replacement planning ranges.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center rounded-lg border-2 border-stone-900 bg-stone-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
                onClick={() => setShowReplacementOnNotSure(true)}
              >
                See Replacement Planning Range
              </button>
            </div>
          ) : null}

          {showReplacementOnNotSure ? (
            <div className="space-y-4">
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-stone-500">
                Replacement planning
              </p>
              <ReplacementBudgetEstimator />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
