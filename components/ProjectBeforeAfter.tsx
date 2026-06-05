import Image from "next/image";
import type { GalleryImage } from "@/lib/content/projects-gallery";

type ProjectBeforeAfterProps = {
  beforeImage: GalleryImage;
  afterImage: GalleryImage;
};

export default function ProjectBeforeAfter({
  beforeImage,
  afterImage,
}: ProjectBeforeAfterProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      <figure className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
        <div className="relative aspect-[4/3]">
          <Image
            src={beforeImage.src}
            alt={beforeImage.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center"
          />
        </div>
        <figcaption className="border-t border-stone-200 bg-stone-50 px-3 py-2 text-center text-xs font-semibold uppercase tracking-widest text-stone-600">
          Before
        </figcaption>
      </figure>

      <figure className="overflow-hidden rounded-xl border border-stone-200 bg-stone-900">
        <div className="relative aspect-[4/3]">
          <Image
            src={afterImage.src}
            alt={afterImage.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center"
          />
        </div>
        <figcaption className="border-t border-stone-700 bg-stone-900 px-3 py-2 text-center text-xs font-semibold uppercase tracking-widest text-stone-300">
          After
        </figcaption>
      </figure>
    </div>
  );
}
