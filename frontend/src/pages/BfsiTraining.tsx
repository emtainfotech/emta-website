import { ArrowDownRight, ArrowRight, BadgeCheck, Clock3, GraduationCap, IndianRupee, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { getCourses, type CourseView } from "../services/api";

const accents = [
  "from-amber-300/70 via-orange-400/50 to-rose-500/50",
  "from-cyan-300/70 via-sky-500/50 to-indigo-500/50",
  "from-emerald-300/70 via-teal-400/50 to-cyan-500/50",
  "from-violet-300/70 via-fuchsia-400/50 to-rose-500/50",
];

export default function BfsiTraining() {
  const [courses, setCourses] = useState<CourseView[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    getCourses()
      .then((response) => {
        if (mounted) setCourses(response.data);
      })
      .catch((reason) => {
        if (mounted) setError(reason instanceof Error ? reason.message : "Unable to load courses");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <SEO
        title="BFSI Training Programs | Banking & Finance Courses | EMTA"
        description="Explore EMTA BFSI training programs covering sales, relationship management, credit and BFSI operations."
        canonical="https://emta.co.in/bfsi-training"
      />

      <main className="overflow-hidden bg-[#fbfaf8] text-slate-950">
        <section className="relative isolate overflow-hidden bg-[#0f172a] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(251,191,36,.30),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(34,211,238,.24),transparent_25%),radial-gradient(circle_at_55%_96%,rgba(168,85,247,.22),transparent_30%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="section-shell relative py-16 sm:py-20 lg:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-cyan-200 backdrop-blur-xl">
                  <Sparkles size={14} /> BFSI Career Lab
                </div>
                <h1 className="mt-6 text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-7xl">
                  Turn training into a
                  <span className="block bg-linear-to-r from-amber-200 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                    career advantage.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  Practical BFSI programs built around industry language, role-ready skills and interview preparation — so you can move from learning to hiring conversations with confidence.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="#programs"
                    className="edge-hover inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_50px_rgba(255,255,255,.12)] transition hover:-translate-y-1"
                  >
                    Explore programs <ArrowRight size={17} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12"
                  >
                    Talk to EMTA <ArrowDownRight size={17} />
                  </Link>
                </div>

                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {[
                    ["Role-focused", "Training built around actual job functions"],
                    ["Interview-ready", "Practice for the hiring conversation"],
                    ["Career-linked", "Programs mapped to next-step opportunities"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/7 p-4 backdrop-blur-xl">
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto h-[330px] w-full max-w-[430px] sm:h-[420px]">
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />

                <div className="float-slow absolute left-0 top-6 w-48 rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-2xl">
                  <TrendingUp className="text-emerald-300" size={22} />
                  <p className="mt-5 text-3xl font-black">4</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">Career-oriented training pathways</p>
                </div>

                <div className="float-slower absolute right-0 top-20 w-48 rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-2xl shadow-2xl">
                  <BadgeCheck className="text-amber-300" size={22} />
                  <p className="mt-5 text-sm font-bold">Industry aligned</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">Structured around practical BFSI skills.</p>
                </div>

                <div className="absolute bottom-7 left-1/2 w-[82%] -translate-x-1/2 rounded-3xl border border-white/10 bg-slate-950/75 p-5 backdrop-blur-2xl shadow-2xl">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-cyan-300">EMTA learning stack</p>
                      <p className="mt-2 text-lg font-bold">Sales → Credit → Operations</p>
                    </div>
                    <div className="rounded-2xl bg-white/8 px-3 py-2 text-right">
                      <p className="text-[10px] uppercase tracking-[.16em] text-slate-500">Built for</p>
                      <p className="mt-1 text-sm font-bold text-white">BFSI careers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="section-shell scroll-mt-28 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">PROGRAMS</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                Pick a path that matches the role you want next.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                Compare duration, salary potential and focus areas, then open the full program page for the detailed curriculum and enquiry form.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-500 shadow-sm">
              Live catalog from EMTA backend
            </div>
          </div>

          {loading ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-[330px] animate-pulse rounded-[30px] bg-slate-200/75" />
              ))}
            </div>
          ) : error ? (
            <div className="mt-10 rounded-3xl border border-rose-200 bg-rose-50 p-8 text-sm text-rose-700">{error}</div>
          ) : courses.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">No active training programs found.</p>
              <p className="mt-2 text-sm text-slate-500">The catalog is currently empty.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {courses.map((course, index) => (
                <Link key={course.id} to={`/course/${course.id}`} className="group block">
                  <article className="edge-hover premium-card relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]">
                    <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${accents[index % accents.length]}`} />
                    <div className="grid min-h-[330px] sm:grid-cols-[210px_1fr]">
                      <div className="relative overflow-hidden bg-slate-950">
                        <img
                          src={course.image || "/img/services/BFSI TRAING.jpg"}
                          alt={course.title}
                          className="h-full min-h-60 w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur-md">
                          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/60">Program {String(index + 1).padStart(2, "0")}</p>
                          <p className="mt-1 text-sm font-bold text-white">Career-focused track</p>
                        </div>
                      </div>

                      <div className="flex flex-col p-6 sm:p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">BFSI PROGRAM</p>
                            <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-.03em] text-slate-950 group-hover:text-indigo-700 transition-colors">
                              {course.title}
                            </h3>
                          </div>
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg transition duration-300 group-hover:-rotate-6 group-hover:bg-indigo-600">
                            <ArrowRight size={18} />
                          </span>
                        </div>

                        <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-500">{course.description}</p>

                        <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400"><Clock3 size={14} /> Duration</div>
                            <p className="mt-2 text-sm font-bold text-slate-900">{course.duration}</p>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400"><IndianRupee size={14} /> Potential</div>
                            <p className="mt-2 text-sm font-bold text-slate-900">{course.salaryPotential || "Best in Industry"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="relative overflow-hidden border-y border-slate-200 bg-[#f3efe8]">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="section-shell relative py-14 sm:py-18">
            <div className="grid gap-6 rounded-[32px] border border-white/70 bg-white/55 p-7 shadow-[0_24px_70px_rgba(15,23,42,.07)] backdrop-blur-xl sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-slate-500"><GraduationCap size={16} /> Need a little direction?</div>
                <h2 className="mt-3 text-2xl font-black tracking-[-.03em] text-slate-950 sm:text-3xl">Not sure which BFSI program fits your profile?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Speak with the EMTA team about the available programs, next steps and suitable career paths.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-indigo-600">Talk to EMTA <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
