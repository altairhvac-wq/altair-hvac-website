import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const variantStyles = {
  primary:
    "bg-sky-700 text-white hover:bg-sky-800",
  primaryHero:
    "bg-white text-stone-900 shadow-lg shadow-black/25 hover:bg-stone-100",
  secondary:
    "border-2 border-slate-600 text-white hover:border-slate-500 hover:bg-slate-800",
  secondaryHero:
    "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20",
  outlineOnColor:
    "border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10",
  inverse:
    "bg-white text-sky-800 hover:bg-sky-50",
} as const;

const sizeStyles = {
  default: "px-8 py-4 text-base",
  sm: "px-4 py-2 text-sm",
  nav: "px-4 py-3 text-sm",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidthMobile?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

function isExternalHref(href: string) {
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  fullWidthMobile = true,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-lg font-semibold transition-colors",
    variantStyles[variant],
    sizeStyles[size],
    fullWidthMobile ? "w-full sm:w-auto" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export type { ButtonVariant, ButtonSize };
