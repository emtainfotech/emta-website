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
          {/* Right visual */}
<ScrollReveal className="lg:flex lg:justify-end">
  <div className="relative mx-auto w-full max-w-xl">

    {/* Ambient glow */}
    <div
      className="pointer-events-none absolute -inset-8 rounded-[4rem] bg-sky-200/35 blur-3xl"
      aria-hidden="true"
    />

    {/* Main visual card */}
    <div className="relative rounded-4xl border border-white/80 bg-white/65 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-4">

      {/* Visual stage */}
      <div className="relative overflow-hidden rounded-[1.6rem] bg-linear-to-br from-sky-100 via-blue-50 to-white">

        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-blue-200/50"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl"
          aria-hidden="true"
        />

        {/* Main person / illustration */}
        <div className="relative flex min-h-105 items-center justify-center px-5 py-8 sm:min-h-125 sm:px-8 sm:py-10 lg:min-h-140">
          <img
            src="/img/image-removebg-preview.png"
            alt="EMTA career and job placement services"
            width={518}
            height={345}
            fetchPriority="high"
            className="relative z-10 h-auto w-full max-w-130 object-contain drop-shadow-[0_25px_30px_rgba(15,23,42,0.16)]"
          />
        </div>

        {/* Top floating card */}
        <div className="absolute left-4 top-4 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              EMTA
            </span>
          </div>

          <p className="mt-1.5 text-sm font-bold text-slate-900">
            Career &amp; Hiring Partner
          </p>
        </div>

        {/* Bottom floating card */}
        <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:right-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
            Opportunities
          </p>

          <p className="mt-1 text-sm font-bold text-blue-700">
            Start your next chapter
          </p>
        </div>
      </div>
    </div>

    {/* Floating metric */}
    <div className="absolute -bottom-5 left-3 z-30 rounded-2xl border border-white/80 bg-white px-5 py-4 shadow-xl shadow-blue-900/10 sm:-left-6">
      <p className="text-2xl font-bold tracking-tight text-blue-600">
        100+
      </p>

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