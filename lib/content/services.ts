export type Service = {
  title: string;
  description: string;
  whyItMatters: string;
  signs: string[];
};

export const services: Service[] = [
  {
    title: "AC Repair",
    description:
      "We find what is wrong with your air conditioner, explain the fix, and get cool air back in your home.",
    whyItMatters:
      "When your AC stops working in summer, your home heats up fast. Waiting can make the problem worse and leave your family uncomfortable.",
    signs: [
      "Warm air from vents",
      "Unit runs but does not cool",
      "Water leaking near the indoor unit",
      "AC will not turn on",
    ],
  },
  {
    title: "Furnace Repair",
    description:
      "We troubleshoot gas and electric furnaces and repair the issue so your home heats safely again.",
    whyItMatters:
      "No heat in winter is more than an inconvenience — it affects your family's comfort and peace of mind. A small problem can turn into a bigger repair if ignored.",
    signs: [
      "No heat or weak heat",
      "Furnace cycles on and off frequently",
      "Burning or unusual smells",
      "Pilot light or ignition issues",
    ],
  },
  {
    title: "HVAC Installation",
    description:
      "When repair no longer makes sense, we help you choose and install heating and cooling equipment sized for your home.",
    whyItMatters:
      "An old or failing system costs more to run and breaks down more often. A properly installed replacement can improve comfort and lower surprise repair bills.",
    signs: [
      "System is 15+ years old",
      "Frequent breakdowns",
      "Uneven heating or cooling",
      "Repair costs approaching replacement value",
    ],
  },
  {
    title: "Maintenance",
    description:
      "Seasonal checkups keep your equipment running smoothly and catch small issues before they become emergency calls.",
    whyItMatters:
      "Most breakdowns do not happen without warning. Regular maintenance helps your system last longer and perform better when you need it most.",
    signs: [
      "It has been over a year since your last tune-up",
      "Higher-than-usual energy bills",
      "Dust buildup around vents",
      "You want to avoid a mid-season breakdown",
    ],
  },
  {
    title: "Emergency Service",
    description:
      "When comfort cannot wait, call us for urgent heating or cooling problems. We will let you know our current availability.",
    whyItMatters:
      "A failed furnace on a cold night or a dead AC during a heat wave needs attention as soon as possible. Availability depends on the day — call and we will be upfront about timing.",
    signs: [
      "No heat in winter",
      "No cooling during hot weather",
      "System shut off unexpectedly",
      "Safety concerns such as gas smell — call us and leave the area if needed",
    ],
  },
  {
    title: "Indoor Air Quality",
    description:
      "We install and service filters, humidifiers, dehumidifiers, and air purifiers to help your home feel fresher and healthier.",
    whyItMatters:
      "Dry winter air, summer humidity, and dust can affect how your home feels day to day — especially if anyone in your household has allergies or breathing sensitivities.",
    signs: [
      "Dry or stuffy air indoors",
      "More dust than usual",
      "Allergy symptoms worse at home",
      "Musty odors from vents",
    ],
  },
];

export const whenToCallReasons = [
  {
    title: "No heat or no cooling",
    description:
      "If your system is blowing room-temperature air or not running at all, call us. We will help you figure out whether it can wait or needs same-day attention.",
  },
  {
    title: "Strange noises or smells",
    description:
      "Banging, screeching, burning smells, or musty odors from your HVAC system should be checked by a professional.",
  },
  {
    title: "Rising energy bills",
    description:
      "A sudden jump in your utility bill may mean your equipment is working harder than it should. A tune-up or repair can often help.",
  },
  {
    title: "Uneven temperatures",
    description:
      "Rooms that are always too hot or too cold may point to airflow, duct, or equipment issues worth looking into.",
  },
];
