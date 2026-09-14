import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  UserRound,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";

const posts = {
  "how-to-crack-an-interview-complete-guide-for-freshers": {
    title: "How to Crack an Interview: Complete Guide for Freshers",
    author: "EMTA Admin",
    date: "18 Jun 2026",
    category: "Career",
    image:
      "/img/Blog/how-to-crack-an-interview-complete-guide-for-freshers.png",
    excerpt:
      "Getting your first job can be both exciting and challenging. Good preparation helps you perform well. Follow these guidelines to stand out from other candidates.",
  },

  "crm-in-the-bfsi-sector": {
    title: "Customer Relationship Management (CRM) in BFSI",
    author: "EMTA Admin",
    date: "15 Nov 2025",
    category: "Education",
    image: "/img/Blog/crm-in-the-bfsi-sector.png",
    excerpt:
      "Discover why the BFSI sector treats customer experience like gold and how Customer Relationship Management (CRM) tools play a key role in building banking trust.",
  },

  "bfsi-jobs-gateway-to-stable-careers": {
    title: "BFSI Jobs: A Gateway to Stable and Rewarding Careers",
    author: "Sneha Yadav",
    date: "11 Oct 2025",
    category: "Education",
    image: "/img/Blog/bfsi-jobs-gateway-to-stable-careers.png",
    excerpt:
      "With the fast-growing economy, BFSI careers offer promising stability. Learn about the entry requirements, job opportunities, and how to get started in banking.",
  },
} as const;

type BlogSlug = keyof typeof posts;

export default function BlogPost() {
  const { slug } = useParams();

  const post =
    slug && slug in posts ? posts[slug as BlogSlug] : undefined;

  if (!post) {
    return (
      <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-slate-950">
            Article not found
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            The requested article could not be found.
          </p>

          <Link
            to="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | EMTA`}
        description={post.excerpt}
        canonical={`https://emta.co.in/blog/${slug}`}
      />
      <main className="overflow-hidden">
      {/* Header */}
      <section className="border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="section-shell py-12 sm:py-16 lg:py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
              {post.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <UserRound size={16} className="text-blue-600" />
                {post.author}
              </span>

              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} className="text-blue-600" />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="max-h-130 w-full object-cover"
            />

            <article className="p-6 sm:p-10 lg:p-12">
              <p className="text-lg leading-8 text-slate-600">
                {post.excerpt}
              </p>

              <div className="my-10 h-px bg-slate-200" />

              <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Article content
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The original EMTA project contains the article listing and
                  introduction for this resource. The complete article body
                  has not yet been migrated into the React application.
                </p>
              </div>
            </article>
          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              <ArrowLeft size={16} />
              All articles
            </Link>

            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore jobs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}