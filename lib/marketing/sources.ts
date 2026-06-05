/**
 * Marketing source helpers for /instant-estimate.
 *
 * SEO: canonical and sitemap always use the clean path (/instant-estimate).
 * Query strings are for on-page context only — not indexed as separate URLs.
 */

export const INSTANT_ESTIMATE_PATH = "/instant-estimate";

/** Recognized `source` query values and optional on-page copy. */
export const MARKETING_SOURCES = {
  doorhanger: {
    label: "Door hanger",
    banner: "Scanning from a door hanger? Start below.",
  },
  "business-card": {
    label: "Business card",
    banner: "Found us on a business card? Start below.",
  },
  facebook: {
    label: "Facebook",
    banner: "Thanks for visiting from Facebook. Start below.",
  },
} as const;

export type MarketingSourceKey = keyof typeof MARKETING_SOURCES;

const SOURCE_ALIASES: Record<string, MarketingSourceKey> = {
  doorhanger: "doorhanger",
  "door-hanger": "doorhanger",
  door_hanger: "doorhanger",
  "business-card": "business-card",
  businesscard: "business-card",
  business_card: "business-card",
  card: "business-card",
  facebook: "facebook",
  fb: "facebook",
};

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export type InstantEstimateLinkOptions = {
  source?: MarketingSourceKey | string;
} & UtmParams;

function normalizeSourceKey(value: string | null | undefined): MarketingSourceKey | null {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();
  const alias = SOURCE_ALIASES[normalized];
  if (alias) return alias;

  if (normalized in MARKETING_SOURCES) {
    return normalized as MarketingSourceKey;
  }

  return null;
}

/** Resolve a marketing source from `source` or `utm_source` query params. */
export function resolveMarketingSource(
  params: URLSearchParams | Record<string, string | string[] | undefined>,
): MarketingSourceKey | null {
  const read = (key: string): string | null => {
    const value =
      params instanceof URLSearchParams
        ? params.get(key)
        : params[key];

    if (Array.isArray(value)) return value[0] ?? null;
    return value ?? null;
  };

  return (
    normalizeSourceKey(read("source")) ?? normalizeSourceKey(read("utm_source"))
  );
}

export function getMarketingSourceBanner(source: MarketingSourceKey): string {
  return MARKETING_SOURCES[source].banner;
}

/** Build a trackable /instant-estimate URL without affecting canonical SEO paths. */
export function buildInstantEstimateUrl(
  options: InstantEstimateLinkOptions = {},
): string {
  const searchParams = new URLSearchParams();

  if (options.source) {
    searchParams.set("source", options.source);
  }

  for (const [key, value] of Object.entries(options)) {
    if (key === "source" || !value || !key.startsWith("utm_")) continue;
    searchParams.set(key, value);
  }

  const query = searchParams.toString();
  return query ? `${INSTANT_ESTIMATE_PATH}?${query}` : INSTANT_ESTIMATE_PATH;
}
