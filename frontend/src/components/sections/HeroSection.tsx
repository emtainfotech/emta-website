import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

const trustPoints = [
  "Verified opportunities",
  "Career guidance",
  "BFSI-focused training",
];

export default function HeroSection() {
  return (
    <section className="homepage-hero relative isolate overflow-hidden pb-14 pt-7 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#07111f]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 8% 12%, rgba(34,211,238,.28), transparent 25%), radial-gradient(circle at 84% 8%, rgba(124,58,237,.34), transparent 26%), radial-gradient(circle at 74% 82%, rgba(251,113,133,.20), transparent 24%), linear-gradient(135deg, #07111f 0%, #0d1830 48%, #11102f 100%)",
        }}
      />
      <div className="homepage-hero__grid pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 top-40 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative">
        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.03fr_.97fr] lg:gap-14 lg:pt-12">
          <ScrollReveal>
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-200 shadow-lg shadow-cyan-950/20 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                Trusted Career &amp; Hiring Partner
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-[4.55rem]">
                Find the right opportunity.
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Build the right career.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
                Verified jobs, placement assistance and career guidance for
                freshers and experienced professionals — with EMTA supporting
                you from search to selection.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/careers"
                  className="group edge-hover inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(124,58,237,.24)]"
                >
                  <BriefcaseBusiness size={18} />
                  Explore Jobs
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/study-with-us"
                  className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/7 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/12"
                >
                  <GraduationCap size={18} />
                  Explore Training
                </Link>
              </div>

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="edge-hover flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/6 px-3.5 py-3 text-xs font-semibold text-slate-200 backdrop-blur-xl"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-cyan-300"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:flex lg:justify-end">
            <div className="relative w-full max-w-[38rem]">
              <div className="absolute -left-7 top-10 z-30 hidden rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">
                  <UsersRound size={13} />
                  3367+
                </div>
                <p className="mt-1 text-sm font-bold">Successful placements</p>
              </div>

              <div className="absolute -right-5 top-3 z-30 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-2xl backdrop-blur-2xl sm:right-0">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-200">
                  <Sparkles size={13} />
                  EMTA Network
                </div>
                <p className="mt-1 text-sm font-bold">Career &amp; Hiring Partner</p>
              </div>

              <div className="pointer-events-none absolute -inset-8 rounded-[4rem] bg-gradient-to-br from-cyan-300/15 via-violet-400/12 to-fuchsia-400/12 blur-3xl" aria-hidden="true" />

              <div className="homepage-hero__visual relative overflow-hidden rounded-[2.25rem] border border-white/14 bg-white/7 p-3 shadow-[0_30px_100px_rgba(0,0,0,.34)] backdrop-blur-2xl sm:p-4">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-cyan-100/10 via-white/6 to-violet-200/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.18),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,.18),transparent_34%)]" />

                  <div className="relative flex min-h-[25rem] items-center justify-center px-5 py-8 sm:min-h-[31rem] lg:min-h-[34rem]">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10 sm:h-[24rem] sm:w-[24rem]" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/15 sm:h-[18rem] sm:w-[18rem]" />

                    <img
                      src="/img/image-removebg-preview.png"
                      alt="EMTA career and job placement services"
                      width={518}
                      height={345}
                      fetchPriority="high"
                      className="homepage-hero__person relative z-10 h-auto w-full max-w-[31rem] object-contain drop-shadow-[0_28px_34px_rgba(0,0,0,.34)]"
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 max-w-[12rem] rounded-2xl border border-white/10 bg-slate-950/72 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      <MapPin size={13} className="text-cyan-300" /> Indore
                    </div>
                    <p className="mt-1.5 text-sm font-bold text-white">
                      Start your next chapter
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 hidden max-w-[12rem] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur-xl sm:block">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-200">
                      Trusted partner
                    </p>
                    <p className="mt-1.5 text-sm font-bold">From search to selection</p>
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
