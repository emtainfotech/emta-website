import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  GraduationCap,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Find the right opportunities",
    text: "Explore job openings that match your skills, experience and career goals.",
  },
  {
    icon: FileText,
    title: "Resume guidance",
    text: "Prepare your profile and present your skills effectively during the hiring process.",
  },
  {
    icon: GraduationCap,
    title: "Career-focused training",
    text: "Build relevant knowledge and professional skills through EMTA training programs.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement assistance",
    text: "Get support throughout your journey towards relevant employment opportunities.",
  },
];

const steps = [
  "Explore suitable job opportunities",
  "Build and prepare your professional profile",
  "Improve job-ready skills",
  "Participate in the hiring process",
];

export default function ForEmployee() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:py-24">
          <div>
            <span className="eyebrow">FOR JOB SEEKERS</span>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Move closer to your{" "}
              <span className="text-blue-600">next opportunity</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Explore opportunities, improve your professional profile and
              access career-oriented support from EMTA.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Browse jobs
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/bfsi-training"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Explore training
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-4xl bg-sky-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
              <img
                src="/img/for-job-seekers.webp"
                alt="For job seekers"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">HOW EMTA CAN HELP</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Support built around your career journey
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            From discovering opportunities to preparing for the workplace,
            explore the support available through EMTA.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
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

      {/* Process */}
      <section className="bg-slate-50">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">YOUR JOURNEY</span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A clearer path from search to opportunity
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Start with the right opportunities and prepare yourself for the
                hiring journey.
              </p>

              <Link
                to="/careers"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View current openings
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
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

                    <p className="text-sm font-semibold text-slate-800">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell py-14 sm:py-18">
        <div className="rounded-4xl bg-linear-to-r from-blue-600 to-sky-500 p-7 text-white shadow-xl shadow-blue-200 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
              READY TO START?
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Your next opportunity could be one search away.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50">
              Browse the current EMTA openings and find an opportunity that
              fits your profile.
            </p>
          </div>

          <Link
            to="/careers"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-slate-100 lg:mt-0"
          >
            Find a job
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}