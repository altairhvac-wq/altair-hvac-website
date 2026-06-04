export type Project = {
  id: string;
  title: string;
  category: string;
  area: string;
  summary: string;
  details: string[];
  note: string;
};

/** Representative project examples — swap for documented jobs when available. */
export const featuredProjects: Project[] = [
  {
    id: "furnace-replacement",
    title: "Furnace replacement in an older split home",
    category: "Furnace replacement",
    area: "Layton area",
    summary:
      "Homeowner reported weak heat and a furnace that cycled frequently. The existing unit was past its useful life and had a cracked heat exchanger.",
    details: [
      "Measured the home and confirmed proper sizing before recommending equipment",
      "Removed the old furnace, set the new unit, and reconnected gas and electrical",
      "Tested combustion, airflow, and thermostat operation before leaving",
    ],
    note: "Homeowner received a written estimate before any installation work began.",
  },
  {
    id: "ac-replacement",
    title: "Central AC replacement ahead of summer",
    category: "AC replacement",
    area: "Clearfield area",
    summary:
      "Outdoor condenser had failed after years of use. Indoor coil and line set were evaluated to determine whether a full changeout made sense.",
    details: [
      "Explained repair vs. replacement costs so the homeowner could decide with confidence",
      "Installed matched outdoor and indoor equipment sized for the existing ductwork",
      "Pressure-tested the refrigerant circuit and verified cooling at the supply registers",
    ],
    note: "Scheduling was arranged around work hours — no surprise weekend surcharges discussed at estimate time.",
  },
  {
    id: "iaq-filtration",
    title: "Filtration and indoor air quality upgrade",
    category: "Indoor air quality",
    area: "Bountiful area",
    summary:
      "Family wanted less dust buildup and better filtration during allergy season without replacing the entire HVAC system.",
    details: [
      "Reviewed existing filter size, blower capacity, and duct layout",
      "Upgraded to a higher-efficiency media filter cabinet compatible with the current furnace",
      "Walked through filter change intervals and what to watch for after installation",
    ],
    note: "Improvements focused on airflow and filtration — not a full system replacement.",
  },
];

export const whatToExpectSteps = [
  {
    title: "You reach us by phone",
    description:
      "Call during business hours when you can. If we are on a job, leave your name, number, and a short description — we call back as soon as we can.",
  },
  {
    title: "We ask a few practical questions",
    description:
      "Address, what the system is doing (or not doing), and how long the issue has been going on. That helps us decide whether you need a same-day visit or can plan ahead.",
  },
  {
    title: "We set clear next steps",
    description:
      "You hear whether we can come out, what the visit is for, and what to expect on timing. No pressure to book on the spot.",
  },
  {
    title: "Estimate before work",
    description:
      "For repairs and installations, we explain findings and pricing before work begins. You approve what makes sense for your home and budget.",
  },
];

export const callPrepTips = [
  "Your street address and city",
  "What the system is doing — noises, smells, no heat, no cooling, etc.",
  "Approximate age of the furnace or AC if you know it",
  "Whether any recent repairs were done",
];
