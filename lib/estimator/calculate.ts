import type {
  ComfortIssue,
  CompleteEstimatorInput,
  EquipmentAge,
  EstimatorInput,
  EstimatorResult,
  HomeSizeRange,
  SystemType,
  TierLabel,
  TierRange,
  Urgency,
} from "@/lib/estimator/types";

/** Customer-facing base ranges — rough planning estimates only, not quotes. */
const SYSTEM_BASE_RANGES: Record<SystemType, { min: number; max: number }> = {
  furnace: { min: 3800, max: 7800 },
  ac: { min: 4500, max: 9000 },
  "furnace-ac": { min: 7500, max: 14500 },
  "heat-pump": { min: 6500, max: 15500 },
  iaq: { min: 500, max: 2800 },
};

const HOME_SIZE_MULTIPLIERS: Record<HomeSizeRange, number> = {
  "under-1500": 0.92,
  "1500-2500": 1,
  "2500-3500": 1.12,
  "3500-plus": 1.25,
};

const IAQ_HOME_SIZE_MULTIPLIERS: Record<HomeSizeRange, number> = {
  "under-1500": 0.95,
  "1500-2500": 1,
  "2500-3500": 1.08,
  "3500-plus": 1.15,
};

const AGE_MULTIPLIERS: Record<EquipmentAge, number> = {
  "under-5": 0.95,
  "5-10": 1,
  "10-15": 1.06,
  "15-plus": 1.12,
  unknown: 1.03,
};

const URGENCY_MULTIPLIERS: Record<Urgency, number> = {
  routine: 1,
  soon: 1.02,
  urgent: 1.04,
};

const COMFORT_MULTIPLIERS: Record<ComfortIssue, number> = {
  planning: 0.94,
  "old-working": 1,
  uneven: 1.04,
  "high-bills": 1.06,
  "weak-airflow": 1.07,
  "frequent-breakdowns": 1.1,
  "no-heat-cool": 1.12,
};

const COMFORT_ISSUE_LABELS: Record<ComfortIssue, string> = {
  planning: "Planning ahead / just comparing options",
  "old-working": "System is old but still working",
  uneven: "Uneven temperatures",
  "high-bills": "High utility bills",
  "weak-airflow": "Weak airflow",
  "frequent-breakdowns": "Frequent breakdowns",
  "no-heat-cool": "No heat / no cooling",
};

const COMFORT_GUIDANCE: Record<ComfortIssue, string> = {
  planning: "You may have more flexibility to compare options.",
  "old-working": "This is a good time to compare repair vs. replacement.",
  uneven:
    "Ductwork, sizing, or balancing may affect the final recommendation.",
  "high-bills":
    "Efficiency upgrades may matter more than lowest upfront cost.",
  "weak-airflow": "Airflow issues may require duct or blower evaluation.",
  "frequent-breakdowns":
    "Replacement may be more cost-effective than continued repair.",
  "no-heat-cool": "Call first if the system is down or unsafe.",
};

const COMFORT_HIGHLIGHTED_TIER: Record<ComfortIssue, TierLabel> = {
  planning: "Better",
  "old-working": "Good",
  uneven: "Better",
  "high-bills": "Better",
  "weak-airflow": "Better",
  "frequent-breakdowns": "Better",
  "no-heat-cool": "Good",
};

const TIER_COPY: Record<TierLabel, string> = {
  Good: "Standard efficiency equipment and a straightforward installation path.",
  Better:
    "Higher-efficiency equipment with common upgrades many homeowners choose.",
  Best: "Premium efficiency and comfort features — upper range before site-specific factors.",
};

const COMFORT_TIER_COPY: Record<
  ComfortIssue,
  Partial<Record<TierLabel, string>>
> = {
  planning: {
    Better:
      "A balanced mid-range option — a strong default when you have time to compare.",
  },
  "old-working": {
    Good: "Often the starting point when repair may still be on the table.",
    Better: "Worth comparing if age and repair history point toward replacement.",
  },
  uneven: {
    Better:
      "May include sizing or balancing considerations beyond basic equipment swap.",
    Best: "Upper range when ductwork or zoning upgrades are likely.",
  },
  "high-bills": {
    Better:
      "Higher-efficiency equipment that often matters more than lowest upfront cost.",
    Best: "Top efficiency tier — worth weighing against long-term utility savings.",
  },
  "weak-airflow": {
    Better:
      "Often where duct or blower evaluation enters the conversation.",
    Best: "May reflect broader airflow or distribution work beyond the unit itself.",
  },
  "frequent-breakdowns": {
    Good: "May still apply for a short-term fix, but compare total repair spend.",
    Better:
      "Common replacement path when repair costs keep adding up.",
    Best: "Premium reliability and warranty coverage when you want fewer surprises.",
  },
  "no-heat-cool": {
    Good: "Fastest path to restore basic comfort — final scope confirmed on site.",
    Better: "Step up if you want better efficiency while replacing the failed system.",
  },
};

function roundTo100(value: number) {
  return Math.round(value / 100) * 100;
}

function isCompleteInput(
  input: EstimatorInput,
): input is CompleteEstimatorInput {
  return (
    input.homeSize !== "" &&
    input.systemType !== "" &&
    input.equipmentAge !== "" &&
    input.urgency !== "" &&
    input.comfortIssue !== ""
  );
}

function buildRangeChangeNote(comfortIssue: ComfortIssue): string {
  const label = COMFORT_ISSUE_LABELS[comfortIssue];
  const multiplier = COMFORT_MULTIPLIERS[comfortIssue];
  const pct = Math.round(Math.abs(multiplier - 1) * 100);

  if (multiplier < 1) {
    return `Why this range changed: about ${pct}% lower because you selected "${label}".`;
  }

  if (multiplier > 1) {
    return `Why this range changed: about ${pct}% higher because you selected "${label}".`;
  }

  return `Why this range changed: no price adjustment for "${label}" — other inputs still shape the range.`;
}

function buildTiers(
  min: number,
  max: number,
  comfortIssue: ComfortIssue,
): TierRange[] {
  const span = max - min;
  const goodMax = roundTo100(min + span * 0.4);
  const betterMin = roundTo100(min + span * 0.32);
  const betterMax = roundTo100(min + span * 0.72);
  const bestMin = roundTo100(min + span * 0.6);
  const comfortTierCopy = COMFORT_TIER_COPY[comfortIssue];

  const tiers: TierRange[] = [
    {
      label: "Good",
      description: comfortTierCopy.Good ?? TIER_COPY.Good,
      min,
      max: Math.max(goodMax, min + 500),
    },
    {
      label: "Better",
      description: comfortTierCopy.Better ?? TIER_COPY.Better,
      min: betterMin,
      max: Math.max(betterMax, betterMin + 500),
    },
    {
      label: "Best",
      description: comfortTierCopy.Best ?? TIER_COPY.Best,
      min: bestMin,
      max,
    },
  ];

  return tiers;
}

export function formatEstimateCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatEstimateRange(min: number, max: number) {
  return `${formatEstimateCurrency(min)} – ${formatEstimateCurrency(max)}`;
}

export function calculateBudgetEstimate(
  input: EstimatorInput,
): EstimatorResult | null {
  if (!isCompleteInput(input)) {
    return null;
  }

  const base = SYSTEM_BASE_RANGES[input.systemType];
  const homeMultiplier =
    input.systemType === "iaq"
      ? IAQ_HOME_SIZE_MULTIPLIERS[input.homeSize]
      : HOME_SIZE_MULTIPLIERS[input.homeSize];

  const combined =
    homeMultiplier *
    AGE_MULTIPLIERS[input.equipmentAge] *
    URGENCY_MULTIPLIERS[input.urgency] *
    COMFORT_MULTIPLIERS[input.comfortIssue];

  let min = base.min * combined;
  let max = base.max * combined;

  min = roundTo100(min);
  max = roundTo100(max);
  max = Math.max(max, min + (input.systemType === "iaq" ? 400 : 1500));

  return {
    overallMin: min,
    overallMax: max,
    tiers: buildTiers(min, max, input.comfortIssue),
    comfortGuidance: COMFORT_GUIDANCE[input.comfortIssue],
    rangeChangeNote: buildRangeChangeNote(input.comfortIssue),
    highlightedTier: COMFORT_HIGHLIGHTED_TIER[input.comfortIssue],
  };
}
