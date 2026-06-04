import { EMAIL } from "@/lib/constants";

export const ESTIMATE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Estimate Inquiry")}`;

export const QUOTE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent("Name:\nPhone:\nAddress:\nService needed:\nEquipment age (if known):\nWhat is happening:\nPreferred contact time:\n")}`;
