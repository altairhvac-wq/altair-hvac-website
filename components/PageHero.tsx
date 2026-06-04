import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-600/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            {eyebrow}
          </p>
        )}
        <h1
          className={`max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${eyebrow ? "mt-4" : ""}`}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
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
      </div>
    </section>
  );
}
