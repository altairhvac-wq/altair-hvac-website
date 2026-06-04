export const SERVICE_TYPE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "ac-repair", label: "AC Repair" },
  { value: "furnace-repair", label: "Furnace Repair" },
  { value: "hvac-installation", label: "HVAC Installation" },
  { value: "maintenance", label: "Maintenance" },
  { value: "emergency", label: "Emergency Service" },
  { value: "indoor-air-quality", label: "Indoor Air Quality" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const EQUIPMENT_AGE_OPTIONS = [
  { value: "", label: "Equipment age (optional)" },
  { value: "under-5", label: "Less than 5 years" },
  { value: "5-10", label: "5–10 years" },
  { value: "10-15", label: "10–15 years" },
  { value: "15-plus", label: "15+ years" },
  { value: "unknown", label: "Not sure" },
] as const;

export const URGENCY_OPTIONS = [
  { value: "", label: "Select urgency" },
  { value: "routine", label: "Routine — planning ahead" },
  { value: "soon", label: "Soon — within a week" },
  { value: "urgent", label: "Urgent — comfort or safety concern" },
] as const;

export const PREFERRED_CONTACT_OPTIONS = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "either", label: "Either works" },
] as const;

export function labelForOption(
  options: readonly { value: string; label: string }[],
  value: string,
) {
  return options.find((o) => o.value === value)?.label ?? value;
}
