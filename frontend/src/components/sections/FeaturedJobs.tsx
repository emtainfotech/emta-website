import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

import JobCard from "../common/JobCard";
import ScrollReveal from "../common/ScrollReveal";
import { jobs } from "../../data/jobs";

export default function FeaturedJobs() {
  const featuredJobs = jobs.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50/90 via-white to-blue-50/80 py-16 sm:py-20 lg:py-24">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">
                <BriefcaseBusiness size={14} aria-hidden="true" />
                Featured Jobs
              </span>

              <h2 className="section-title mt-5">
                Find Your Next Career Opportunity
              </h2>

              <p className="section-description mt-5">
                Browse through our curated list of job openings from top
                companies.
              </p>
            </div>

            <Link
              to="/careers"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-blue-200 bg-white/80 px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lg md:self-auto"
            >
              View All Openings
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>

        {/* Job cards */}
        <div className="relative mt-10 rounded-4xl border border-white/70 bg-white/30 p-3 shadow-[0_20px_60px_rgba(37,99,235,0.04)] backdrop-blur-sm sm:p-4">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredJobs.map((job, index) => (
              <ScrollReveal
                key={job.id}
                className={`[transition-delay:${index * 70}ms]`}
              >
                <JobCard job={job} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700"
          >
            Explore All Jobs
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}