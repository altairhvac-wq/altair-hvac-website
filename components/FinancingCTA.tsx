import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import { FINANCING_STATEMENT, PHONE, PHONE_HREF } from "@/lib/constants";

export default function FinancingCTA() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 px-8 py-12 text-white shadow-sm sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-400">
              Payment Options
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Financing — Coming When We Are Ready
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-300">
              {FINANCING_STATEMENT} In the meantime, call us for an estimate
              and we will walk you through repair and replacement options for your
              budget.
            </p>
            <div className="mt-8">
              <Button href={PHONE_HREF} variant="primaryHero">
                Call {PHONE}
              </Button>
            </div>
            <p className="mt-5 text-base text-stone-400">
              <CtaTextLink href="/financing" variant="dark">
                Learn more about financing
              </CtaTextLink>
              {" · "}
              <CtaTextLink href="/contact" variant="dark">
                Request your estimate
              </CtaTextLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
