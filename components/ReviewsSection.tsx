import Link from "next/link";

const expectations = [
  {
    title: "A clear plan",
    description:
      "We walk you through what we found, what we suggest, and what it will cost before we proceed.",
  },
  {
    title: "Respect for your home",
    description:
      "We keep work areas tidy and leave your space clean when the visit is done.",
  },
  {
    title: "Honest guidance",
    description:
      "If a repair makes sense, we say so. If replacement is the better path, we explain why.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Your Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What to Expect When You Call
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We are a newer local company building our reputation one homeowner at
            a time. These are the standards we aim for on every visit — from the
            first call to the final walkthrough.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {expectations.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          Customer reviews and a Google Business profile link can be added here
          when the owner is ready to share them publicly.
        </p>

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
