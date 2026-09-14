import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: string | number;
  title: string;
  company: string;
  logo?: string;
  location: string;
  salary: string;
  url?: string;
}

interface JobCardProps {
  job: Job;
}

const getJobPath = (job: Job) => `/jobs/${job.id}`;

export default function JobCard({ job }: JobCardProps) {
  const jobPath = getJobPath(job);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <BriefcaseBusiness size={12} aria-hidden="true" />
            Actively hiring
          </span>

          <h3 className="mt-4 line-clamp-2 text-lg font-semibold leading-7 text-slate-950">
            {job.title}
          </h3>

          <p className="mt-1 truncate text-sm text-slate-500">
            {job.company}
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2">
          <img
            src={job.logo || "/assets/emta-gif.gif"}
            alt={`${job.company} logo`}
            width={40}
            height={40}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="my-5 h-px bg-slate-100" />

      <div className="space-y-3">
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <MapPin
            size={17}
            className="mt-0.5 shrink-0 text-blue-600"
            aria-hidden="true"
          />
          <span className="line-clamp-2">{job.location}</span>
        </div>

        <div className="flex items-start gap-3 text-sm text-slate-600">
          <WalletCards
            size={17}
            className="mt-0.5 shrink-0 text-blue-600"
            aria-hidden="true"
          />
          <span className="line-clamp-2">{job.salary}</span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link
          to={jobPath}
          aria-label={`View details for ${job.title}`}
          className="group/link flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-200 hover:bg-blue-100"
        >
          <span>View details</span>

          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}