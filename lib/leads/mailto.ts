import { EMAIL } from "@/lib/constants";
import {
  EQUIPMENT_AGE_OPTIONS,
  labelForOption,
  PREFERRED_CONTACT_OPTIONS,
  SERVICE_TYPE_OPTIONS,
  URGENCY_OPTIONS,
} from "@/lib/leads/options";
import type { EstimateLead, EstimateLeadPayload } from "@/lib/leads/types";

export function toEstimateLeadPayload(lead: EstimateLead): EstimateLeadPayload {
  return {
    ...lead,
    source: "website-contact-form",
    submittedAt: new Date().toISOString(),
  };
}

function formatLeadBody(lead: EstimateLead) {
  const equipmentLine = lead.equipmentAge
    ? labelForOption(EQUIPMENT_AGE_OPTIONS, lead.equipmentAge)
    : "Not provided";

  return [
    "New estimate request from altairhvac.com",
    "",
    `Name: ${lead.name.trim()}`,
    `Phone: ${lead.phone.trim()}`,
    lead.email.trim() ? `Email: ${lead.email.trim()}` : "Email: (not provided)",
    `Address / city: ${lead.address.trim()}`,
    `Service: ${labelForOption(SERVICE_TYPE_OPTIONS, lead.serviceType)}`,
    `Equipment age: ${equipmentLine}`,
    `Urgency: ${labelForOption(URGENCY_OPTIONS, lead.urgency)}`,
    `Preferred contact: ${labelForOption(PREFERRED_CONTACT_OPTIONS, lead.preferredContact)}`,
    "",
    "Symptoms / details:",
    lead.symptoms.trim(),
    "",
    "---",
    "Sent via website estimate form (mailto fallback until Altair OS is connected).",
  ].join("\n");
}

export function buildEstimateMailto(lead: EstimateLead) {
  const subject = encodeURIComponent(
    `Estimate Request — ${lead.name.trim()} (${labelForOption(SERVICE_TYPE_OPTIONS, lead.serviceType)})`,
  );
  const body = encodeURIComponent(formatLeadBody(lead));
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
