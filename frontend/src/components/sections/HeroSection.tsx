import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-50">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[18%] top-20 h-32 w-32 rounded-full border border-sky-200/70"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid min-h-170 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:py-20 xl:min-h-180">
          {/* Left content */}
          <ScrollReveal>
            <div className="w-full max-w-130">
              <div className="eyebrow">
                <span
                  className="h-2 w-2 rounded-full bg-sky-500"
                  aria-hidden="true"
                />
                Trusted Career & Hiring Partner
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                Trusted Job Consultancy
                <span className="mt-2 block">
                  in{" "}
                  <span className="relative inline-block text-blue-600">
                    Indore
                    <span
                      className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-sky-300/80"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base font-semibold leading-7 text-slate-700 sm:text-lg">
                Trusted Career & Hiring Partner
              </p>

              <p className="mt-3 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Verified jobs, placement assistance and career guidance for
                freshers &amp; experienced professionals.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/work-with-us"
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/25"
                >
                  <BriefcaseBusiness
                    size={18}
                    aria-hidden="true"
                  />
                  Apply for Jobs
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/study-with-us"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  <GraduationCap
                    size={18}
                    aria-hidden="true"
                  />
                  Study with Us
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-slate-200/80 pt-6">
                <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <BriefcaseBusiness size={15} aria-hidden="true" />
                  </span>
                  Verified Job Opportunities
                </div>

                <div className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <GraduationCap size={15} aria-hidden="true" />
                  </span>
                  Career-Focused Training
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right visual */}
          <ScrollReveal className="lg:flex lg:justify-end">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Glow */}
              <div
                className="absolute inset-8 rounded-[3rem] bg-sky-200/50 blur-3xl"
                aria-hidden="true"
              />

              {/* Main visual container */}
              <div className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/70 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-4">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-500 to-sky-400">
                  {/* Decorative shapes */}
                  <div
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative flex min-h-97.5 items-end justify-center px-4 pt-10 sm:min-h-120 sm:px-8 lg:min-h-140">
                    <img
                      src="/img/image-removebg-preview.png"
                      alt="EMTA career and job placement services"
                      width={518}
                      height={345}
                      fetchPriority="high"
                      className="relative z-10 w-full max-w-130 object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Floating information card */}
                  <div className="absolute left-4 top-5 z-20 rounded-2xl border border-white/30 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:left-6 sm:top-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      EMTA
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      Career &amp; Hiring Partner
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-white/30 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:bottom-6 sm:right-6">
                    <p className="text-xs font-medium text-slate-500">
                      Your next opportunity
                    </p>
                    <p className="mt-1 text-sm font-bold text-blue-700">
                      starts here
                    </p>
                  </div>
                </div>
              </div>

              {/* Small floating stat */}
              <div className="absolute -bottom-4 left-3 z-30 rounded-2xl border border-sky-100 bg-white px-5 py-3 shadow-xl shadow-blue-900/10 sm:-left-5 sm:px-6 sm:py-4">
                <p className="text-xl font-bold text-blue-600">100+</p>
                <p className="text-xs font-medium text-slate-500">
                  Hiring Partners
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}