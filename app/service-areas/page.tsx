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
    "HVAC repair, installation, and maintenance in Davis County, Utah. Serving Bountiful, Layton, Kaysville, Farmington, Centerville, Clearfield, Syracuse, and Woods Cross.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Local HVAC Service"
        title="HVAC Service Areas in Davis County"
        description={`${COMPANY_NAME} provides heating and cooling service throughout ${SERVICE_AREA}. From emergency repairs to new installations, we're your local comfort experts.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Primary Coverage"
            title={`Serving ${SERVICE_AREA}`}
            description="We focus on Davis County communities where we can provide fast response times and consistent, quality service for local homeowners."
          />
          <CityCardsGrid cities={davisCountyCities} />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Local HVAC Experts"
              title="Heating & Cooling You Can Count On"
            />
            <div className="mt-8 space-y-6 leading-relaxed text-slate-600">
              <p>
                When your furnace stops working on a cold Utah night or your AC
                fails during a summer heat wave, you need a local HVAC company
                that responds quickly. {COMPANY_NAME} serves homeowners across
                Davis County with licensed technicians, honest pricing, and
                work you can trust.
              </p>
              <p>
                Our team handles everything from routine maintenance and filter
                changes to full system replacements. Whether you&apos;re in
                Bountiful, Layton, Kaysville, or any of the communities listed
                above, we&apos;re ready to help restore comfort to your home.
              </p>
              <p>
                Not sure if we serve your neighborhood?{" "}
                <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800">
                  Contact us
                </Link>{" "}
                with your address and we&apos;ll confirm coverage. You can also
                explore our{" "}
                <Link href="/services" className="font-semibold text-sky-700 hover:text-sky-800">
                  full range of HVAC services
                </Link>{" "}
                or learn about{" "}
                <Link href="/financing" className="font-semibold text-sky-700 hover:text-sky-800">
                  financing options
                </Link>{" "}
                for your next project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
