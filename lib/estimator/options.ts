import type {
  ComfortIssue,
  EquipmentAge,
  HomeSizeRange,
  SystemType,
  Urgency,
} from "@/lib/estimator/types";

export const HOME_SIZE_OPTIONS: { value: HomeSizeRange; label: string }[] = [
  { value: "under-1500", label: "Under 1,500 sq ft" },
  { value: "1500-2500", label: "1,500 – 2,500 sq ft" },
  { value: "2500-3500", label: "2,500 – 3,500 sq ft" },
  { value: "3500-plus", label: "Over 3,500 sq ft" },
];

export const SYSTEM_TYPE_OPTIONS: { value: SystemType; label: string }[] = [
  { value: "furnace", label: "Furnace" },
  { value: "ac", label: "AC" },
  { value: "furnace-ac", label: "Furnace + AC" },
  { value: "heat-pump", label: "Heat Pump" },
  { value: "iaq", label: "Indoor Air Quality" },
];

export const ESTIMATOR_EQUIPMENT_AGE_OPTIONS: {
  value: EquipmentAge;
  label: string;
}[] = [
  { value: "under-5", label: "Less than 5 years" },
  { value: "5-10", label: "5–10 years" },
  { value: "10-15", label: "10–15 years" },
  { value: "15-plus", label: "15+ years" },
  { value: "unknown", label: "Not sure" },
];

export const ESTIMATOR_URGENCY_OPTIONS: { value: Urgency; label: string }[] = [
  { value: "routine", label: "Routine — planning ahead" },
  { value: "soon", label: "Soon — within a week" },
  { value: "urgent", label: "Urgent — comfort or safety concern" },
];

export const COMFORT_ISSUE_OPTIONS: { value: ComfortIssue; label: string }[] =
  [
    { value: "planning", label: "Planning ahead / just comparing options" },
    { value: "old-working", label: "System is old but still working" },
    { value: "uneven", label: "Uneven temperatures" },
    { value: "high-bills", label: "High utility bills" },
    { value: "weak-airflow", label: "Weak airflow" },
    { value: "frequent-breakdowns", label: "Frequent breakdowns" },
    { value: "no-heat-cool", label: "No heat / no cooling" },
  ];

export const EMPTY_ESTIMATOR_INPUT = {
  homeSize: "",
  systemType: "",
  equipmentAge: "",
  urgency: "",
  comfortIssue: "",
} as const;
