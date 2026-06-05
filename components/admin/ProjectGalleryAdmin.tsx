"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectGalleryCard from "@/components/ProjectGalleryCard";
import { EstimatorField, labelClass, selectClass } from "@/components/estimator/fields";
import { galleryProjects } from "@/lib/content/projects-gallery";
import {
  EMPTY_GALLERY_PROJECT_FORM,
  GALLERY_CATEGORY_SUGGESTIONS,
  type GalleryProjectFormValues,
  formValuesToGalleryProject,
  galleryProjectToFormValues,
  generateGalleryProjectCode,
  suggestGalleryProjectId,
} from "@/lib/admin/gallery-project-code";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm transition-colors focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-900/15";

const textareaClass = `${inputClass} min-h-[7rem] resize-y`;

export default function ProjectGalleryAdmin() {
  const [values, setValues] = useState<GalleryProjectFormValues>(
    EMPTY_GALLERY_PROJECT_FORM,
  );
  const [idTouched, setIdTouched] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [loadProjectId, setLoadProjectId] = useState("");

  useEffect(() => {
    if (idTouched) return;
    const suggestedId = suggestGalleryProjectId(values);
    if (!suggestedId) return;
    setValues((current) =>
      current.id === suggestedId ? current : { ...current, id: suggestedId },
    );
  }, [values.category, values.city, values.title, idTouched]);

  const previewProject = useMemo(
    () => formValuesToGalleryProject(values),
    [values],
  );

  const generatedCode = useMemo(
    () => generateGalleryProjectCode(values),
    [values],
  );

  function updateField<K extends keyof GalleryProjectFormValues>(
    key: K,
    value: GalleryProjectFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleLoadExisting(projectId: string) {
    setLoadProjectId(projectId);
    if (!projectId) {
      setValues(EMPTY_GALLERY_PROJECT_FORM);
      setIdTouched(false);
      return;
    }

    const project = galleryProjects.find((entry) => entry.id === projectId);
    if (!project) return;

    const index = galleryProjects.findIndex((entry) => entry.id === projectId);
    setValues(
      galleryProjectToFormValues(project, index >= 0 && index < 3),
    );
    setIdTouched(true);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 2500);
    }
  }

  return (
    <div className="space-y-10">
      <div
        role="alert"
        className="rounded-2xl border border-amber-300/80 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-950"
      >
        <p className="font-semibold">Developer-only helper — not for production visitors</p>
        <p className="mt-2 text-amber-900/90">
          This page does not save projects. It generates TypeScript you paste into{" "}
          <code className="rounded bg-amber-100/80 px-1.5 py-0.5 font-mono text-xs">
            lib/content/projects-gallery.ts
          </code>
          . Do not link this route from the public site.
        </p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-stone-900">How to publish a project</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-stone-600">
          <li>
            Add before/after photos to{" "}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-800">
              public/images/projects/
            </code>{" "}
            and use paths like{" "}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-800">
              /images/projects/your-file.jpg
            </code>
            .
          </li>
          <li>Fill out the form below (or load an existing entry to edit).</li>
          <li>
            Copy the generated object into{" "}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-800">
              galleryProjects
            </code>{" "}
            in{" "}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-800">
              lib/content/projects-gallery.ts
            </code>
            .
          </li>
          <li>Commit and push so the public gallery updates on deploy.</li>
        </ol>
        <p className="mt-4 text-sm text-stone-500">
          Homepage shows the first 3 entries in{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-700">
            galleryProjects
          </code>
          . Use the featured toggle as a reminder to place featured projects near the top.
        </p>
      </section>

      <EstimatorField id="load-existing" label="Load existing entry (optional)">
        <select
          id="load-existing"
          className={selectClass}
          value={loadProjectId}
          onChange={(event) => handleLoadExisting(event.target.value)}
        >
          <option value="">New project</option>
          {galleryProjects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title} — {project.city}
            </option>
          ))}
        </select>
      </EstimatorField>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <form
          className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="text-lg font-semibold text-stone-900">Project details</h2>

          <EstimatorField id="project-title" label="Project title">
            <input
              id="project-title"
              className={inputClass}
              value={values.title}
              onChange={(event) => updateField("title", event.target.value)}
              placeholder="Furnace replacement in an older split home"
            />
          </EstimatorField>

          <div className="grid gap-5 sm:grid-cols-2">
            <EstimatorField id="project-city" label="City">
              <input
                id="project-city"
                className={inputClass}
                value={values.city}
                onChange={(event) => updateField("city", event.target.value)}
                placeholder="Layton"
              />
            </EstimatorField>

            <EstimatorField id="project-category" label="Category">
              <input
                id="project-category"
                className={inputClass}
                list="gallery-category-suggestions"
                value={values.category}
                onChange={(event) => updateField("category", event.target.value)}
                placeholder="Furnace replacement"
              />
              <datalist id="gallery-category-suggestions">
                {GALLERY_CATEGORY_SUGGESTIONS.map((category) => (
                  <option key={category} value={category} />
                ))}
              </datalist>
            </EstimatorField>
          </div>

          <EstimatorField id="project-summary" label="Short summary">
            <textarea
              id="project-summary"
              className={textareaClass}
              value={values.summary}
              onChange={(event) => updateField("summary", event.target.value)}
              placeholder="What was done and how it was verified before completion."
            />
          </EstimatorField>

          <EstimatorField id="project-id" label="Project ID (slug)">
            <input
              id="project-id"
              className={inputClass}
              value={values.id}
              onChange={(event) => {
                setIdTouched(true);
                updateField("id", event.target.value);
              }}
              placeholder="furnace-replacement-layton"
            />
            <p className="mt-1.5 text-xs text-stone-500">
              Auto-suggested from category and city until you edit it manually.
            </p>
          </EstimatorField>

          <label className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900/20"
              checked={values.featured}
              onChange={(event) => updateField("featured", event.target.checked)}
            />
            <span>
              <span className={labelClass}>Feature on homepage</span>
              <span className="mt-1 block text-xs font-normal leading-relaxed text-stone-500">
                Adds a comment in the generated code. Paste this entry within the first 3
                items in{" "}
                <code className="font-mono text-[0.7rem]">galleryProjects</code>.
              </span>
            </span>
          </label>

          <div className="border-t border-stone-100 pt-5">
            <h3 className="text-base font-semibold text-stone-900">Before image</h3>
            <div className="mt-4 space-y-5">
              <EstimatorField id="before-src" label="Image path">
                <input
                  id="before-src"
                  className={inputClass}
                  value={values.beforeImageSrc}
                  onChange={(event) =>
                    updateField("beforeImageSrc", event.target.value)
                  }
                  placeholder="/images/projects/layton-furnace-before.jpg"
                />
              </EstimatorField>
              <EstimatorField id="before-alt" label="Alt text">
                <input
                  id="before-alt"
                  className={inputClass}
                  value={values.beforeImageAlt}
                  onChange={(event) =>
                    updateField("beforeImageAlt", event.target.value)
                  }
                  placeholder="Before photo of existing furnace equipment"
                />
              </EstimatorField>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-5">
            <h3 className="text-base font-semibold text-stone-900">After image</h3>
            <div className="mt-4 space-y-5">
              <EstimatorField id="after-src" label="Image path">
                <input
                  id="after-src"
                  className={inputClass}
                  value={values.afterImageSrc}
                  onChange={(event) =>
                    updateField("afterImageSrc", event.target.value)
                  }
                  placeholder="/images/projects/layton-furnace-after.jpg"
                />
              </EstimatorField>
              <EstimatorField id="after-alt" label="Alt text">
                <input
                  id="after-alt"
                  className={inputClass}
                  value={values.afterImageAlt}
                  onChange={(event) =>
                    updateField("afterImageAlt", event.target.value)
                  }
                  placeholder="After photo of new furnace installation"
                />
              </EstimatorField>
            </div>
          </div>
        </form>

        <div className="space-y-4 lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-stone-900">Live preview</h2>
          <p className="text-sm text-stone-500">
            Uses the same card component as the public project gallery.
          </p>
          <ProjectGalleryCard project={previewProject} />
        </div>
      </div>

      <section className="rounded-2xl border border-stone-800 bg-stone-950 p-6 text-stone-100 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-stone-100">
              Generated TypeScript
            </h2>
            <p className="mt-1 text-sm text-stone-400">
              Paste into the{" "}
              <code className="rounded bg-stone-900 px-1.5 py-0.5 font-mono text-xs text-stone-300">
                galleryProjects
              </code>{" "}
              array in{" "}
              <code className="rounded bg-stone-900 px-1.5 py-0.5 font-mono text-xs text-stone-300">
                lib/content/projects-gallery.ts
              </code>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-stone-600 bg-stone-900 px-4 py-2.5 text-sm font-semibold text-stone-100 transition-colors hover:border-stone-500 hover:bg-stone-800"
          >
            {copyState === "copied"
              ? "Copied"
              : copyState === "error"
                ? "Copy failed — select manually"
                : "Copy to clipboard"}
          </button>
        </div>

        <pre className="mt-6 overflow-x-auto rounded-xl border border-stone-800 bg-stone-900/80 p-4 text-sm leading-relaxed text-stone-200">
          <code>{generatedCode}</code>
        </pre>
      </section>
    </div>
  );
}
