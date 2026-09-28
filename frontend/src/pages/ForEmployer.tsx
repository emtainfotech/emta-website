import { ArrowRight, CheckCircle2, ClipboardCheck, Search, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Search, title: "Recruitment solutions", text: "Get support in identifying and connecting with candidates for your hiring requirements." },
  { icon: Users, title: "Talent sourcing", text: "Access a wider candidate pool across different roles and experience levels." },
  { icon: ClipboardCheck, title: "Candidate screening", text: "Streamline your hiring process with candidate identification and initial screening support." },
  { icon: CheckCircle2, title: "Hiring support", text: "Work with the EMTA team throughout the recruitment process for relevant openings." },
];

const benefits = [
  "Candidate sourcing and recruitment assistance",
  "Support for multiple hiring requirements",
  "Access to trained and job-seeking candidates",
  "Structured coordination throughout the hiring process",
];

export default function ForEmployer() {
  return (
    <main className="overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#071923] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(16,185,129,0.24),transparent_30%),radial-gradient(circle_at_84%_15%,rgba(45,212,191,0.16),transparent_28%),linear-gradient(125deg,#071923,#092b2c_48%,#101827)]" />
        <div className="absolute right-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full border border-emerald-200/10 bg-emerald-200/5 blur-3xl" />
        <div className="section-shell relative grid min-h-[75vh] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur"><Sparkles size={14} /> For employers</div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">Build the team behind your <span className="bg-linear-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">next growth phase.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Get recruitment assistance from EMTA to connect your business with relevant candidates and simplify the hiring journey.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/hire-with-us" className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-200">Hire with us <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold transition hover:border-emerald-200/40 hover:bg-white/10">Talk to EMTA</Link></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-7 rounded-[2rem] bg-linear-to-br from-emerald-300/15 via-teal-300/10 to-cyan-300/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl"><img src="/img/for-employers.webp" alt="For employers" className="h-[25rem] w-full rounded-[1.7rem] object-cover sm:h-[30rem]" /><div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur"><p className="text-xs font-bold uppercase tracking-[0.17em] text-emerald-300">Recruitment support</p><p className="mt-2 text-lg font-semibold">From sourcing to coordination, keep the hiring process moving.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Recruitment support</p><h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">A hiring system that feels less like a funnel and more like a partnership.</h2><p className="mt-5 text-base leading-8 text-slate-600">Explore how EMTA supports businesses looking for suitable candidates and recruitment assistance.</p></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">{services.map(({ icon: Icon, title, text }, index) => <div key={title} className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(16,185,129,0.12)]"><div className={`absolute -right-14 -top-14 h-32 w-32 rounded-full blur-2xl ${index % 2 ? "bg-cyan-100" : "bg-emerald-100"} transition group-hover:scale-150`} /><div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-100 to-cyan-100 text-emerald-700"><Icon size={21} /></div><h3 className="relative mt-5 text-xl font-bold">{title}</h3><p className="relative mt-3 text-sm leading-7 text-slate-500">{text}</p><div className="relative mt-6 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">Explore support <ArrowRight size={13} className="ml-1 inline" /></div></div>)}</div>
      </section>

      <section className="bg-[#0d171c] py-20 text-white sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Why work with EMTA</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Make your hiring process more focused.</h2><p className="mt-5 text-sm leading-7 text-slate-400">Partner with EMTA for recruitment assistance and candidate sourcing aligned with your hiring requirements.</p><Link to="/hire-with-us" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-100">Start hiring <ArrowRight size={17} /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2">{benefits.map((benefit, index) => <div key={benefit} className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/8"><div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-300/10 blur-2xl transition group-hover:scale-150" /><div className="relative flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">0{index + 1}</div><p className="flex items-center text-sm font-semibold leading-6 text-slate-200">{benefit}</p></div></div>)}</div>
        </div>
      </section>

      <section className="bg-linear-to-r from-emerald-100 via-cyan-100 to-sky-100 py-14 sm:py-16"><div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">Looking to hire?</p><h2 className="mt-2 text-3xl font-black tracking-tight">Tell us about your hiring requirement.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700/75">Connect with EMTA to discuss recruitment requirements and available hiring support.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1">Contact EMTA <ArrowRight size={17} /></Link></div></section>
    </main>
  );
}
