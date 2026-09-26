import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, IndianRupee } from "lucide-react";
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
    if (!id) { setError("Course not found"); setLoading(false); return () => { mounted = false; }; }
    getCourse(id)
      .then((response) => { if (mounted) setCourse(response.data); })
      .catch((reason) => { if (mounted) setError(reason instanceof Error ? reason.message : "Course not found"); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <main className="section-shell flex min-h-[70vh] items-center justify-center py-20"><div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" /></main>;

  if (!course) return <main className="section-shell flex min-h-[70vh] items-center justify-center py-20"><div className="text-center"><h1 className="text-3xl font-bold text-slate-950">Course not found</h1><p className="mt-3 text-sm text-slate-500">{error || "The requested program is unavailable."}</p><Link to="/bfsi-training" className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white"><ArrowLeft size={17} />Back to training</Link></div></main>;

  return (
    <>
      <SEO title={`${course.title} | EMTA`} description={course.description} canonical={`https://emta.co.in/course/${course.id}`} />
      <main className="overflow-hidden">
        <section className="relative border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
          <div className="section-shell py-12 sm:py-16 lg:py-20">
            <Link to="/bfsi-training" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"><ArrowLeft size={16} />Back to training</Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div><span className="eyebrow">BFSI TRAINING PROGRAM</span><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{course.title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{course.description}</p><div className="mt-7 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm"><Clock3 size={16} className="text-blue-600" />{course.duration}</span><span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm"><IndianRupee size={16} className="text-blue-600" />{course.salaryPotential || "Best in Industry"}</span></div></div>
              <div className="overflow-hidden rounded-4xl border border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]"><img src={course.image || "/img/services/BFSI TRAING.jpg"} alt={course.title} className="h-72 w-full object-cover" /></div>
            </div>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="space-y-8">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><span className="eyebrow">WHAT YOU WILL LEARN</span><h2 className="mt-3 text-2xl font-bold text-slate-950">Program learnings</h2><div className="mt-7 space-y-4">{course.learningsList.map((learning) => <div key={learning} className="flex gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-blue-600" /><p className="text-sm leading-7 text-slate-600">{learning}</p></div>)}</div></section>
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><span className="eyebrow">SKILLS</span><h2 className="mt-3 text-2xl font-bold text-slate-950">Skills you will develop</h2><div className="mt-6 flex flex-wrap gap-3">{course.skillsList.map((skill) => <span key={skill} className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800">{skill}</span>)}</div></section>
            </div>
            <CourseEnquiryForm courseId={course.id} courseTitle={course.title} />
          </div>
        </section>

        <section className="bg-slate-50"><div className="section-shell py-14"><div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">READY TO START?</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Build skills that move you forward.</h2></div><Link to="/careers" className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white lg:mt-0">Explore jobs<ArrowRight size={17} /></Link></div></div></section>
      </main>
    </>
  );
}
