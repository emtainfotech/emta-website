import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: GraduationCap,
    title: "Industry-focused training",
    text: "Develop practical knowledge relevant to BFSI roles and workplace requirements.",
  },
  {
    icon: BookOpenCheck,
    title: "Structured learning",
    text: "Follow focused training programs covering role-specific concepts and professional skills.",
  },
  {
    icon: Users,
    title: "Career guidance",
    text: "Get support in understanding career paths and preparing for opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement assistance",
    text: "Explore relevant openings and receive support during the hiring journey.",
  },
];

const journey = [
  "Choose a training program that matches your career direction.",
  "Build your BFSI knowledge and professional skills.",
  "Prepare your profile for relevant opportunities.",
  "Explore openings and participate in the hiring process.",
];

export default function StudyWithUs() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:py-24">
          <div>
            <span className="eyebrow">STUDY WITH US</span>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn the skills to move your{" "}
              <span className="text-blue-600">career forward</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Explore EMTA&apos;s BFSI-focused training programs and prepare
              yourself for career opportunities with practical, structured
              learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/bfsi-training"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore courses
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Talk to EMTA
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-4xl bg-sky-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
              <img
                src="/img/services/BFSI TRAING.jpg"
                alt="BFSI training"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">WHY TRAIN WITH EMTA</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Training designed around career preparation
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Build relevant knowledge and skills while preparing for your next
            professional opportunity.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-blue-600">
                <Icon size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-slate-50">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">YOUR LEARNING JOURNEY</span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From learning to opportunity
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                Build your knowledge, prepare your profile and move towards
                relevant career opportunities.
              </p>

              <Link
                to="/bfsi-training"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View all programs
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-4">
              {journey.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-600"
                    />

                    <p className="text-sm font-semibold leading-6 text-slate-800">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses CTA */}
      <section className="section-shell py-14 sm:py-18">
        <div className="rounded-4xl bg-slate-950 p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              READY TO LEARN?
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Explore the available BFSI programs.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Compare durations, salary information, program learnings and
              skills across the available courses.
            </p>
          </div>

          <Link
            to="/bfsi-training"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 lg:mt-0"
          >
            Explore training
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}