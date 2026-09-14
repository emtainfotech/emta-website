import { ArrowRight, Clock3, GraduationCap, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function BfsiTraining() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">BFSI TRAINING</span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build job-ready skills for the{" "}
            <span className="text-blue-600">BFSI sector</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore EMTA training programs designed around practical BFSI
            knowledge, professional skills and career-oriented preparation.
          </p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">OUR PROGRAMS</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Choose the right training program
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Compare the available programs and explore the complete curriculum
            before choosing a course.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="grid sm:grid-cols-[200px_1fr]">
                <div className="relative h-52 overflow-hidden bg-sky-50 sm:h-full">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-snug text-slate-950">
                    {course.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Clock3 size={17} className="text-blue-600" />
                      {course.details.duration}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <IndianRupee size={17} className="text-blue-600" />
                      {course.details.salary}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <GraduationCap size={17} className="text-blue-600" />
                      Career-focused training
                    </div>
                  </div>

                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-500">
                    {course.description}
                  </p>

                  <Link
                    to={`/course/${course.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    View course details
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section-shell py-14 sm:py-18">
          <div className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                NEED GUIDANCE?
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Not sure which program fits you?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Get in touch with the EMTA team for guidance regarding the
                available training programs.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:mt-0"
            >
              Contact EMTA
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}