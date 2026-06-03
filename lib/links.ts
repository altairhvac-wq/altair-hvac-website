import { EMAIL } from "@/lib/constants";

export const ESTIMATE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Free Estimate Request")}`;

export const QUOTE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent("Name:\nPhone:\nAddress:\nService needed:\nPreferred contact time:\n")}`;
