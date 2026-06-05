import ProjectGalleryCard from "@/components/ProjectGalleryCard";
import type { GalleryProject } from "@/lib/content/projects-gallery";

type ProjectGalleryGridProps = {
  projects: GalleryProject[];
};

export default function ProjectGalleryGrid({ projects }: ProjectGalleryGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectGalleryCard key={project.id} project={project} />
      ))}
    </div>
  );
}
