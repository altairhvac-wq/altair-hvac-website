import type { GalleryProject } from "@/lib/content/projects-gallery";

export type GalleryProjectFormValues = {
  id: string;
  title: string;
  city: string;
  category: string;
  summary: string;
  beforeImageSrc: string;
  beforeImageAlt: string;
  afterImageSrc: string;
  afterImageAlt: string;
  featured: boolean;
};

export const GALLERY_CATEGORY_SUGGESTIONS = [
  "Furnace replacement",
  "AC replacement",
  "Heat pump installation",
  "Indoor air quality",
  "Ductwork",
  "Thermostat upgrade",
  "Maintenance & tune-up",
] as const;

export const DEFAULT_PLACEHOLDER_BEFORE =
  "/images/projects/placeholders/before.svg";
export const DEFAULT_PLACEHOLDER_AFTER =
  "/images/projects/placeholders/after.svg";

export const EMPTY_GALLERY_PROJECT_FORM: GalleryProjectFormValues = {
  id: "",
  title: "",
  city: "",
  category: "",
  summary: "",
  beforeImageSrc: DEFAULT_PLACEHOLDER_BEFORE,
  beforeImageAlt: "",
  afterImageSrc: DEFAULT_PLACEHOLDER_AFTER,
  afterImageAlt: "",
  featured: false,
};

export function slugifyGalleryId(...parts: string[]): string {
  return parts
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function suggestGalleryProjectId(
  values: Pick<GalleryProjectFormValues, "category" | "city" | "title">,
): string {
  const fromCategoryCity = slugifyGalleryId(values.category, values.city);
  if (fromCategoryCity) return fromCategoryCity;
  return slugifyGalleryId(values.title, values.city);
}

export function formValuesToGalleryProject(
  values: GalleryProjectFormValues,
): GalleryProject {
  return {
    id: values.id.trim() || "new-project",
    title: values.title.trim() || "Project title",
    city: values.city.trim() || "City",
    category: values.category.trim() || "Category",
    summary:
      values.summary.trim() ||
      "Short summary of the work completed on site.",
    beforeImage: {
      src: values.beforeImageSrc.trim() || DEFAULT_PLACEHOLDER_BEFORE,
      alt: values.beforeImageAlt.trim() || "Before photo",
    },
    afterImage: {
      src: values.afterImageSrc.trim() || DEFAULT_PLACEHOLDER_AFTER,
      alt: values.afterImageAlt.trim() || "After photo",
    },
  };
}

export function galleryProjectToFormValues(
  project: GalleryProject,
  featured = false,
): GalleryProjectFormValues {
  return {
    id: project.id,
    title: project.title,
    city: project.city,
    category: project.category,
    summary: project.summary,
    beforeImageSrc: project.beforeImage.src,
    beforeImageAlt: project.beforeImage.alt,
    afterImageSrc: project.afterImage.src,
    afterImageAlt: project.afterImage.alt,
    featured,
  };
}

function escapeTsString(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

function formatTsStringField(
  key: string,
  value: string,
  indent: string,
): string {
  const escaped = escapeTsString(value);
  if (escaped.length <= 72 && !value.includes("\n")) {
    return `${indent}${key}: "${escaped}",`;
  }
  return `${indent}${key}:\n${indent}  "${escaped}",`;
}

export function generateGalleryProjectCode(
  values: GalleryProjectFormValues,
): string {
  const project = formValuesToGalleryProject(values);
  const featuredComment = values.featured
    ? "// Homepage featured — paste within the first 3 entries in galleryProjects.\n"
    : "";

  const lines = [
    `${featuredComment}{`,
    `  id: "${escapeTsString(project.id)}",`,
    formatTsStringField("title", project.title, "  "),
    formatTsStringField("city", project.city, "  "),
    formatTsStringField("category", project.category, "  "),
    formatTsStringField("summary", project.summary, "  "),
    "  beforeImage: {",
    `    src: "${escapeTsString(project.beforeImage.src)}",`,
    formatTsStringField("alt", project.beforeImage.alt, "    "),
    "  },",
    "  afterImage: {",
    `    src: "${escapeTsString(project.afterImage.src)}",`,
    formatTsStringField("alt", project.afterImage.alt, "    "),
    "  },",
    "},",
  ];

  return lines.join("\n");
}
