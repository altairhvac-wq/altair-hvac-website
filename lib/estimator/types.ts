export type SystemType = "furnace" | "ac" | "furnace-ac" | "heat-pump" | "iaq";

export type HomeSizeRange =
  | "under-1500"
  | "1500-2500"
  | "2500-3500"
  | "3500-plus";

export type EquipmentAge =
  | "under-5"
  | "5-10"
  | "10-15"
  | "15-plus"
  | "unknown";

export type Urgency = "routine" | "soon" | "urgent";

export type ComfortIssue =
  | "planning"
  | "old-working"
  | "uneven"
  | "high-bills"
  | "weak-airflow"
  | "frequent-breakdowns"
  | "no-heat-cool";

export type HelpNeed = "repair" | "replacement" | "not-sure";

export type DiagnosticSymptom =
  | "heating"
  | "cooling"
  | "airflow"
  | "high-bills"
  | "strange-noises"
  | "thermostat"
  | "water-leak"
  | "wont-start"
  | "other";

export type EstimatorInput = {
  homeSize: HomeSizeRange | "";
  systemType: SystemType | "";
  equipmentAge: EquipmentAge | "";
  urgency: Urgency | "";
  comfortIssue: ComfortIssue | "";
};

export type CompleteEstimatorInput = {
  homeSize: HomeSizeRange;
  systemType: SystemType;
  equipmentAge: EquipmentAge;
  urgency: Urgency;
  comfortIssue: ComfortIssue;
};

export type TierLabel = "Good" | "Better" | "Best";

export type TierRange = {
  label: TierLabel;
  description: string;
  min: number;
  max: number;
};

export type EstimatorResult = {
  overallMin: number;
  overallMax: number;
  tiers: TierRange[];
  comfortGuidance: string;
  rangeChangeNote: string;
  highlightedTier?: TierLabel;
};
