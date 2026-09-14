import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function OffCampusJobs() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50/70 via-white to-blue-50/50 py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                  <MapPin
                    size={15}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  Indore Opportunities
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
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
              <div
                className="absolute inset-5 rounded-[2.5rem] bg-blue-200/40 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative rounded-4xl border border-blue-100 bg-white/80 p-3 shadow-2xl shadow-blue-900/8 backdrop-blur-xl sm:p-4">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/img/off-campus-jobs.webp"
                    alt="The secret to being successful in finding quality off campus jobs lies in your access to appropriate networks, which EMTA helps you gain."
                    width={540}
                    height={350}
                    loading="lazy"
                    className="aspect-540/350 w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md">
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