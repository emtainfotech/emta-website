import { ArrowRight, CalendarDays, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

const blogs = [
  {
    category: "Career",
    title: "How to Crack an Interview: Complete Guide for Freshers",
    description:
      "Getting your first job can be both exciting and challenging. Good preparation helps you perform well. Follow these guidelines to stand out from other candidates...",
    author: "EMTA Admin",
    date: "18 Jun 2026",
    image:
      "/img/Blog/how-to-crack-an-interview-complete-guide-for-freshers.png",
    href: "/how-to-crack-an-interview-complete-guide-for-freshers",
  },
  {
    category: "Education",
    title: "Customer Relationship Management (CRM) in BFSI",
    description:
      "Discover why the BFSI sector treats customer experience like gold and how Customer Relationship Management (CRM) tools play a key role in building banking trust...",
    author: "EMTA Admin",
    date: "15 Nov 2025",
    image: "/img/Blog/crm-in-the-bfsi-sector.png",
    href: "/crm-in-the-bfsi-sector",
  },
  {
    category: "Education",
    title: "BFSI Jobs: A Gateway to Stable and Rewarding Careers",
    description:
      "With the fast-growing economy, BFSI careers offer promising stability. Learn about the entry requirements, job opportunities, and how to get started in banking...",
    author: "Sneha Yadav",
    date: "11 Oct 2025",
    image: "/img/Blog/bfsi-jobs-gateway-to-stable-careers.png",
    href: "/bfsi-jobs-gateway-to-stable-careers",
  },
];

export default function RecentBlogs() {
  return (
    <section className="bg-sky-50/60 py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Recent Blogs</span>

            <h2 className="section-title mt-5">
              Latest Insights &amp; Career Guidance
            </h2>

            <p className="section-description mx-auto mt-5">
              Stay updated with the latest trends in the job market, interview
              preparation tips, and professional career advice from industry
              experts.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <ScrollReveal key={blog.href}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/8">
                <Link
                  to={blog.href}
                  className="relative block aspect-16/10 overflow-hidden"
                  aria-label={blog.title}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-md backdrop-blur">
                    {blog.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <UserRound
                        size={14}
                        className="text-blue-600"
                        aria-hidden="true"
                      />
                      {blog.author}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays
                        size={14}
                        className="text-blue-600"
                        aria-hidden="true"
                      />
                      {blog.date}
                    </span>
                  </div>

                  <Link to={blog.href}>
                    <h3 className="mt-4 text-xl font-bold leading-7 tracking-tight text-slate-950 transition-colors group-hover:text-blue-700">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {blog.description}
                  </p>

                  <Link
                    to={blog.href}
                    aria-label={`Read more about ${blog.title}`}
                    className="group/link mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-blue-600"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              View All Blog Posts
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}