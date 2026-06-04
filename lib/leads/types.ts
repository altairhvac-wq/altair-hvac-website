/** Structured estimate lead — stable shape for mailto today and Altair OS ingestion later. */
export type EstimateLead = {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  equipmentAge: string;
  symptoms: string;
  urgency: string;
  preferredContact: string;
};

export type EstimateLeadPayload = EstimateLead & {
  source: "website-contact-form";
  submittedAt: string;
};

export const EMPTY_ESTIMATE_LEAD: EstimateLead = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceType: "",
  equipmentAge: "",
  symptoms: "",
  urgency: "",
  preferredContact: "phone",
};
