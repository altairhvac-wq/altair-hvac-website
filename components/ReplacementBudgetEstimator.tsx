"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import {
  EstimatorField,
  selectClass,
} from "@/components/estimator/fields";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import {
  calculateBudgetEstimate,
  formatEstimateRange,
} from "@/lib/estimator/calculate";
import {
  COMFORT_ISSUE_OPTIONS,
  EMPTY_ESTIMATOR_INPUT,
  ESTIMATOR_EQUIPMENT_AGE_OPTIONS,
  ESTIMATOR_URGENCY_OPTIONS,
  HOME_SIZE_OPTIONS,
  SYSTEM_TYPE_OPTIONS,
} from "@/lib/estimator/options";
import type { EstimatorInput } from "@/lib/estimator/types";
import { CONTACT_ESTIMATE_URL } from "@/lib/links";

export default function ReplacementBudgetEstimator() {
  const [values, setValues] = useState<EstimatorInput>({
    ...EMPTY_ESTIMATOR_INPUT,
  });

  const result = useMemo(() => calculateBudgetEstimate(values), [values]);
  const isComplete = result !== null;

  function updateField<K extends keyof EstimatorInput>(
    key: K,
    value: EstimatorInput[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <form
        className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Replacement budget estimator"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
          Your home
        </p>

        <div className="mt-6 space-y-5">
          <EstimatorField id="estimator-home-size" label="Home size">
            <select
              id="estimator-home-size"
              className={selectClass}
              value={values.homeSize}
              onChange={(event) =>
                updateField(
                  "homeSize",
                  event.target.value as EstimatorInput["homeSize"],
                )
              }
            >
              <option value="">Select a size range</option>
              {HOME_SIZE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </EstimatorField>

          <EstimatorField id="estimator-system-type" label="System type">
            <select
              id="estimator-system-type"
              className={selectClass}
              value={values.systemType}
              onChange={(event) =>
                updateField(
                  "systemType",
                  event.target.value as EstimatorInput["systemType"],
                )
              }
            >
              <option value="">Select a system</option>
              {SYSTEM_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </EstimatorField>

          <EstimatorField id="estimator-equipment-age" label="Equipment age">
            <select
              id="estimator-equipment-age"
              className={selectClass}
              value={values.equipmentAge}
              onChange={(event) =>
                updateField(
                  "equipmentAge",
                  event.target.value as EstimatorInput["equipmentAge"],
                )
              }
            >
              <option value="">Select equipment age</option>
              {ESTIMATOR_EQUIPMENT_AGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </EstimatorField>

          <EstimatorField id="estimator-urgency" label="Urgency">
            <select
              id="estimator-urgency"
              className={selectClass}
              value={values.urgency}
              onChange={(event) =>
                updateField(
                  "urgency",
                  event.target.value as EstimatorInput["urgency"],
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

          <EstimatorField id="estimator-comfort-issue" label="Comfort issue">
            <select
              id="estimator-comfort-issue"
              className={selectClass}
              value={values.comfortIssue}
              onChange={(event) =>
                updateField(
                  "comfortIssue",
                  event.target.value as EstimatorInput["comfortIssue"],
                )
              }
            >
              <option value="">Select what is going on</option>
              {COMFORT_ISSUE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </EstimatorField>
        </div>
      </form>

      <div
        className="rounded-2xl border border-stone-200 bg-stone-900 p-6 text-white sm:p-8"
        aria-live="polite"
      >
        {isComplete && result ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-400">
              Rough planning range
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {formatEstimateRange(result.overallMin, result.overallMax)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              Based on typical installs in our area. Not a final price.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              {result.comfortGuidance}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">
              {result.rangeChangeNote}
            </p>

            <div className="mt-8 space-y-4">
              {result.tiers.map((tier) => (
                <article
                  key={tier.label}
                  className={`rounded-xl border bg-stone-950/50 p-5 ${
                    tier.label === result.highlightedTier
                      ? "border-stone-500"
                      : "border-stone-700"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-stone-100">
                      {tier.label}
                      {tier.label === result.highlightedTier ? (
                        <span className="ml-2 text-xs font-medium uppercase tracking-wide text-stone-400">
                          Often a good fit
                        </span>
                      ) : null}
                    </h3>
                    <p className="text-sm font-semibold tabular-nums text-stone-200">
                      {formatEstimateRange(tier.min, tier.max)}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {tier.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 rounded-xl border border-stone-700 bg-stone-950/60 px-4 py-4 text-sm leading-relaxed text-stone-300">
              <span className="font-semibold text-stone-100">
                Planning estimate only.
              </span>{" "}
              Final pricing requires an in-home evaluation of your equipment,
              ductwork, electrical, and home layout. We will provide a written
              estimate before any work begins.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Button href={PHONE_HREF} variant="primaryHero">
                Call {PHONE}
              </Button>
              <Button href={CONTACT_ESTIMATE_URL} variant="outlineOnColor">
                Request an Estimate
              </Button>
            </div>
          </>
        ) : (
          <div className="flex min-h-[280px] flex-col justify-center text-center sm:min-h-[320px]">
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
              Your estimate
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-300">
              Select your home details on the left to see a conservative budget
              range and Good / Better / Best planning options.
            </p>
            <p className="mt-4 text-sm text-stone-500">
              For exact pricing, call or request an in-home estimate.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
