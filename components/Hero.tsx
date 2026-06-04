import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import PremiumHeroShell from "@/components/PremiumHeroShell";
import {
  PHONE,
  PHONE_HREF,
  SERVICE_AREA,
  EMERGENCY_STATEMENT,
} from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/hero-images";
import { CONTACT_ESTIMATE_URL } from "@/lib/links";

export default function Hero() {
  return (
    <PremiumHeroShell
      imageSrc={HERO_IMAGES.home.src}
      imageAlt={HERO_IMAGES.home.alt}
      priority
      size="home"
    >
      <p className="hero-eyebrow">{SERVICE_AREA}</p>
      <h1 className="hero-headline mt-4 max-w-3xl sm:text-5xl lg:text-6xl">
        Heating &amp; Cooling Help for Your Home
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-200 sm:text-xl">
        When your furnace or AC acts up, you need someone who answers the phone,
        explains your options clearly, and does careful work. That is how we
        serve homeowners in Roy, Layton, Clearfield, Bountiful, Ogden, and
        nearby communities.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button href={PHONE_HREF} variant="primaryHero">
          Call {PHONE}
        </Button>
        <CtaTextLink href={CONTACT_ESTIMATE_URL} variant="dark">
          Request your estimate →
        </CtaTextLink>
      </div>
      <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-300">
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-stone-400" aria-hidden />
          Estimates at no charge
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-stone-400" aria-hidden />
          Mon–Sat, 7:30 AM – 6:00 PM
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-stone-400" aria-hidden />
          Urgent issues — call for availability
        </li>
      </ul>
      <p className="mt-6 max-w-2xl text-sm text-stone-400">{EMERGENCY_STATEMENT}</p>
    </PremiumHeroShell>
  );
}
