import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import ApplicationForm from "../components/common/ApplicationForm";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";
import { jobs } from "../data/jobs";

type Job = (typeof jobs)[number];

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>

      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex gap-3">
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0 text-blue-600"
            />
            <p className="text-sm leading-7 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value?: string;
}) {
  if (!value) return null;

  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium leading-6 text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((item) => String(item.id) === id) as Job | undefined;

  if (!job) {
    return (
      <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-blue-600">
            <BriefcaseBusiness size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
            Job not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            This position may no longer be available or the job link may be
            incorrect.
          </p>

          <Link
            to="/careers"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Browse jobs
          </Link>
        </div>
      </main>
    );
  }

  const responsibilities = job.responsibilities ?? [];
  const requirements = job.requirements ?? [];
  const qualifications = job.qualifications ?? [];
  const skills = job.skills ?? job.bonusSkills ?? [];

  return (
    <>
      <SEO
        title={`${job.title} | ${job.company} | EMTA Careers`}
        description={
          job.description ||
          `View details and application information for ${job.title} at EMTA.`
        }
        canonical={`https://emta.co.in/jobs/${job.id}`}
      />
      <main className="overflow-hidden">
      {/* Header */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-12 sm:py-16 lg:py-20">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to all jobs
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Actively hiring
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {job.title}
            </h1>

            <p className="mt-4 text-base font-medium text-slate-500">
              {job.company}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                <MapPin size={16} className="text-blue-600" />
                {job.location}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                <BriefcaseBusiness size={16} className="text-blue-600" />
                {job.employmentType || "Full-Time"}
              </span>

              {job.openings !== undefined && (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                  <Users size={16} className="text-blue-600" />
                  {job.openings} openings
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Main */}
          <div className="space-y-6">
            {job.description && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold text-slate-950">
                  Job description
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-600">
                  {job.description}
                </p>
              </section>
            )}

            <DetailList
              title="Key responsibilities"
              items={responsibilities}
            />

            <DetailList
              title="Requirements"
              items={[...requirements, ...qualifications]}
            />

            <DetailList title="Skills" items={skills} />
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="bg-slate-950 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                  Job overview
                </p>

                <p className="mt-3 text-2xl font-bold">{job.salary}</p>
                <p className="mt-1 text-sm text-slate-400">
                  Compensation / salary information
                </p>
              </div>

              <div className="space-y-6 p-6">
                <InfoItem
                  icon={MapPin}
                  label="Location"
                  value={job.location}
                />

                <InfoItem
                  icon={BriefcaseBusiness}
                  label="Employment type"
                  value={job.employmentType}
                />

                <InfoItem
                  icon={Clock3}
                  label="Experience"
                  value={job.experience}
                />

                {job.openings !== undefined && (
                  <InfoItem
                    icon={Users}
                    label="Openings"
                    value={String(job.openings)}
                  />
                )}

                {job.education && (
                  <InfoItem
                    icon={BriefcaseBusiness}
                    label="Education"
                    value={job.education}
                  />
                )}

                <Link
                  to={`/jobs/${job.id}#apply`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Apply for this job
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="border-t border-slate-200 bg-slate-50">
  <div className="section-shell py-14 sm:py-20">
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="lg:sticky lg:top-28">
        <span className="eyebrow">READY TO APPLY?</span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Take the next step in your career.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
          Complete the application form and share your profile with the EMTA
          team for this opportunity.
        </p>

        <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            Applying for
          </p>

          <p className="mt-2 text-sm leading-6 text-blue-700">
            {job.title}
          </p>
        </div>
      </div>

      <ApplicationForm jobTitle={job.title} />
    </div>
  </div>
</section>
        </main>
    </>
  );
}