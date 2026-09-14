import {
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

const stats = [
  {
    value: "1935+",
    label: "Students Enrolled",
    icon: GraduationCap,
  },
  {
    value: "3367+",
    label: "Successful Placements",
    icon: Award,
  },
  {
    value: "137+",
    label: "Connected Companies",
    icon: Users,
  },
  {
    value: "21+",
    label: "Team Members",
    icon: Users,
  },
];

const highlights = [
  "BFSI training",
  "Job placement assistance",
  "Career guidance",
  "Industry-oriented programs",
];

export default function About() {
  return (
    <>
      <SEO
        title="About EMTA | Job Consultancy & BFSI Training in Indore"
        description="Learn about Elite Manpower & Training Academy, our career guidance, BFSI training and placement support services."
        canonical="https://emta.co.in/about"
      />

      <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">ABOUT EMTA</span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Empowering careers through{" "}
            <span className="text-blue-600">training & opportunity</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Learn more about Elite Manpower & Training Academy and our focus on
            BFSI training, career development and job placement.
          </p>
        </div>
      </section>

      {/* Main story */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <span className="eyebrow">WHO WE ARE</span>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your trusted job & career consultant
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Elite Manpower and Training Academy is focused on helping
              candidates build the knowledge, confidence and professional
              skills needed to pursue career opportunities.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              EMTA combines training and placement support to connect learners
              with relevant opportunities while helping businesses access
              suitable talent.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-blue-600"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get in touch
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-sky-100/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">
              <img
                src="/img/about-1.png"
                alt="About EMTA"
                className="h-full max-h-130 w-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50">
        <div className="section-shell py-14 sm:py-18 lg:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow">EMTA AT A GLANCE</span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Experience that speaks through results
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                  <Icon size={20} />
                </div>

                <p className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
                  {value}
                </p>

                <p className="mt-2 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / story block */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="overflow-hidden rounded-4xl bg-slate-950">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                OUR APPROACH
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Learn. Prepare. Grow.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                EMTA brings training, career guidance and placement support
                together to help candidates move towards their professional
                goals.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Industry-focused learning",
                  "Career-oriented preparation",
                  "Placement assistance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-70 overflow-hidden bg-slate-900">
              <video
                controls
                preload="metadata"
                className="h-full min-h-70 w-full object-cover"
              >
                <source src="/img/video.MOV" type="video/quicktime" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-50">
        <div className="section-shell py-14 sm:py-18">
          <div className="flex flex-col gap-6 rounded-3xl border border-sky-100 bg-white p-7 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="eyebrow">START YOUR JOURNEY</span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Looking for your next opportunity?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Explore current openings, training programs and career
                opportunities with EMTA.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View jobs
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/bfsi-training"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Explore training
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}