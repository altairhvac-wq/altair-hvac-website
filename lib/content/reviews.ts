export type Review = {
  author: string;
  text: string;
  source?: string;
  rating?: number;
};

/** Add verified customer reviews here when available. Section stays hidden until then. */
export const reviews: Review[] = [];

export const serviceProcessSteps = [
  {
    title: "Listen and assess",
    description:
      "You tell us what is happening. We ask clarifying questions, schedule a visit when needed, and set clear expectations for timing.",
  },
  {
    title: "Diagnose and explain",
    description:
      "We inspect your system, share what we found in plain language, and outline repair or replacement options with pricing before work begins.",
  },
  {
    title: "Complete the work",
    description:
      "Approved work is performed carefully. We test the system, walk you through what was done, and leave your home tidy.",
  },
  {
    title: "Follow up as needed",
    description:
      "Questions after the visit are welcome. If something does not feel right, call us — we want the result to match what we discussed.",
  },
];
