import { formEndpoint } from "./site";

export interface Enquiry {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export type SubmitResult =
  | { status: "sent" }
  | { status: "queued" } // validated locally, no delivery configured
  | { status: "error"; message: string };

/**
 * Contact hand-off.
 *
 * There is NO backend in this build. When `formEndpoint` is null the enquiry is
 * validated client-side only and reported back as "queued" — the UI states this
 * plainly rather than pretending an email was sent.
 *
 * To go live: set `formEndpoint` in src/data/site.ts to a Formspree endpoint,
 * a Resend/SendGrid proxy, or your own API route. The POST body below is a
 * plain JSON payload that most providers accept as-is.
 */
export async function submitEnquiry(enquiry: Enquiry): Promise<SubmitResult> {
  if (!formEndpoint) {
    // No delivery configured — the enquiry is validated and reported honestly.
    console.info("[Past Format] Enquiry validated (no endpoint configured):", enquiry);
    return { status: "queued" };
  }

  try {
    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(enquiry),
    });

    if (!response.ok) {
      return { status: "error", message: "The message could not be delivered. Please email directly." };
    }

    return { status: "sent" };
  } catch {
    return { status: "error", message: "Network unavailable. Please email directly." };
  }
}
