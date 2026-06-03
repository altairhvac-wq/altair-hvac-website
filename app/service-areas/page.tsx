import type { Metadata } from "next";
import Link from "next/link";
import CityCardsGrid from "@/components/CityCardsGrid";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { davisCountyCities } from "@/lib/content/cities";
import { COMPANY_NAME, SERVICE_AREA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "HVAC service throughout Davis County, Utah — including Bountiful, Layton, Kaysville, Farmington, and nearby communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="HVAC Service Throughout Davis County"
        description={`${COMPANY_NAME} helps homeowners across ${SERVICE_AREA} with repairs, installations, maintenance, and emergency heating and cooling problems.`}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cities We Serve"
            title={`Homeowners in ${SERVICE_AREA}`}
            description="We regularly work in the communities below. If your city is not listed, contact us with your address — we may still be able to help."
          />
          <CityCardsGrid cities={davisCountyCities} />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Local Service"
              title="Heating & Cooling Close to Home"
            />
            <div className="mt-8 space-y-6 leading-relaxed text-slate-600">
              <p>
                When your furnace quits on a cold night or your AC stops on a hot
                afternoon, you want a team that knows the area and can get to you
                without a long wait. We focus on Davis County so we can serve
                nearby homeowners consistently.
              </p>
              <p>
                From routine tune-ups to full system replacements, we handle the
                work most homes need through the year. Whether you are in Bountiful,
                Layton, Kaysville, or another community listed above, the next step
                is the same: call or request an estimate and tell us what is going on.
              </p>
              <p>
                Not sure we cover your neighborhood?{" "}
                <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
                  Send us your address
                </Link>{" "}
                and we will confirm. You can also browse our{" "}
                <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
                  services
                </Link>{" "}
                or learn about{" "}
                <Link href="/financing" className="font-semibold text-sky-700 hover:text-sky-800">
                  financing
                </Link>{" "}
                for larger projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
