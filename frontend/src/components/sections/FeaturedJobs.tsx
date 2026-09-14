import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

import JobCard from "../common/JobCard";
import ScrollReveal from "../common/ScrollReveal";
import { jobs } from "../../data/jobs";

export default function FeaturedJobs() {
  const featuredJobs = jobs.slice(0, 4);

  return (
    <section className="bg-linear-to-b from-white via-blue-50/30 to-sky-50/50 py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
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
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md md:self-auto"
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredJobs.map((job, index) => (
            <ScrollReveal
              key={job.id}
              className={`[transition-delay:${index * 70}ms]`}
            >
              <JobCard job={job} />
            </ScrollReveal>
          ))}
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