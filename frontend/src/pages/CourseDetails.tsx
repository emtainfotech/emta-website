import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, IndianRupee, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import CourseEnquiryForm from "../components/common/CourseEnquiryForm";
import { getCourse, type CourseView } from "../services/api";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState<CourseView | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    if (!id) {
      setError("Course not found");
      setLoading(false);
      return () => {
        mounted = false;
      };
    }

    getCourse(id)
      .then((response) => {
        if (mounted) setCourse(response.data);
      })
      .catch((reason) => {
        if (mounted) setError(reason instanceof Error ? reason.message : "Course not found");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="grid min-h-[75vh] place-items-center bg-[#120f1b]">
        <div className="grid place-items-center text-center text-white">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/15 border-t-amber-300" />
          <p className="mt-4 text-sm text-white/50">Loading program...</p>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="grid min-h-[75vh] place-items-center bg-[#120f1b] px-6 text-center text-white">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Program unavailable</p>
          <h1 className="mt-3 text-3xl font-black">Course not found</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/55">{error || "The requested training program is unavailable."}</p>
          <Link to="/bfsi-training" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950"><ArrowLeft size={17} /> Back to training</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${course.title} | EMTA`} description={course.description} canonical={`https://emta.co.in/course/${course.id}`} />

      <main className="overflow-hidden bg-[#f8f5ef] text-slate-950">
        <section className="relative isolate overflow-hidden bg-[#120f1b] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(251,191,36,.28),transparent_28%),radial-gradient(circle_at_18%_30%,rgba(34,211,238,.18),transparent_24%),radial-gradient(circle_at_50%_110%,rgba(168,85,247,.22),transparent_34%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="section-shell relative py-12 sm:py-16 lg:py-20">
            <Link to="/bfsi-training" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"><ArrowLeft size={16} /> Back to training</Link>

            <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-200 backdrop-blur-xl"><Sparkles size={13} /> Program spotlight</div>
                <h1 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-5xl lg:text-6xl">{course.title}</h1>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">{course.description}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/7 p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/40"><Clock3 size={14} /> Duration</div>
                    <p className="mt-2 text-base font-bold">{course.duration}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/7 p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/40"><IndianRupee size={14} /> Salary potential</div>
                    <p className="mt-2 text-base font-bold">{course.salaryPotential || "Best in Industry"}</p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[430px]">
                <div className="absolute -inset-10 rounded-full bg-amber-300/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-2xl">
                  <img src={course.image || "/img/services/BFSI TRAING.jpg"} alt={course.title} className="h-[330px] w-full object-cover sm:h-[390px]" />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-5 pt-20">
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-amber-300">EMTA BFSI</p>
                    <p className="mt-1 text-lg font-black text-white">A focused program. A clearer next step.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_410px] lg:items-start">
            <div className="space-y-7">
              <section className="edge-hover rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,.06)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="eyebrow">LEARNING OUTCOMES</span>
                    <h2 className="mt-3 text-2xl font-black tracking-[-.03em] sm:text-3xl">What you will learn</h2>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-100 text-amber-700"><CheckCircle2 size={20} /></span>
                </div>
                <div className="mt-7 grid gap-3">
                  {course.learningsList.map((learning, index) => (
                    <div key={learning} className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-cyan-200 hover:bg-cyan-50/60">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-xs font-black text-slate-400 shadow-sm group-hover:text-cyan-700">{String(index + 1).padStart(2, "0")}</span>
                      <p className="pt-1 text-sm leading-7 text-slate-600">{learning}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-[#111827] p-6 text-white shadow-[0_20px_70px_rgba(15,23,42,.12)] sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-300">SKILL STACK</p>
                <h2 className="mt-3 text-2xl font-black tracking-[-.03em]">Skills you will build</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {course.skillsList.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/7 px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-xl">{skill}</span>)}
                </div>
              </section>
            </div>

            <div className="lg:sticky lg:top-28">
              <CourseEnquiryForm courseId={course.id} courseTitle={course.title} />
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="section-shell py-14 sm:py-18">
            <div className="relative overflow-hidden rounded-[32px] bg-linear-to-br from-amber-50 via-white to-cyan-50 p-7 sm:p-10">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-200/40 blur-2xl" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">READY FOR THE NEXT STEP?</p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-.03em] sm:text-3xl">Explore live openings alongside your training.</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Pair learning with real opportunities on EMTA's jobs platform.</p>
                </div>
                <Link to="/careers" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-600">Explore jobs <ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
