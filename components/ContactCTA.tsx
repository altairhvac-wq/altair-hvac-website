import Button from "@/components/Button";
import CtaTextLink from "@/components/CtaTextLink";
import { EMAIL, PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="bg-slate-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Ready to Talk?
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Call for Heating &amp; Cooling Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            No pressure — tell us what is going on with your heating or cooling
            and we will help you figure out the next step. Serving {SERVICE_AREA}.
          </p>

          <div className="mt-10">
            <Button href={PHONE_HREF} variant="primaryHero">
              Call {PHONE}
            </Button>
          </div>

          <p className="mt-6 text-base text-slate-400">
            Prefer to write first?{" "}
            <CtaTextLink href="/contact" variant="dark">
              Request a free estimate
            </CtaTextLink>
            {" · "}
            <CtaTextLink href={`mailto:${EMAIL}`} variant="dark">
              {EMAIL}
            </CtaTextLink>
          </p>
        </div>
      </div>
    </section>
  );
}
