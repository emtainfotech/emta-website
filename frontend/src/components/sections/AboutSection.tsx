import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

const stats = [
  {
    value: "1935+",
    label: "Students Enrolled",
    icon: GraduationCap,
  },
  {
    value: "3367+",
    label: "Successful Placements",
    icon: Handshake,
  },
  {
    value: "137+",
    label: "Connected Companies",
    icon: Building2,
  },
  {
    value: "21+",
    label: "Team Members",
    icon: Users,
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50/70 via-sky-50/40 to-white py-16 sm:py-20 lg:py-24">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid gap-12 xl:grid-cols-[1fr_0.95fr] xl:items-center xl:gap-16">
          {/* Content */}
          <ScrollReveal>
            <div>
              <span className="eyebrow">About EMTA</span>

              <h2 className="section-title mt-5 max-w-2xl">
                We Are Your Trusted Job &amp; Career Consultant
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Securing the right career opportunity in today’s competitive
                job market is simpler with an experienced partner. EMTA serves
                as a vital bridge between talent and industry, providing
                tailored placement services across Indore and pan-India.
              </p>

              {/* Highlights */}
              <div className="mt-8 space-y-4">
                <div className="group flex gap-4 rounded-3xl border border-blue-100/80 bg-white/65 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <GraduationCap size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      Freshers &amp; Experience Launchpad
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      Specialized BFSI training, soft skills enhancement, and
                      direct interview scheduling.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-4 rounded-3xl border border-sky-100/80 bg-white/65 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/20">
                    <Handshake size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      Pre-Screened Employer Talent Matching
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      Fast, reliable candidate vetting and shortlisting for
                      leading banks, IT, and retail enterprises.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                More Information
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats + Video */}
          <ScrollReveal>
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="group rounded-3xl border border-white/80 bg-white/70 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/8 sm:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={19} aria-hidden="true" />
                        </div>

                        <span className="text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl">
                          {stat.value}
                        </span>
                      </div>

                      <p className="mt-5 text-sm font-semibold leading-5 text-slate-700">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Video */}
              <div className="relative mt-8 overflow-hidden rounded-4xl border border-white/80 bg-white/55 p-2 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:mt-10 sm:p-3">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950">
                  <video
                    src="/img/video.MOV"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="mx-auto block h-auto max-h-152 w-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Minimal non-obstructing label */}
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                    EMTA
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