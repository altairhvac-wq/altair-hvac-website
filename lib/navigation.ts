import type { NavLink } from "@/components/MobileNav";

export const mainNavLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/financing", label: "Financing" },
  { href: "/contact", label: "Contact" },
];

export const footerNavLinks: NavLink[] = [
  ...mainNavLinks,
  { href: "/", label: "Home" },
];
