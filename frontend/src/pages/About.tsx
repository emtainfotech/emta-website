import {
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Play,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

const stats = [
  { value: "1935+", label: "Students Enrolled", icon: GraduationCap },
  { value: "3367+", label: "Successful Placements", icon: Award },
  { value: "137+", label: "Connected Companies", icon: Users },
  { value: "21+", label: "Team Members", icon: Users },
];

const highlights = [
  "BFSI training",
  "Job placement assistance",
  "Career guidance",
  "Industry-oriented programs",
];

const principles = [
  { number: "01", title: "Learn", text: "Build practical knowledge that connects training with real career opportunities." },
  { number: "02", title: "Prepare", text: "Strengthen profiles, interview readiness and professional confidence." },
  { number: "03", title: "Grow", text: "Connect candidates and employers through relevant opportunities and support." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About EMTA | Job Consultancy & BFSI Training in Indore"
        description="Learn about Elite Manpower & Training Academy, our career guidance, BFSI training and placement support services."
        canonical="https://emta.co.in/about"
      />
      <main className="overflow-hidden bg-[#07111f] text-white">
        <section className="relative isolate min-h-[76vh] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(168,85,247,0.22),transparent_30%),linear-gradient(135deg,#07111f_0%,#10172d_48%,#171125_100%)]" />
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full border border-cyan-300/10 bg-cyan-300/5 blur-2xl" />
          <div className="absolute right-[-10rem] top-[-5rem] h-[30rem] w-[30rem] rounded-full border border-fuchsia-300/10 bg-fuchsia-300/5 blur-3xl" />
          <div className="section-shell relative grid min-h-[76vh] items-center gap-12 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
                <Sparkles size={14} /> About EMTA
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Careers are built at the intersection of <span className="bg-linear-to-r from-cyan-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">learning, people and opportunity.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Elite Manpower & Training Academy combines career guidance, training and placement support to help candidates move from preparation to opportunity while helping employers find relevant talent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/careers" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(56,189,248,0.22)]">
                  Explore opportunities <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/bfsi-training" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                  Explore training
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-r from-cyan-400/20 via-violet-400/15 to-fuchsia-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <img src="/img/about-1.png" alt="About EMTA" className="h-[25rem] w-full rounded-[1.65rem] object-cover sm:h-[30rem]" loading="lazy" />
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur"><p className="text-2xl font-bold">137+</p><p className="mt-1 text-xs text-slate-400">Connected companies</p></div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur"><p className="text-2xl font-bold">3367+</p><p className="mt-1 text-xs text-slate-400">Successful placements</p></div>
                  <div className="hidden rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur sm:block"><p className="text-2xl font-bold">21+</p><p className="mt-1 text-xs text-slate-400">Team members</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-20 text-slate-950 sm:py-24">
          <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#07111f] to-transparent" />
          <div className="section-shell relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">Who we are</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">A career partner, not just another job listing.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                EMTA focuses on helping candidates build practical skills, present themselves better and discover relevant opportunities. On the employer side, we support candidate sourcing and recruitment coordination.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-cyan-100 to-violet-100 text-violet-700"><CheckCircle2 size={17} /></span>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {principles.map((item) => (
                <div key={item.number} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br from-cyan-100 via-violet-100 to-fuchsia-100 blur-2xl transition group-hover:scale-125" />
                  <div className="relative flex gap-5">
                    <div className="text-sm font-black tracking-[0.2em] text-violet-500">{item.number}</div>
                    <div><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 text-slate-950 sm:py-20">
          <div className="section-shell">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">EMTA at a glance</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Scale, experience and a growing network.</h2></div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ value, label, icon: Icon }, index) => (
                <div key={label} className={`group relative overflow-hidden rounded-[1.7rem] border p-6 transition hover:-translate-y-2 ${index % 2 === 0 ? "border-cyan-100 bg-white" : "border-violet-100 bg-linear-to-br from-white to-violet-50/70"}`}>
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/25 blur-2xl transition group-hover:scale-150" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-100 to-violet-100 text-violet-700"><Icon size={20} /></div>
                  <p className="relative mt-7 text-4xl font-black tracking-tight">{value}</p>
                  <p className="relative mt-2 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b1220] py-16 sm:py-20">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-r from-slate-950 via-indigo-950 to-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.17),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.15),transparent_30%)]" />
              <div className="relative grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cyan-200"><Play size={13} fill="currentColor" /> Our approach</div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Learn. Prepare. Grow.</h2>
                  <p className="mt-5 text-sm leading-7 text-slate-400">Training, career guidance and placement support come together in one journey designed around the candidate and the opportunity.</p>
                  <div className="mt-8 space-y-3">
                    {["Industry-focused learning", "Career-oriented preparation", "Placement assistance"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-200"><CheckCircle2 size={17} className="text-cyan-300" />{item}</div>)}
                  </div>
                </div>
                <div className="relative min-h-[20rem] bg-black/30">
                  <video controls preload="metadata" className="h-full min-h-[20rem] w-full object-cover"><source src="/img/video.MOV" type="video/quicktime" />Your browser does not support video playback.</video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-300 py-14 text-slate-950 sm:py-16">
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">Start your journey</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Looking for your next opportunity?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-800/75">Explore current openings, training programs and career opportunities with EMTA.</p></div>
            <div className="flex flex-wrap gap-3">
              <Link to="/careers" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl">View jobs <ArrowRight size={16} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/55 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white">Contact EMTA</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
