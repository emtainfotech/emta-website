import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Play,
  Users,
} from "lucide-react";
import { useState } from "react";
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
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Soft background shapes */}
      <div
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="grid gap-12 xl:grid-cols-[1fr_0.95fr] xl:items-center xl:gap-16">
          {/* Content */}
          <ScrollReveal>
            <div>
              <span className="eyebrow">About Us</span>

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
              <div className="mt-8 space-y-5">
                <div className="flex gap-4 rounded-2xl border border-blue-100 bg-sky-50/70 p-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/15">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Freshers &amp; Experience Launchpad
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      Specialized BFSI training, soft skills enhancement, and
                      direct interview scheduling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-sky-100 bg-blue-50/60 p-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg shadow-sky-500/15">
                    <Handshake size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
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
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                More Information
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats + Video */}
          <ScrollReveal>
            <div className="space-y-5">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="group rounded-2xl border border-blue-100 bg-linear-to-br from-white to-sky-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/8 sm:p-6"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <Icon size={19} aria-hidden="true" />
                        </div>

                        <span className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
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
              <div className="group relative overflow-hidden rounded-4xl border border-blue-100 bg-slate-100 shadow-xl shadow-blue-900/8">
                {!videoStarted ? (
                  <button
                    type="button"
                    onClick={() => setVideoStarted(true)}
                    className="relative flex min-h-70 w-full items-center justify-center overflow-hidden sm:min-h-90"
                    aria-label="Play EMTA career video"
                  >
                    <img
                      src="/img/about-1.png"
                      alt="EMTA career and job consultancy"
                      width={800}
                      height={520}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div
                      className="absolute inset-0 bg-slate-950/35"
                      aria-hidden="true"
                    />

                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 shadow-2xl transition duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                      <Play
                        size={25}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                ) : (
                  <video
                    src="/img/video.MOV"
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="rounded-2xl border border-white/25 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:px-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                      EMTA
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Your trusted job &amp; career consultant
                    </p>
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