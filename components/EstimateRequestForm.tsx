"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/constants";
import { buildEstimateMailto } from "@/lib/leads/mailto";
import {
  EQUIPMENT_AGE_OPTIONS,
  PREFERRED_CONTACT_OPTIONS,
  SERVICE_TYPE_OPTIONS,
  URGENCY_OPTIONS,
} from "@/lib/leads/options";
import { EMPTY_ESTIMATE_LEAD, type EstimateLead } from "@/lib/leads/types";
import {
  hasValidationErrors,
  validateEstimateLead,
  type EstimateLeadFieldErrors,
} from "@/lib/leads/validation";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm transition-colors placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-900/15";
const inputErrorClass = "border-red-400 focus:border-red-500 focus:ring-red-500/20";
const labelClass = "block text-sm font-semibold text-stone-800";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
};

function Field({ id, label, error, required, hint, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="text-stone-500" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-stone-500">
          {hint}
        </p>
      ) : null}
      <div aria-describedby={describedBy}>{children}</div>
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white"
        aria-hidden
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-stone-900">
        Your request is ready to send
      </h3>
      <p className="mt-3 leading-relaxed text-stone-600">
        Your email app should open with your details filled in. Send the message to{" "}
        <span className="font-medium text-stone-800">{EMAIL}</span> to complete your
        estimate request. We typically follow up by phone when that is faster.
      </p>
      <p className="mt-4 text-sm text-stone-500">
        Email did not open? Call us with the same details — we are happy to help.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={PHONE_HREF} variant="primary">
          Call {PHONE}
        </Button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex w-full items-center justify-center rounded-lg border-2 border-stone-300 px-8 py-4 text-base font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100 sm:w-auto"
        >
          Submit another request
        </button>
      </div>
    </div>
  );
}

export default function EstimateRequestForm() {
  const formId = useId();
  const [values, setValues] = useState<EstimateLead>(EMPTY_ESTIMATE_LEAD);
  const [errors, setErrors] = useState<EstimateLeadFieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof EstimateLead>(key: K, value: EstimateLead[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEstimateLead(values);
    if (hasValidationErrors(nextErrors)) {
      setErrors(nextErrors);
      const firstInvalid = (Object.keys(nextErrors) as (keyof EstimateLead)[])[0];
      if (firstInvalid) {
        document.getElementById(`${formId}-${firstInvalid}`)?.focus();
      }
      return;
    }

    setSubmitting(true);
    setErrors({});
    setSubmitted(true);
    setSubmitting(false);

    const mailto = buildEstimateMailto(values);
    window.setTimeout(() => {
      window.location.href = mailto;
    }, 50);
  }

  function handleReset() {
    setValues(EMPTY_ESTIMATE_LEAD);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return <SuccessState onReset={handleReset} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-labelledby={`${formId}-title`}
    >
      <p id={`${formId}-title`} className="sr-only">
        Estimate request form
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Full name" required error={errors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={`${inputClass} ${errors.name ? inputErrorClass : ""}`}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field
          id={`${formId}-phone`}
          label="Phone"
          required
          error={errors.phone}
          hint="Best number to reach you — we often call back the same day."
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${formId}-email`}
          label="Email"
          error={errors.email}
          hint="Optional — helpful if you prefer written follow-up."
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={`${inputClass} ${errors.email ? inputErrorClass : ""}`}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field
          id={`${formId}-address`}
          label="Address or city"
          required
          error={errors.address}
        >
          <input
            id={`${formId}-address`}
            name="address"
            type="text"
            autoComplete="street-address"
            required
            value={values.address}
            onChange={(e) => updateField("address", e.target.value)}
            placeholder="e.g. Roy, UT or full street address"
            className={`${inputClass} ${errors.address ? inputErrorClass : ""}`}
            aria-invalid={Boolean(errors.address)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${formId}-serviceType`}
          label="Service type"
          required
          error={errors.serviceType}
        >
          <select
            id={`${formId}-serviceType`}
            name="serviceType"
            required
            value={values.serviceType}
            onChange={(e) => updateField("serviceType", e.target.value)}
            className={`${inputClass} ${errors.serviceType ? inputErrorClass : ""}`}
            aria-invalid={Boolean(errors.serviceType)}
          >
            {SERVICE_TYPE_OPTIONS.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-equipmentAge`} label="Equipment age">
          <select
            id={`${formId}-equipmentAge`}
            name="equipmentAge"
            value={values.equipmentAge}
            onChange={(e) => updateField("equipmentAge", e.target.value)}
            className={inputClass}
          >
            {EQUIPMENT_AGE_OPTIONS.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={`${formId}-symptoms`}
        label="What is happening?"
        required
        error={errors.symptoms}
        hint="No heat, weak cooling, strange noises, smells, leaks — the more detail, the better we can prepare."
      >
        <textarea
          id={`${formId}-symptoms`}
          name="symptoms"
          required
          rows={4}
          maxLength={1200}
          value={values.symptoms}
          onChange={(e) => updateField("symptoms", e.target.value)}
          className={`${inputClass} resize-y min-h-[7rem] ${errors.symptoms ? inputErrorClass : ""}`}
          aria-invalid={Boolean(errors.symptoms)}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={`${formId}-urgency`} label="Urgency" required error={errors.urgency}>
          <select
            id={`${formId}-urgency`}
            name="urgency"
            required
            value={values.urgency}
            onChange={(e) => updateField("urgency", e.target.value)}
            className={`${inputClass} ${errors.urgency ? inputErrorClass : ""}`}
            aria-invalid={Boolean(errors.urgency)}
          >
            {URGENCY_OPTIONS.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <fieldset>
          <legend className={labelClass}>
            Preferred contact method <span className="text-stone-500" aria-hidden> *</span>
          </legend>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {PREFERRED_CONTACT_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-800 shadow-sm has-[:checked]:border-stone-900 has-[:checked]:ring-2 has-[:checked]:ring-stone-900/15"
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={option.value}
                  checked={values.preferredContact === option.value}
                  onChange={() => updateField("preferredContact", option.value)}
                  className="h-4 w-4 border-stone-400 text-stone-900 focus:ring-stone-900"
                />
                {option.label}
              </label>
            ))}
          </div>
          {errors.preferredContact ? (
            <p className="mt-1.5 text-sm font-medium text-red-700" role="alert">
              {errors.preferredContact}
            </p>
          ) : null}
        </fieldset>
      </div>

      <div className="rounded-xl border border-stone-200 bg-stone-100/80 px-4 py-4 text-sm text-stone-600">
        <p>
          <span className="font-semibold text-stone-800">Need help today?</span> Call{" "}
          <CtaTextLink href={PHONE_HREF}>{PHONE}</CtaTextLink> — phone is still the
          fastest way for urgent heating and cooling issues.
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-lg bg-stone-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Preparing your request…" : "Send estimate request"}
        </button>
        <p className="mt-3 text-sm text-stone-500">
          Submits via your email app to {EMAIL} until online delivery is connected. No
          obligation to book work.
        </p>
      </div>
    </form>
  );
}
