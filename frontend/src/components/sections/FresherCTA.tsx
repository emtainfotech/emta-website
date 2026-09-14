import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function FresherCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-sky-500 py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          {/* Text */}
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-50 backdrop-blur">
                <Sparkles size={14} aria-hidden="true" />
                Grow With Us
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Job for freshers
              </h2>

              <p className="mt-6 text-base leading-8 text-blue-50 sm:text-lg">
                Embarking on a career journey and searching for jobs for
                freshers in Indore? The first step post-graduation can be
                daunting, but you won’t have to take this journey alone.
              </p>

              <p className="mt-4 text-base leading-8 text-blue-50 sm:text-lg">
                Elite Manpower and Training Academy (EMTA) can assist in
                launching your career, as we primarily work on helping new
                graduates start their careers. We are local, understand the
                job market, and work with all of the best companies in Indore
                and are able to provide a variety of jobs specifically for
                candidates with ambition.
              </p>

              <p className="mt-4 text-base leading-8 text-blue-50 sm:text-lg">
                We believe your first job is a stepping stone to a successful
                career and we exist to connect people to opportunities that
                match their skills and aspirations, so let’s get to work!
              </p>

              <Link
                to="/study-with-us"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-xl shadow-blue-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-2xl"
              >
                <GraduationCap size={18} aria-hidden="true" />
                Apply Now
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="absolute inset-6 rounded-4xl bg-white/15 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm sm:p-4">
                <div className="overflow-hidden rounded-4xl bg-white/10">
                  <img
                    src="/img/job-for-fresher.webp"
                    alt="Our services go beyond connecting candidates to a vacancy, we provide the strongest launch pad for jobs for freshers in verticals with significant growth, including IT, BPO, BFSI, and FMCG."
                    width={540}
                    height={350}
                    loading="lazy"
                    className="aspect-540/350 w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                    Start strong
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                    Your first job can be the beginning of your career.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}