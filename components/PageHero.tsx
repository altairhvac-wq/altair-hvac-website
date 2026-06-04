import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import PremiumHeroShell from "@/components/PremiumHeroShell";
import { HERO_IMAGES } from "@/lib/hero-images";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <PremiumHeroShell
      imageSrc={HERO_IMAGES.page.src}
      imageAlt={HERO_IMAGES.page.alt}
      size="page"
    >
      {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
      <h1
        className={`hero-headline max-w-3xl sm:text-5xl ${eyebrow ? "mt-4" : ""}`}
      >
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-200 sm:text-xl">
        {description}
      </p>
      {(primaryCta || secondaryCta) && (
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          {primaryCta && (
            <Button href={primaryCta.href} variant="primaryHero">
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <CtaTextLink href={secondaryCta.href} variant="dark">
              {secondaryCta.label} →
            </CtaTextLink>
          )}
        </div>
      )}
    </PremiumHeroShell>
  );
}
