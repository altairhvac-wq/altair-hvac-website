import type { EstimateLead } from "@/lib/leads/types";

export type EstimateLeadFieldErrors = Partial<Record<keyof EstimateLead, string>>;

const PHONE_DIGITS_MIN = 10;
const PHONE_DIGITS_MAX = 11;
const SYMPTOMS_MIN = 12;
const SYMPTOMS_MAX = 1200;
const NAME_MIN = 2;
const NAME_MAX = 80;
const ADDRESS_MIN = 3;
const ADDRESS_MAX = 200;

function digitCount(value: string) {
  return value.replace(/\D/g, "").length;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validateEstimateLead(
  lead: EstimateLead,
): EstimateLeadFieldErrors {
  const errors: EstimateLeadFieldErrors = {};
  const name = lead.name.trim();
  const phone = lead.phone.trim();
  const email = lead.email.trim();
  const address = lead.address.trim();
  const symptoms = lead.symptoms.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < NAME_MIN) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > NAME_MAX) {
    errors.name = "Name is too long.";
  }

  if (!phone) {
    errors.phone = "Phone number is required so we can reach you.";
  } else {
    const digits = digitCount(phone);
    if (digits < PHONE_DIGITS_MIN || digits > PHONE_DIGITS_MAX) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }
  }

  if (email && !isValidEmail(email)) {
    errors.email = "Enter a valid email address or leave this blank.";
  }

  if (!address) {
    errors.address = "Enter your street address or city so we know your area.";
  } else if (address.length < ADDRESS_MIN) {
    errors.address = "Address or city must be at least 3 characters.";
  } else if (address.length > ADDRESS_MAX) {
    errors.address = "Address is too long.";
  }

  if (!lead.serviceType) {
    errors.serviceType = "Select the type of service you need.";
  }

  if (!lead.urgency) {
    errors.urgency = "Let us know how soon you need help.";
  }

  if (!lead.preferredContact) {
    errors.preferredContact = "Choose how you would like us to follow up.";
  }

  if (!symptoms) {
    errors.symptoms = "Describe what is happening with your system.";
  } else if (symptoms.length < SYMPTOMS_MIN) {
    errors.symptoms = "Add a few more details (at least 12 characters).";
  } else if (symptoms.length > SYMPTOMS_MAX) {
    errors.symptoms = "Please shorten your description.";
  }

  return errors;
}

export function hasValidationErrors(errors: EstimateLeadFieldErrors) {
  return Object.keys(errors).length > 0;
}
