import Link from "next/link";
import {
  BUSINESS_HOURS,
  COMPANY_NAME,
  EMAIL,
  LICENSING_STATEMENT,
  PHONE,
  PHONE_HREF,
  PRIMARY_CITIES,
  SERVICE_AREA,
} from "@/lib/constants";
import { footerNavLinks } from "@/lib/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-400 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-semibold text-stone-100">
              {COMPANY_NAME}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Heating and cooling for homeowners in {SERVICE_AREA}. Repairs,
              installations, maintenance, and written estimates.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-stone-500">
              {LICENSING_STATEMENT}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-300">
              Service Area
            </p>
            <p className="mt-4 text-sm leading-relaxed">{SERVICE_AREA}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-stone-500">
              {PRIMARY_CITIES.map((city) => (
                <li key={city}>{city}, Utah</li>
              ))}
            </ul>
            <p className="mt-5">
              <Link
                href="/service-areas"
                className="text-sm font-medium text-stone-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                View all service areas →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-300">
              Hours &amp; Contact
            </p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-stone-200">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={PHONE_HREF}
                    className="transition-colors hover:text-white"
                  >
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-stone-200">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="transition-colors hover:text-white"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-stone-200">Business hours</dt>
                <dd className="mt-1">
                  {BUSINESS_HOURS.days}
                  <br />
                  {BUSINESS_HOURS.time}
                  <br />
                  <span className="text-stone-500">Sunday — closed</span>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-300">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800 pt-7 text-center text-xs text-stone-600">
          <p>
            &copy; {year} {COMPANY_NAME}. {EMAIL}
          </p>
        </div>
      </div>
    </footer>
  );
}
