import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

const solutions = [
  {
    title: "For Job Seekers",
    description:
      "Explore career opportunities, placement assistance, professional guidance and pathways to help you move forward.",
    image: "/img/for-job-seekers.webp",
    href: "/for-employee",
    icon: BriefcaseBusiness,
    eyebrow: "Build your career",
    points: [
      "Verified job opportunities",
      "Career guidance & placement support",
      "Interview preparation",
    ],
    tone: "blue",
  },
  {
    title: "For Employers",
    description:
      "Connect with qualified talent through recruitment, staffing, screening and customized hiring solutions.",
    image: "/img/for-employers.webp",
    href: "/for-employer",
    icon: Building2,
    eyebrow: "Build your team",
    points: [
      "Candidate sourcing & screening",
      "Bulk hiring support",
      "Customized recruitment solutions",
    ],
    tone: "sky",
  },
];

export default function BusinessSolutions() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50/60 to-blue-50/70 py-16 sm:py-20 lg:py-24">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        {/* Heading */}
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Our Business</span>

            <h2 className="section-title mt-5">
              One platform.
              <span className="block text-blue-600">
                Two powerful career paths.
              </span>
            </h2>

            <p className="section-description mt-5">
              Whether you are looking for your next opportunity or building
              your next team, EMTA connects the right people with the right
              opportunities.
            </p>
          </div>
        </ScrollReveal>

        {/* Solution cards */}
        <div className="mt-12 grid gap-7 lg:grid-cols-2 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <ScrollReveal key={solution.href}>
                <Link to={solution.href} className="group block h-full">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/80 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200/80 hover:shadow-[0_28px_80px_rgba(37,99,235,0.12)]">
                    {/* Image */}
                    <div className="relative overflow-hidden border-b border-white/70 bg-linear-to-br from-sky-50 via-white to-blue-50 px-5 pt-5 sm:px-6 sm:pt-6">
                      <div className="relative flex min-h-70 items-center justify-center overflow-hidden rounded-3xl bg-white/50 sm:min-h-80">
                        <div
                          className={`absolute inset-0 ${
                            solution.tone === "blue"
                              ? "bg-blue-100/35"
                              : "bg-sky-100/45"
                          }`}
                          aria-hidden="true"
                        />

                        <img
                          src={solution.image}
                          alt={`${solution.title} - EMTA`}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="relative z-10 h-auto max-h-90 w-full object-contain transition duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Category pill */}
                        <div className="absolute left-4 top-4 z-20 sm:left-5 sm:top-5">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md">
                            <Icon
                              size={14}
                              className={
                                solution.tone === "blue"
                                  ? "text-blue-600"
                                  : "text-sky-600"
                              }
                              aria-hidden="true"
                            />
                            {solution.eyebrow}
                          </span>
                        </div>

                        {/* Number marker */}
                        <div className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-slate-950/80 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                          0{index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                            {solution.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                            {solution.description}
                          </p>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowUpRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      {/* Benefits */}
                      <div className="mt-7 space-y-3">
                        {solution.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-blue-600"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom action */}
                      <div className="mt-auto pt-8">
                        <div className="flex items-center justify-between border-t border-slate-200/80 pt-5">
                          <span className="text-sm font-semibold text-blue-600 transition group-hover:text-blue-700">
                            Explore {solution.title.toLowerCase()}
                          </span>

                          <ArrowUpRight
                            size={17}
                            className="text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}