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
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-white">{COMPANY_NAME}</p>
            <p className="mt-3 text-sm leading-relaxed">
              Heating and cooling for homeowners in {SERVICE_AREA}. Repairs,
              installations, maintenance, and written estimates.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              {LICENSING_STATEMENT}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Service Area
            </p>
            <p className="mt-4 text-sm leading-relaxed">{SERVICE_AREA}</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              {PRIMARY_CITIES.map((city) => (
                <li key={city}>{city}, Utah</li>
              ))}
            </ul>
            <p className="mt-4">
              <Link
                href="/service-areas"
                className="text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                View all service areas →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Hours &amp; Contact
            </p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-white">Phone</dt>
                <dd className="mt-1">
                  <a href={PHONE_HREF} className="hover:text-white">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-white">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${EMAIL}`} className="hover:text-white">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-white">Business hours</dt>
                <dd className="mt-1">
                  {BUSINESS_HOURS.days}
                  <br />
                  {BUSINESS_HOURS.time}
                  <br />
                  <span className="text-slate-400">Sunday — closed</span>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
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

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          <p>
            &copy; {year} {COMPANY_NAME}. {PHONE} · {EMAIL}
          </p>
        </div>
      </div>
    </footer>
  );
}
