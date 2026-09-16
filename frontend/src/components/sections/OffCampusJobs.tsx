import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function OffCampusJobs() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-blue-50/50 to-sky-50/80 py-16 sm:py-20 lg:py-24">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="eyebrow">
                <BriefcaseBusiness size={14} aria-hidden="true" />
                Explore Opportunities
              </span>

              <h2 className="section-title mt-5">
                Off Campus Jobs
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Searching for quality off campus jobs in Indore after missing
                out on placements? There is no need to panic, as some of the
                best opportunities exist beyond the boundaries of campus
                placements.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Elite Manpower and Training Academy (EMTA) facilitates
                graduates in making valuable connections with respectable
                companies year round, tapping into campus candidates developing
                connections with management, in a fraction of the time, so you
                can avoid the on campus rush.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Career paths are not all defined; EMTA strives to facilitate
                finding entry level positions that mirror your unique potential
                and prepare you for your professional life.
              </p>

              {/* Highlights */}
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
                  <MapPin
                    size={15}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  Indore Opportunities
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
                  <BriefcaseBusiness
                    size={15}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  Entry-Level Roles
                </span>
              </div>

              <Link
                to="/study-with-us"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
              >
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
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-4 rounded-[3rem] bg-blue-200/30 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative rounded-4xl border border-white/80 bg-white/65 p-3 shadow-[0_25px_70px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:p-4">
                {/* Image stage */}
                <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-sky-100/70 via-white to-blue-100/70">
                  <img
                    src="/img/off-campus-jobs.webp"
                    alt="EMTA helps candidates access opportunities beyond campus placements."
                    width={540}
                    height={350}
                    loading="lazy"
                    className="mx-auto block h-auto max-h-105 w-full object-contain px-3 py-4 transition duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>

                {/* Information panel BELOW image */}
                <div className="mt-4 rounded-2xl border border-blue-100/80 bg-white/90 p-5 shadow-sm backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <BriefcaseBusiness
                        size={18}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                        Career Access
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                        Opportunities beyond campus placements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}