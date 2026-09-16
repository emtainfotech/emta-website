import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

import ScrollReveal from "../common/ScrollReveal";
import { courses } from "../../data/courses";

export default function TrainingCourses() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-blue-50/60 py-16 sm:py-20 lg:py-24">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">
                <GraduationCap size={14} aria-hidden="true" />
                BFSI Training
              </span>

              <h2 className="section-title mt-5">
                Build Skills That{" "}
                <span className="text-blue-600">
                  Open Career Opportunities
                </span>
              </h2>

              <p className="section-description mt-5">
                Explore our industry-focused BFSI training programs and prepare
                yourself for career opportunities across banking, financial
                services and insurance.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  Industry-aligned learning
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  Practical exposure
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  Career preparation
                </span>
              </div>
            </div>

            <Link
              to="/bfsi-training"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-blue-200 bg-white/75 px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md lg:self-auto"
            >
              View All Programs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <ScrollReveal
              key={course.id}
              className={`[transition-delay:${index * 70}ms]`}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-white/80 bg-white/75 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]">
                {/* Image stage */}
                <div className="relative overflow-hidden border-b border-slate-200/70 bg-linear-to-br from-sky-100/70 via-white to-blue-100/70 p-3">
                  <div className="relative flex min-h-55 items-center justify-center overflow-hidden rounded-3xl bg-white/50 sm:min-h-60">
                    <img
                      src={course.image}
                      alt={course.title}
                      width={640}
                      height={400}
                      loading="lazy"
                      className="h-auto max-h-60 w-full object-contain px-4 transition duration-700 ease-out group-hover:scale-[1.03]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Course badge */}
                    <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-md backdrop-blur">
                      BFSI Training
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-7 text-slate-950">
                    {course.title}
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-sky-100 bg-sky-50/75 p-3.5">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Clock3
                          size={14}
                          className="text-blue-600"
                          aria-hidden="true"
                        />
                        Duration
                      </div>

                      <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-800">
                        {course.details.duration}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-100 bg-blue-50/75 p-3.5">
                      <div className="text-xs font-medium text-slate-500">
                        Salary
                      </div>

                      <p className="mt-1.5 text-sm font-semibold leading-5 text-blue-700">
                        {course.details.salary}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 line-clamp-4 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Key skills
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-blue-100 bg-blue-50/70 px-2.5 py-1 text-xs font-medium text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="group/link mt-auto flex items-center justify-between gap-3 pt-7"
                  >
                    <span className="text-sm font-semibold text-blue-600 transition group-hover/link:text-blue-700">
                      View Course Details
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 flex justify-center">
            <Link
              to="/bfsi-training"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Explore BFSI Training
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}