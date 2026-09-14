import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Job opportunity support",
    text: "Explore relevant openings and identify opportunities based on your profile and career direction.",
  },
  {
    icon: FileText,
    title: "Resume building",
    text: "Prepare a clearer professional profile that presents your skills, qualifications and experience.",
  },
  {
    icon: MessageCircle,
    title: "Interview preparation",
    text: "Build confidence and prepare for the hiring process with career-oriented guidance.",
  },
  {
    icon: Users,
    title: "Career counselling",
    text: "Understand possible career paths and make more informed decisions about your next step.",
  },
];

const steps = [
  "Share your profile and understand suitable opportunities.",
  "Prepare your resume and professional profile.",
  "Work on interview and communication preparation.",
  "Apply for relevant openings and participate in hiring drives.",
];

export default function JobPlacement() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:py-24">
          <div>
            <span className="eyebrow">JOB PLACEMENT</span>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Get closer to your{" "}
              <span className="text-blue-600">career opportunity</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              EMTA supports job seekers with career guidance, resume building,
              interview preparation and access to relevant placement
              opportunities.
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
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Contact EMTA
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-4xl bg-sky-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
              <img
                src="/img/off-campus-jobs.webp"
                alt="EMTA job placement support"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">PLACEMENT SUPPORT</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Support beyond simply finding a vacancy
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Prepare yourself for the hiring journey with support across the
            stages that matter to a job seeker.
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
              <span className="eyebrow">HOW IT WORKS</span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A structured path towards placement
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                Start with your profile, prepare for the hiring process and
                explore relevant opportunities.
              </p>

              <Link
                to="/work-with-us"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Work with EMTA
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

                    <p className="text-sm font-semibold leading-6 text-slate-800">
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
              START TODAY
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Ready to explore your next opportunity?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50">
              Browse current openings or connect with EMTA for career and
              placement support.
            </p>
          </div>

          <div className="mt-6 flex shrink-0 flex-wrap gap-3 lg:mt-0">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Find a job
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}