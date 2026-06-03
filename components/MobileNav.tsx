"use client";

import Link from "next/link";
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
              className="block py-1 text-base font-medium text-slate-700 hover:text-sky-700"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={PHONE_HREF}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-sky-700 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-800"
          >
            Call {PHONE}
          </a>
        </li>
      </ul>
    </nav>
  );
}
