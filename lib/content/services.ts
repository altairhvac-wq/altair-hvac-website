export type Service = {
  title: string;
  description: string;
  icon: "ac" | "furnace" | "install" | "maintenance" | "emergency" | "air-quality";
};

export const services: Service[] = [
  {
    title: "AC Repair",
    description:
      "Fast diagnostics and repairs for central air, mini-splits, and heat pumps. We restore cool comfort when Utah summers heat up.",
    icon: "ac",
  },
  {
    title: "Furnace Repair",
    description:
      "Reliable heating repairs for gas and electric furnaces. Same-day service available when your system stops keeping your home warm.",
    icon: "furnace",
  },
  {
    title: "HVAC Installation",
    description:
      "Professional installation of energy-efficient heating and cooling systems sized correctly for your home and budget.",
    icon: "install",
  },
  {
    title: "Maintenance",
    description:
      "Seasonal tune-ups that extend equipment life, improve efficiency, and help prevent unexpected breakdowns.",
    icon: "maintenance",
  },
  {
    title: "Emergency Service",
    description:
      "24/7 emergency HVAC response when you need help now — no heat in winter or no AC during a heat wave.",
    icon: "emergency",
  },
  {
    title: "Indoor Air Quality",
    description:
      "Air purifiers, humidifiers, dehumidifiers, and filtration solutions for cleaner, healthier air at home.",
    icon: "air-quality",
  },
];

export const whenToCallReasons = [
  {
    title: "No heat or no cooling",
    description:
      "If your system is blowing room-temperature air or not running at all, call before a small issue becomes a bigger repair.",
  },
  {
    title: "Strange noises or smells",
    description:
      "Banging, screeching, burning smells, or musty odors often signal a problem that should be checked by a professional.",
  },
  {
    title: "Rising energy bills",
    description:
      "A sudden spike in utility costs can mean your equipment is working harder than it should and may need service.",
  },
  {
    title: "Uneven temperatures",
    description:
      "Hot and cold spots around your home may point to duct issues, airflow problems, or an aging system.",
  },
];
