import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Search,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Recruitment solutions",
    text: "Get support in identifying and connecting with candidates for your hiring requirements.",
  },
  {
    icon: Users,
    title: "Talent sourcing",
    text: "Access a wider candidate pool across different roles and experience levels.",
  },
  {
    icon: ClipboardCheck,
    title: "Candidate screening",
    text: "Streamline your hiring process with candidate identification and initial screening support.",
  },
  {
    icon: CheckCircle2,
    title: "Hiring support",
    text: "Work with the EMTA team throughout the recruitment process for relevant openings.",
  },
];

const benefits = [
  "Candidate sourcing and recruitment assistance",
  "Support for multiple hiring requirements",
  "Access to trained and job-seeking candidates",
  "Structured coordination throughout the hiring process",
];

export default function ForEmployer() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:py-24">
          <div>
            <span className="eyebrow">FOR EMPLOYERS</span>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find the right{" "}
              <span className="text-blue-600">people for your team</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Get recruitment assistance from EMTA to connect your business
              with relevant candidates and simplify your hiring journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/hire-with-us"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Hire with us
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
            <div className="absolute -inset-5 rounded-4xl bg-blue-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
              <img
                src="/img/for-employers.webp"
                alt="For employers"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">RECRUITMENT SUPPORT</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Recruitment support designed around your hiring needs
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Explore the ways EMTA can support businesses looking for suitable
            candidates and recruitment assistance.
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

      {/* Benefits */}
      <section className="bg-slate-50">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">WHY WORK WITH EMTA</span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Make your hiring process more focused
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Partner with EMTA for recruitment assistance and candidate
                sourcing aligned with your hiring requirements.
              </p>

              <Link
                to="/hire-with-us"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Start hiring
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                    <CheckCircle2 size={19} />
                  </div>

                  <p className="flex items-center text-sm font-semibold leading-6 text-slate-800">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell py-14 sm:py-18">
        <div className="rounded-4xl bg-slate-950 p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              LOOKING TO HIRE?
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Tell us about your hiring requirement.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Connect with EMTA to discuss your recruitment requirements and
              available hiring support.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 lg:mt-0"
          >
            Contact EMTA
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}