import { ArrowUpRight, BriefcaseBusiness, Building2 } from "lucide-react";
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
    accent: "blue",
  },
  {
    title: "For Employers",
    description:
      "Connect with qualified talent through recruitment, staffing, screening and customized hiring solutions.",
    image: "/img/for-employers.webp",
    href: "/for-employer",
    icon: Building2,
    eyebrow: "Build your team",
    accent: "sky",
  },
];

export default function BusinessSolutions() {
  return (
    <section className="bg-linear-to-b from-sky-50/70 via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Our Business</span>

            <h2 className="section-title mt-5">
              Empowering your success with{" "}
              <span className="text-blue-600">
                specialized and equitable support.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <ScrollReveal key={solution.href}>
                <Link
                  to={solution.href}
                  className="group block h-full"
                >
                  <article className="relative h-full overflow-hidden rounded-4xl border border-blue-100 bg-white shadow-lg shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={solution.image}
                        alt={`${solution.title} - EMTA`}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      />

                      <div
                        className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-slate-950/5 to-transparent"
                        aria-hidden="true"
                      />

                      {/* Floating badge */}
                      <div className="absolute left-5 top-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md">
                          <Icon
                            size={14}
                            className={
                              solution.accent === "blue"
                                ? "text-blue-600"
                                : "text-sky-600"
                            }
                            aria-hidden="true"
                          />
                          {solution.eyebrow}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                            {solution.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            {solution.description}
                          </p>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowUpRight
                            size={20}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                        Explore {solution.title.toLowerCase()}
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
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