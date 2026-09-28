import { ArrowRight, BriefcaseBusiness, MapPin, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

interface Job {
  id: string | number;
  title: string;
  company: string;
  logo?: string;
  location: string;
  salary: string | null;
  url?: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="premium-card edge-hover group flex h-full flex-col overflow-hidden rounded-[1.65rem] p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Badge variant="success"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Actively hiring</Badge>
          <h3 className="mt-4 line-clamp-2 text-[1.1rem] font-extrabold leading-7 text-slate-950">{job.title}</h3>
          <p className="mt-1 truncate text-sm font-medium text-slate-500">{job.company}</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-sky-50 to-white p-2 shadow-sm">
          <img src={job.logo || "/assets/emta-gif.gif"} alt={`${job.company} logo`} width={40} height={40} loading="lazy" className="h-full w-full object-contain" />
        </div>
      </div>

      <div className="my-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="space-y-3.5">
        <div className="flex items-start gap-3 text-sm text-slate-600"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600"><MapPin size={15} /></span><span className="pt-1 line-clamp-2">{job.location}</span></div>
        <div className="flex items-start gap-3 text-sm text-slate-600"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><WalletCards size={15} /></span><span className="pt-1 line-clamp-2">{job.salary || "Salary discussed during selection"}</span></div>
      </div>

      <div className="mt-auto pt-6">
        <Link to={`/jobs/${job.id}`} className="group/link flex items-center justify-between rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:border-blue-200 hover:from-blue-100 hover:to-sky-100">
          <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={15} /> View details</span>
          <ArrowRight size={16} className="transition group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
