import type { Metadata } from "next";
import CityCardsGrid from "@/components/CityCardsGrid";
import CtaTextLink from "@/components/CtaTextLink";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { davisCountyCities } from "@/lib/content/cities";
import { COMPANY_NAME, SERVICE_AREA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "HVAC service in Roy, Layton, Clearfield, Bountiful, Ogden, Utah, and surrounding communities. Repairs, installations, and maintenance.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    url: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Heating & Cooling Near You"
        description={`${COMPANY_NAME} helps homeowners in ${SERVICE_AREA} and nearby communities with repairs, installations, maintenance, and urgent comfort problems.`}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cities We Serve"
            title="Primary Service Areas"
            description="We regularly work in the communities below. We also serve many surrounding neighborhoods — if your city is not listed, contact us with your address and we will let you know."
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
                without a long wait. We focus on northern Utah so we can serve
                nearby homeowners consistently — not spread ourselves too thin
                across the state.
              </p>
              <p>
                Roy, Layton, Clearfield, Bountiful, and Ogden are where we spend
                most of our time, but your home does not have to sit inside a city
                limit for us to help. Many homeowners in Syracuse, Kaysville,
                Farmington, Centerville, and other nearby towns are within reach.
                The best way to know for sure is to call or send your address.
              </p>
              <p>
                From routine tune-ups to full system replacements, we handle the
                work most homes need through the year. Whether you are in Roy,
                Ogden, or a community just outside our main list, the next step
                is the same: call or request an estimate and tell us what is going on.
              </p>
              <p>
                Not sure we cover your neighborhood?{" "}
                <CtaTextLink href="/contact">Send us your address</CtaTextLink> and
                we will confirm. You can also browse our{" "}
                <CtaTextLink href="/services">services</CtaTextLink>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
