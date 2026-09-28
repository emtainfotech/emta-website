import { ArrowRight, BriefcaseBusiness, CheckCircle2, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(56,189,248,.13),transparent_26%),radial-gradient(circle_at_90%_15%,rgba(22,119,255,.11),transparent_30%),linear-gradient(180deg,#fbfdff_0%,#f4faff_55%,#f7fbff_100%)]" />
      <div className="soft-grid pointer-events-none absolute inset-x-0 top-0 h-[80%] opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-28 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-blue-300/18 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative">
        <div className="grid items-center gap-10 pt-8 lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:pt-12">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="eyebrow"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Trusted Career & Hiring Partner</div>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[4.65rem]">
                Find the right opportunity.
                <span className="mt-2 block bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">Build the right career.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                Verified jobs, placement assistance and career guidance for freshers and experienced professionals — with EMTA supporting you from search to selection.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/careers" className="btn-primary group">
                  <BriefcaseBusiness size={18} /> Explore Jobs
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </Link>
                <Link to="/study-with-us" className="btn-secondary">
                  <GraduationCap size={18} /> Explore Training
                </Link>
              </div>

              <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
                {['Verified opportunities','Career guidance','BFSI-focused training'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/65 px-3.5 py-3 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-xl">
                    <CheckCircle2 size={15} className="shrink-0 text-blue-600" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:flex lg:justify-end">
            <div className="relative w-full max-w-[37rem]">
              <div className="pointer-events-none absolute -inset-10 rounded-[4rem] bg-gradient-to-br from-sky-300/25 via-white/10 to-blue-400/20 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/68 p-3 shadow-[0_28px_80px_rgba(22,76,128,.14)] backdrop-blur-2xl sm:p-4">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-blue-100/70 bg-gradient-to-br from-sky-100/85 via-white to-blue-100/80">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.95),transparent_26%),radial-gradient(circle_at_80%_75%,rgba(56,189,248,.22),transparent_35%)]" />
                  <div className="relative flex min-h-[25rem] items-center justify-center px-5 py-8 sm:min-h-[31rem] lg:min-h-[34rem]">
                    <img src="/img/image-removebg-preview.png" alt="EMTA career and job placement services" width={518} height={345} fetchPriority="high" className="relative z-10 h-auto w-full max-w-[31rem] object-contain drop-shadow-[0_28px_34px_rgba(15,23,42,.18)]" />
                  </div>

                  <div className="absolute left-4 top-4 z-20 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-lg backdrop-blur-xl sm:left-5 sm:top-5">
                    <div className="flex items-center gap-2"><Sparkles size={14} className="text-blue-600" /><span className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">EMTA</span></div>
                    <p className="mt-1.5 text-sm font-bold text-slate-950">Career & Hiring Partner</p>
                  </div>

                  <div className="absolute bottom-4 right-4 z-20 max-w-[11rem] rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-lg backdrop-blur-xl sm:bottom-5 sm:right-5">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em] text-slate-400"><MapPin size={13} className="text-sky-500" /> Indore</div>
                    <p className="mt-1.5 text-sm font-bold text-blue-700">Start your next chapter</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-4 z-30 rounded-2xl border border-white/90 bg-slate-950 px-5 py-4 text-white shadow-xl shadow-slate-900/15 sm:-left-5">
                <p className="text-2xl font-black tracking-tight">3367+</p>
                <p className="mt-0.5 text-xs font-medium text-slate-300">Successful placements</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
