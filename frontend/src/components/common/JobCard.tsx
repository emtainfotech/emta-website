import { ArrowUpRight, BriefcaseBusiness, MapPin, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: string | number;
  title: string;
  company: string;
  logo?: string;
  location: string;
  salary: string | null;
  url?: string;
}

interface JobCardProps {
  job: Job;
}

const getJobPath = (job: Job) => `/jobs/${job.id}`;

export default function JobCard({ job }: JobCardProps) {
  const jobPath = getJobPath(job);

  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-4xl border border-white/70 bg-white/72 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-violet-300/30" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
            Hiring now
          </span>
          <h3 className="mt-4 line-clamp-2 text-lg font-bold leading-7 text-slate-950 transition duration-300 group-hover:text-violet-700">
            {job.title}
          </h3>
          <p className="mt-1 truncate text-sm font-medium text-slate-500">{job.company}</p>
        </div>

        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-50 to-violet-50" />
          <img
            src={job.logo || "/assets/emta-gif.gif"}
            alt={`${job.company} logo`}
            width={40}
            height={40}
            loading="lazy"
            className="relative h-9 w-9 object-contain"
          />
        </div>
      </div>

      <div className="relative my-5 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative space-y-3.5">
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
            <MapPin size={15} aria-hidden="true" />
          </span>
          <span className="pt-1 line-clamp-2">{job.location}</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
            <WalletCards size={15} aria-hidden="true" />
          </span>
          <span className="pt-1 line-clamp-2">{job.salary || "Best in Industry"}</span>
        </div>
      </div>

      <div className="relative mt-auto pt-6">
        <Link
          to={jobPath}
          aria-label={`View details for ${job.title}`}
          className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-950 px-4 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-linear-to-r hover:from-violet-700 hover:to-cyan-600"
        >
          <span className="inline-flex items-center gap-2">
            <BriefcaseBusiness size={16} />
            Explore role
          </span>
          <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
