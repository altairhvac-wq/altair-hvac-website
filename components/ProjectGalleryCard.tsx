import ProjectBeforeAfter from "@/components/ProjectBeforeAfter";
import type { GalleryProject } from "@/lib/content/projects-gallery";

type ProjectGalleryCardProps = {
  project: GalleryProject;
};

export default function ProjectGalleryCard({ project }: ProjectGalleryCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="p-3 sm:p-4">
        <ProjectBeforeAfter
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-stone-100 px-5 pb-6 pt-5 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wide text-stone-600">
          {project.category}
        </p>
        <p className="mt-1 text-sm text-stone-500">{project.city}</p>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-stone-900">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
          {project.summary}
        </p>
      </div>
    </article>
  );
}
