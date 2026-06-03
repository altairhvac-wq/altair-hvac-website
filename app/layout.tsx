import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY_NAME, EMAIL, PHONE, SERVICE_AREA } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Licensed HVAC repair, installation, and maintenance. Fast response, honest pricing, and free estimates. Serving the Greater Metro Area.";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Heating & Cooling Services`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: siteDescription,
  keywords: [
    "HVAC",
    "air conditioning repair",
    "heating repair",
    "furnace installation",
    "AC maintenance",
    SERVICE_AREA,
  ],
  openGraph: {
    title: `${COMPANY_NAME} | Heating & Cooling Services`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: COMPANY_NAME,
  description: siteDescription,
  telephone: PHONE,
  email: EMAIL,
  areaServed: SERVICE_AREA,
  url: "https://altairhvac.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white font-sans text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
