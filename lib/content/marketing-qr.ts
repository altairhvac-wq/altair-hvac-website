/**
 * QR and print marketing copy suggestions for Altair HVAC.
 * Use these when creating door hangers, business cards, yard signs, and social posts.
 *
 * SEO safeguard: always point QR codes and printed URLs to clean paths in copy;
 * append tracking query strings only on the encoded link target, not in visible text.
 * Canonical URL remains https://altairhvac.com/instant-estimate (no query params).
 */

import { buildInstantEstimateUrl } from "@/lib/marketing/sources";
import { PHONE } from "@/lib/constants";

export const marketingQrGuidance = {
  canonicalPath: "/instant-estimate",
  canonicalNote:
    "Sitemap and page metadata use /instant-estimate without query strings. Tracking params are for on-page context only.",
  recommendedParams: [
    "source — primary channel (doorhanger, business-card, facebook)",
    "utm_source — optional mirror of source for future analytics",
    "utm_medium — print, qr, social, email",
    "utm_campaign — season or promotion slug (e.g. spring-2026)",
  ],
} as const;

export const marketingQrExamples = [
  {
    placement: "Door hanger — headline",
    copy: "Plan your HVAC budget in under a minute.",
  },
  {
    placement: "Door hanger — subhead",
    copy: "Scan for a free instant budget range. Not a final quote — call for exact pricing.",
  },
  {
    placement: "Door hanger — CTA line",
    copy: "Scan to estimate → altairhvac.com/instant-estimate",
  },
  {
    placement: "Door hanger — tracked QR destination",
    copy: buildInstantEstimateUrl({
      source: "doorhanger",
      utm_medium: "print",
      utm_campaign: "door-hanger",
    }),
  },
  {
    placement: "Business card — front teaser",
    copy: "Instant HVAC budget estimator on our site.",
  },
  {
    placement: "Business card — back CTA",
    copy: `Need help now? Call ${PHONE}. Or scan for a quick budget range.`,
  },
  {
    placement: "Business card — tracked QR destination",
    copy: buildInstantEstimateUrl({
      source: "business-card",
      utm_medium: "print",
      utm_campaign: "business-card",
    }),
  },
  {
    placement: "Facebook / social post — link text",
    copy: "Get a rough HVAC budget range in about a minute — no signup required.",
  },
  {
    placement: "Facebook — tracked link destination",
    copy: buildInstantEstimateUrl({
      source: "facebook",
      utm_medium: "social",
      utm_campaign: "facebook-post",
    }),
  },
  {
    placement: "Yard sign / vehicle — short URL line",
    copy: "altairhvac.com/instant-estimate",
  },
] as const;
