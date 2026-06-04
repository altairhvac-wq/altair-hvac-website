"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import MobileNav from "@/components/MobileNav";
import { COMPANY_NAME, PHONE, PHONE_HREF } from "@/lib/constants";
import { mainNavLinks } from "@/lib/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/90 bg-white/[0.98] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold leading-none tracking-tight text-stone-900 sm:text-[1.35rem]"
        >
          {COMPANY_NAME}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium tracking-wide text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href={PHONE_HREF}
          variant="primary"
          size="sm"
          fullWidthMobile={false}
          className="hidden sm:inline-flex"
        >
          Call {PHONE}
        </Button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-stone-200 p-2 text-stone-700 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <MobileNav
        links={mainNavLinks}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
