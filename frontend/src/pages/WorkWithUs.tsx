import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const options = [
  {
    icon: BriefcaseBusiness,
    title: "Explore current jobs",
    text: "Browse current openings and find roles that match your skills and experience.",
    href: "/careers",
    action: "View jobs",
  },
  {
    icon: GraduationCap,
    title: "Study with EMTA",
    text: "Explore BFSI training programs designed to help you build relevant professional skills.",
    href: "/study-with-us",
    action: "Explore training",
  },
  {
    icon: FileText,
    title: "Prepare your profile",
    text: "Get your profile ready for opportunities with career-oriented guidance and support.",
    href: "/contact",
    action: "Contact us",
  },
];

const process = [
  "Explore opportunities that match your profile.",
  "Prepare your resume and professional profile.",
  "Apply for relevant positions.",
  "Participate in the selection process.",
];

export default function WorkWithUs() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:py-24">
          <div>
            <span className="eyebrow">WORK WITH US</span>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find an opportunity that{" "}
              <span className="text-blue-600">fits your journey</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Explore EMTA job opportunities, training programs and career
              support as you take the next step towards your professional
              goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Find jobs
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
                src="/img/image-removebg-preview.png"
                alt="EMTA career opportunities"
                className="w-full object-contain p-6 sm:p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">YOUR OPTIONS</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Choose how you want to move forward
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Whether you are ready to apply or still preparing, EMTA has
            different paths you can explore.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {options.map(({ icon: Icon, title, text, href, action }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-blue-600">
                <Icon size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>

              <Link
                to={href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                {action}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">APPLICATION JOURNEY</span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From profile to opportunity
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                Follow a simple path towards finding and applying for relevant
                opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((item, index) => (
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

      {/* CTA */}
      <section className="section-shell py-14 sm:py-18">
        <div className="rounded-4xl bg-slate-950 p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              READY TO START?
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Explore current EMTA opportunities.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Browse available openings and take the next step in your
              application journey.
            </p>
          </div>

          <Link
            to="/careers"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 lg:mt-0"
          >
            View jobs
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}