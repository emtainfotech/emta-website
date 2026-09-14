import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  IndianRupee,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import { courses } from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((item) => String(item.id) === id);

  if (!course) {
    return (
      <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-blue-600">
            <GraduationCap size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-950">
            Course not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            This training program could not be found.
          </p>

          <Link
            to="/bfsi-training"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Browse courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
    <SEO
        title={`${course.title} | EMTA BFSI Training`}
        description={course.description}
        canonical={`https://emta.co.in/course/${course.id}`}
    />
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="section-shell relative py-12 sm:py-16 lg:py-20">
          <Link
            to="/bfsi-training"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to BFSI training
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <span className="eyebrow">TRAINING PROGRAM</span>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                {course.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                  <Clock3 size={16} className="text-blue-600" />
                  {course.details.duration}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                  <IndianRupee size={16} className="text-blue-600" />
                  {course.details.salary}
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <img
                src={course.image}
                alt={course.title}
                className="h-64 w-full object-cover sm:h-72"
              />

              <div className="p-5">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Enquire about this course
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <span className="eyebrow">WHAT YOU WILL LEARN</span>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Program learnings
              </h2>

              <div className="mt-7 space-y-4">
                {course.learnings.map((learning, index) => (
                  <div key={`${learning}-${index}`} className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-sm leading-7 text-slate-600">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <span className="eyebrow">SKILLS</span>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Skills you will develop
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Program overview
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Duration
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {course.details.duration}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Salary potential
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {course.details.salary}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Contact us
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
    </>
  );
}