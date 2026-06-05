import { EMAIL } from "@/lib/constants";

/** Primary destination for estimate CTAs — full form on the contact page. */
export const CONTACT_ESTIMATE_URL = "/contact#estimate";

/** Dedicated landing page for QR codes, door hangers, and shared links. */
export const INSTANT_ESTIMATE_URL = "/instant-estimate";

/** Build a trackable /instant-estimate URL (canonical SEO path stays query-free). */
export {
  buildInstantEstimateUrl,
  type InstantEstimateLinkOptions,
} from "@/lib/marketing/sources";

export const ESTIMATE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Estimate Inquiry")}`;

export const QUOTE_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent("Name:\nPhone:\nAddress:\nService needed:\nEquipment age (if known):\nWhat is happening:\nPreferred contact time:\n")}`;
