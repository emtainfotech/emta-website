import { ArrowRight, CalendarDays, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

const posts = [
  {
    title: "How to Crack an Interview: Complete Guide for Freshers",
    author: "EMTA Admin",
    date: "18 Jun 2026",
    image: "/img/Blog/how-to-crack-an-interview-complete-guide-for-freshers.png",
    href: "/blog/how-to-crack-an-interview-complete-guide-for-freshers",
  },
  {
    title: "Customer Relationship Management (CRM) in BFSI",
    author: "EMTA Admin",
    date: "15 Nov 2025",
    image: "/img/Blog/crm-in-the-bfsi-sector.png",
    href: "/blog/crm-in-the-bfsi-sector",
  },
  {
    title: "BFSI Jobs: A Gateway to Stable and Rewarding Careers",
    author: "Sneha Yadav",
    date: "11 Oct 2025",
    image: "/img/Blog/bfsi-jobs-gateway-to-stable-careers.png",
    href: "/blog/bfsi-jobs-gateway-to-stable-careers",
  },
];

const topics = [
  "Interview preparation",
  "BFSI careers",
  "Resume guidance",
  "Jobs for freshers",
];

export default function Blog() {
  return (
    <>
          <SEO
            title="Career Blog | Interview, BFSI & Job Guidance | EMTA"
            description="Read EMTA career resources covering interview preparation, BFSI careers and professional development."
            canonical="https://emta.co.in/blog"
          />
        <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">EMTA BLOG</span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Career insights for your{" "}
            <span className="text-blue-600">next step</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore career guidance, interview preparation, BFSI insights and
            practical resources for job seekers.
          </p>
        </div>
      </section>

      {/* Featured posts */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">LATEST ARTICLES</span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Career resources & insights
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Read practical content covering interviews, BFSI careers and
              professional development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-medium text-sky-800"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
            >
              <Link to={post.href} className="block">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {post.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <UserRound size={14} />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-slate-950">
                    {post.title}
                  </h3>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Read article
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Resource CTA */}
      <section className="bg-slate-50">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="rounded-4xl bg-slate-950 p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                LOOKING FOR MORE?
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Turn career knowledge into action.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Explore current openings, training programs and placement
                support alongside our career resources.
              </p>
            </div>

            <div className="mt-6 flex shrink-0 flex-wrap gap-3 lg:mt-0">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Browse jobs
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/bfsi-training"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Explore training
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
        </main>
    </>
  );
}