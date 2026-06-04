import Link from "next/link";
import type { ReactNode } from "react";

type CtaTextLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

function isExternalHref(href: string) {
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  );
}

const variantStyles = {
  light: "text-stone-700 hover:text-stone-900",
  dark: "text-stone-200 hover:text-white",
} as const;

export default function CtaTextLink({
  href,
  children,
  variant = "light",
  className = "",
}: CtaTextLinkProps) {
  const classes = `font-semibold transition-colors ${variantStyles[variant]} ${className}`;

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
