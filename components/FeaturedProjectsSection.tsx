import Button from "@/components/Button";
import ProjectGalleryGrid from "@/components/ProjectGalleryGrid";
import SectionHeader from "@/components/SectionHeader";
import { getFeaturedGalleryProjects } from "@/lib/content/projects-gallery";

export default function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedGalleryProjects();

  return (
    <section id="projects" className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Project Gallery"
          title="Real Work, Documented"
          description="Before-and-after photos from repairs and installations in our service area. More projects are added as jobs are completed and photographed."
        />

        <div className="mt-12">
          <ProjectGalleryGrid projects={featuredProjects} />
        </div>

        <div className="mt-12 text-center">
          <Button href="#projects" variant="primary">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
