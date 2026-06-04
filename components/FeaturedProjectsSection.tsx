import CtaTextLink from "@/components/CtaTextLink";
import SectionHeader from "@/components/SectionHeader";
import { PHONE_HREF } from "@/lib/constants";
import { featuredProjects } from "@/lib/content/projects";

export default function FeaturedProjectsSection() {
  return (
    <section id="recent-work" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recent Projects"
          title="The Kind of Work We Take On"
          description="Representative examples of repairs and upgrades we handle for homeowners in our service area. We will add photos and documented jobs here as we complete them."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8"
            >
              <p className="text-sm font-semibold tabular-nums tracking-widest text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-4 flex flex-1 flex-col border-t border-slate-200 pt-6">
                <p className="text-sm font-medium uppercase tracking-wide text-stone-600">
                  {project.category}
                </p>
                <p className="mt-1 text-sm text-slate-500">{project.area}</p>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {project.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-600">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400"
                        aria-hidden
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-500">
                  {project.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-600">
          Planning something similar?{" "}
          <CtaTextLink href={PHONE_HREF}>Call to discuss your home</CtaTextLink>
          {" · "}
          <CtaTextLink href="/services">View all services</CtaTextLink>
        </p>
      </div>
    </section>
  );
}
