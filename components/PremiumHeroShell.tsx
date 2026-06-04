import Image from "next/image";
import type { ReactNode } from "react";

export type HeroSize = "home" | "page";

const sizeClasses: Record<HeroSize, string> = {
  home: "min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem]",
  page: "min-h-[18rem] sm:min-h-[22rem] lg:min-h-[26rem]",
};

const paddingClasses: Record<HeroSize, string> = {
  home: "py-16 sm:py-24 lg:py-28",
  page: "py-14 sm:py-20 lg:py-24",
};

type PremiumHeroShellProps = {
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  size?: HeroSize;
  children: ReactNode;
};

export default function PremiumHeroShell({
  imageSrc,
  imageAlt,
  priority = false,
  size = "page",
  children,
}: PremiumHeroShellProps) {
  return (
    <section
      className={`relative flex items-end overflow-hidden text-white ${sizeClasses[size]}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/30"
        aria-hidden
      />
      <div
        className={`relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${paddingClasses[size]}`}
      >
        {children}
      </div>
    </section>
  );
}
