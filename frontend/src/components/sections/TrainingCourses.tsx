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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="eyebrow">
              <GraduationCap size={14} aria-hidden="true" />
              BFSI Training
            </span>

            <h2 className="section-title mt-5">
              Build Skills That{" "}
              <span className="text-blue-600">Open Career Opportunities</span>
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
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <ScrollReveal key={course.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/8">
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-sky-50 to-blue-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-md backdrop-blur">
                    BFSI Training
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-7 text-slate-950">
                    {course.title}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-sky-50 p-3">
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

                    <div className="rounded-xl bg-blue-50 p-3">
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
                    className="group/link mt-auto flex items-center justify-between gap-3 pt-6 text-sm font-semibold text-blue-600"
                  >
                    <span>View Course Details</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition group-hover/link:bg-blue-600 group-hover/link:text-white">
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover/link:translate-x-0.5"
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
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Explore BFSI Training
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}