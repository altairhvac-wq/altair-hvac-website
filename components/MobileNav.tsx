"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export type NavLink = {
  href: string;
  label: string;
};

type MobileNavProps = {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ links, isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <nav
      id="mobile-menu"
      className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-1 text-base font-medium text-stone-700 hover:text-stone-900"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mt-2">
          <Button href={PHONE_HREF} variant="primary" size="nav" className="w-full">
            Call {PHONE}
          </Button>
        </li>
      </ul>
    </nav>
  );
}
