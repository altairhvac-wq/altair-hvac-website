import type {
  ComfortIssue,
  CompleteEstimatorInput,
  EquipmentAge,
  EstimatorInput,
  EstimatorResult,
  HomeSizeRange,
  SystemType,
  TierRange,
  Urgency,
} from "@/lib/estimator/types";

/** Conservative base ranges — planning estimates only, not quotes. */
const SYSTEM_BASE_RANGES: Record<SystemType, { min: number; max: number }> = {
  furnace: { min: 4500, max: 9500 },
  ac: { min: 5500, max: 11500 },
  "furnace-ac": { min: 9000, max: 18000 },
  "heat-pump": { min: 8500, max: 19000 },
  iaq: { min: 800, max: 3500 },
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
  "no-heat-cool": 1.03,
  uneven: 1.02,
  "high-bills": 1.04,
  "air-quality": 1,
  planning: 0.98,
  other: 1,
};

const TIER_COPY: Record<TierRange["label"], string> = {
  Good: "Standard efficiency equipment and a straightforward installation path.",
  Better:
    "Higher-efficiency equipment with common upgrades many homeowners choose.",
  Best: "Premium efficiency and comfort features — upper range before site-specific factors.",
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

function buildTiers(min: number, max: number): TierRange[] {
  const span = max - min;
  const goodMax = roundTo100(min + span * 0.4);
  const betterMin = roundTo100(min + span * 0.32);
  const betterMax = roundTo100(min + span * 0.72);
  const bestMin = roundTo100(min + span * 0.6);

  return [
    {
      label: "Good",
      description: TIER_COPY.Good,
      min,
      max: Math.max(goodMax, min + 500),
    },
    {
      label: "Better",
      description: TIER_COPY.Better,
      min: betterMin,
      max: Math.max(betterMax, betterMin + 500),
    },
    {
      label: "Best",
      description: TIER_COPY.Best,
      min: bestMin,
      max,
    },
  ];
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

  min = Math.max(base.min, min);
  max = Math.min(base.max * 1.25, max);
  max = Math.max(max, min + (input.systemType === "iaq" ? 400 : 2000));

  min = roundTo100(min);
  max = roundTo100(max);

  return {
    overallMin: min,
    overallMax: max,
    tiers: buildTiers(min, max),
  };
}
