import type { DiagnosticSymptom, EquipmentAge, Urgency } from "@/lib/estimator/types";

export const DIAGNOSTIC_VISIT_RANGE = { min: 89, max: 149 } as const;

export const TYPICAL_REPAIR_RANGE = { min: 150, max: 1500 } as const;

export const DIAGNOSTIC_COST_NOTE =
  "The exact cost depends on the issue, equipment condition, required parts, and system accessibility.";

const SYMPTOM_GUIDANCE: Record<DiagnosticSymptom, string> = {
  heating:
    "Heating problems often trace to a single component — ignition, airflow, or controls — rather than the whole system.",
  cooling:
    "Cooling issues are frequently repairable when caught early, especially refrigerant, airflow, or electrical faults.",
  airflow:
    "Airflow problems may involve filters, ductwork, blower components, or balancing — many are fixable without replacement.",
  "high-bills":
    "Efficiency issues may be related to maintenance, airflow, controls, or aging equipment.",
  "strange-noises":
    "Unusual sounds often point to a specific worn part — bearings, belts, or motor issues — that can be addressed on site.",
  thermostat:
    "Thermostat and control problems are commonly repaired without replacing your heating or cooling equipment.",
  "water-leak":
    "Drainage and condensate issues are often repairable.",
  "wont-start":
    "Many no-start conditions can be repaired without replacing the entire system.",
  other:
    "A diagnostic visit helps identify the root cause before recommending repair or replacement.",
};

const URGENCY_GUIDANCE: Record<Urgency, string | null> = {
  routine: null,
  soon: "We will do our best to get you on the schedule within the week.",
  urgent:
    "If comfort or safety is a concern, call now — we prioritize urgent no-heat and no-cool situations.",
};

const AGE_GUIDANCE: Record<EquipmentAge, string | null> = {
  "under-5": null,
  "5-10": null,
  "10-15":
    "At this age, repair is often still worthwhile — we will compare repair cost against remaining equipment life.",
  "15-plus":
    "Older equipment may still be repairable, but replacement planning may make sense depending on the diagnosis.",
  unknown: null,
};

export type DiagnosticInput = {
  equipmentAge: EquipmentAge | "";
  symptom: DiagnosticSymptom | "";
  urgency: Urgency | "";
};

export type DiagnosticResult = {
  symptomGuidance: string | null;
  additionalNotes: string[];
};

export function getDiagnosticGuidance(
  input: DiagnosticInput,
): DiagnosticResult {
  const additionalNotes: string[] = [];

  if (input.symptom !== "") {
    additionalNotes.push(SYMPTOM_GUIDANCE[input.symptom]);
  }

  if (input.urgency !== "") {
    const urgencyNote = URGENCY_GUIDANCE[input.urgency];
    if (urgencyNote) {
      additionalNotes.push(urgencyNote);
    }
  }

  if (input.equipmentAge !== "") {
    const ageNote = AGE_GUIDANCE[input.equipmentAge];
    if (ageNote) {
      additionalNotes.push(ageNote);
    }
  }

  return {
    symptomGuidance:
      input.symptom !== "" ? SYMPTOM_GUIDANCE[input.symptom] : null,
    additionalNotes,
  };
}

export function formatDiagnosticRange(min: number, max: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  if (max >= 1500 && min === TYPICAL_REPAIR_RANGE.min) {
    return `${formatter.format(min)}–${formatter.format(max)}+`;
  }

  return `${formatter.format(min)}–${formatter.format(max)}`;
}
