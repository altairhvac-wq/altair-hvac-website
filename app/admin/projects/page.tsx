import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectGalleryAdmin from "@/components/admin/ProjectGalleryAdmin";
import PageHero from "@/components/PageHero";
import { isLocalAdminHelpersEnabled } from "@/lib/admin/local-admin-access";

export const metadata: Metadata = {
  title: "Project Gallery Admin",
  description: "Local developer helper for drafting project gallery entries.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ProjectGalleryAdminPage() {
  if (!isLocalAdminHelpersEnabled()) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Developer Tool"
        title="Project Gallery Admin"
        description="Draft before-and-after gallery entries and copy the TypeScript object into the content file. Nothing is saved from this page."
      />

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProjectGalleryAdmin />
        </div>
      </section>
    </>
  );
}
