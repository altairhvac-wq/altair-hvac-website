const reviews = [
  {
    name: "Sarah M.",
    location: "Bountiful, UT",
    rating: 5,
    text: "Our AC went out on the hottest day of summer. They had a technician at our door within two hours. Professional, friendly, and fair pricing.",
  },
  {
    name: "James T.",
    location: "Layton, UT",
    rating: 5,
    text: "They installed a new furnace last winter and walked us through every option. The crew was clean, on time, and the system runs perfectly.",
  },
  {
    name: "Linda K.",
    location: "Kaysville, UT",
    rating: 5,
    text: "We've used them for maintenance plans for three years. Always reliable, always honest. Highly recommend to anyone in the area.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Customer Reviews
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by Homeowners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            See what our customers say about their experience with our team.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <StarRating count={review.rating} />
              <p className="mt-4 flex-1 leading-relaxed text-slate-700">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-slate-200 pt-4">
                <cite className="not-italic">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
