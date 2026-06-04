import Link from "next/link";
import { reviews, serviceProcessSteps } from "@/lib/content/reviews";

export default function ReviewsSection() {
  const hasReviews = reviews.length > 0;

  return (
    <section
      id={hasReviews ? "reviews" : "how-we-work"}
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            {hasReviews ? "Customer Reviews" : "How We Work"}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {hasReviews ? "What Homeowners Say" : "Our Process, Step by Step"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {hasReviews
              ? "Verified feedback from homeowners we have served in the area."
              : "We are a newer local company building our reputation through consistent work. Here is how we handle your project from the first call through completion."}
          </p>
        </div>

        {hasReviews ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={`${review.author}-${review.text.slice(0, 24)}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <blockquote className="leading-relaxed text-slate-600">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{review.author}</p>
                  {review.source && (
                    <p className="mt-1 text-sm text-slate-500">{review.source}</p>
                  )}
                </footer>
              </article>
            ))}
          </div>
        ) : (
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {serviceProcessSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <p className="text-sm font-semibold tabular-nums tracking-widest text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}

        <p className="mt-8 text-center">
          <Link
            href="/about"
            className="font-semibold text-sky-700 hover:text-sky-800"
          >
            Learn more about our team →
          </Link>
        </p>
      </div>
    </section>
  );
}
