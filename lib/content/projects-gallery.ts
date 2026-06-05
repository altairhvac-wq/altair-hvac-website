export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  city: string;
  summary: string;
  category: string;
  beforeImage: GalleryImage;
  afterImage: GalleryImage;
};

/** Swap placeholder image paths for real project photos in /public/images/projects/. */
const PLACEHOLDER_BEFORE = "/images/projects/placeholders/before.svg";
const PLACEHOLDER_AFTER = "/images/projects/placeholders/after.svg";

/** Documented jobs — add entries here as completed work is photographed. */
export const galleryProjects: GalleryProject[] = [
  {
    id: "furnace-replacement-layton",
    title: "Furnace replacement in an older split home",
    city: "Layton",
    category: "Furnace replacement",
    summary:
      "Replaced an aging furnace with a properly sized unit. Combustion, airflow, and thermostat operation were tested before completion.",
    beforeImage: {
      src: PLACEHOLDER_BEFORE,
      alt: "Before photo of existing furnace equipment — to be added",
    },
    afterImage: {
      src: PLACEHOLDER_AFTER,
      alt: "After photo of new furnace installation — to be added",
    },
  },
  {
    id: "ac-replacement-clearfield",
    title: "Central AC replacement ahead of summer",
    city: "Clearfield",
    category: "AC replacement",
    summary:
      "Matched outdoor and indoor equipment to existing ductwork. Refrigerant circuit pressure-tested and cooling verified at supply registers.",
    beforeImage: {
      src: PLACEHOLDER_BEFORE,
      alt: "Before photo of failed outdoor condenser — to be added",
    },
    afterImage: {
      src: PLACEHOLDER_AFTER,
      alt: "After photo of new AC installation — to be added",
    },
  },
  {
    id: "iaq-filtration-bountiful",
    title: "Filtration and indoor air quality upgrade",
    city: "Bountiful",
    category: "Indoor air quality",
    summary:
      "Upgraded to a higher-efficiency media filter cabinet compatible with the existing furnace. Filter change intervals and maintenance explained on site.",
    beforeImage: {
      src: PLACEHOLDER_BEFORE,
      alt: "Before photo of standard filtration setup — to be added",
    },
    afterImage: {
      src: PLACEHOLDER_AFTER,
      alt: "After photo of upgraded filtration cabinet — to be added",
    },
  },
  {
    id: "heat-pump-upgrade-kaysville",
    title: "Heat pump system upgrade",
    city: "Kaysville",
    category: "Heat pump installation",
    summary:
      "Evaluated existing ductwork and electrical before installing matched heat pump equipment sized for the home's heating and cooling load.",
    beforeImage: {
      src: PLACEHOLDER_BEFORE,
      alt: "Before photo of previous HVAC equipment — to be added",
    },
    afterImage: {
      src: PLACEHOLDER_AFTER,
      alt: "After photo of new heat pump installation — to be added",
    },
  },
];

export const FEATURED_GALLERY_COUNT = 3;

export function getFeaturedGalleryProjects(
  count = FEATURED_GALLERY_COUNT,
): GalleryProject[] {
  return galleryProjects.slice(0, count);
}
