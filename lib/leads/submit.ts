import type { EstimateLeadPayload } from "@/lib/leads/types";
import { toEstimateLeadPayload } from "@/lib/leads/mailto";
import type { EstimateLead } from "@/lib/leads/types";

export type LeadSubmitResult =
  | { ok: true; channel: "altair-os" }
  | { ok: true; channel: "mailto-fallback" }
  | { ok: false; error: string };

/**
 * Server-side entry point for Altair OS. When `ALTAIR_OS_LEAD_WEBHOOK_URL` is set,
 * POST the structured payload; otherwise callers should use mailto on the client.
 */
export async function submitEstimateLead(
  lead: EstimateLead,
): Promise<LeadSubmitResult> {
  const payload: EstimateLeadPayload = toEstimateLeadPayload(lead);
  const webhookUrl = process.env.ALTAIR_OS_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return { ok: true, channel: "mailto-fallback" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        ok: false,
        error: "We could not save your request. Please call us instead.",
      };
    }

    return { ok: true, channel: "altair-os" };
  } catch {
    return {
      ok: false,
      error: "We could not save your request. Please call us instead.",
    };
  }
}

export type { EstimateLeadPayload };
