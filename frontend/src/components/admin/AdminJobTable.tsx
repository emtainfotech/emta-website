import { MapPin, Pencil, Trash2 } from "lucide-react";
import type { AdminJob, JobStatus } from "../../services/adminApi";

const statusClass: Record<JobStatus, string> = {
  ACTIVE: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  DRAFT: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
  CLOSED: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
};

export default function AdminJobTable({
  jobs,
  onEdit,
  onStatus,
  onDelete,
  deletingId,
}: {
  jobs: AdminJob[];
  onEdit: (job: AdminJob) => void;
  onStatus: (id: number, status: JobStatus) => void;
  onDelete: (id: number) => void;
  deletingId?: number | null;
}) {
  return (
    <div className="admin-table-card overflow-hidden rounded-[26px]">
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200/80 bg-slate-50/75">
            <tr>
              {["Job", "Location", "Applications", "Status", "Updated", "Actions"].map((head) => (
                <th key={head} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/90">
            {jobs.map((job) => (
              <tr key={job.id} className="group transition hover:bg-white/80">
                <td className="px-5 py-5 align-top">
                  <div className="flex items-start gap-3">
                    <div className="admin-row-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/25 text-indigo-600">
                      <span className="text-xs font-black">{job.title.slice(0, 1).toUpperCase()}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900">{job.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{job.company}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 align-top">
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={14} className="text-slate-400" />
                    {job.location}
                  </div>
                </td>
                <td className="px-5 py-5 align-top">
                  <span className="inline-flex min-w-12 items-center justify-center rounded-xl bg-slate-100 px-3 py-2 font-bold text-slate-700">
                    {job._count.applications}
                  </span>
                </td>
                <td className="px-5 py-5 align-top">
                  <select
                    value={job.status}
                    onChange={(event) => onStatus(job.id, event.target.value as JobStatus)}
                    className={`rounded-full border-0 px-3 py-2 text-[11px] font-bold outline-none ${statusClass[job.status]}`}
                  >
                    <option>DRAFT</option>
                    <option>ACTIVE</option>
                    <option>CLOSED</option>
                  </select>
                </td>
                <td className="px-5 py-5 align-top text-xs font-medium text-slate-500">
                  {new Date(job.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-5 py-5 align-top">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      title="Edit"
                      onClick={() => onEdit(job)}
                      className="admin-action-button text-slate-600 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      type="button"
                      title="Delete"
                      onClick={() => onDelete(job.id)}
                      disabled={deletingId === job.id || job._count.applications > 0}
                      className="admin-action-button text-slate-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 disabled:cursor-not-allowed disabled:opacity-25"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-slate-100/90 md:hidden">
        {jobs.map((job) => (
          <div key={job.id} className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="admin-row-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/25 text-indigo-600">
                  <span className="text-xs font-black">{job.title.slice(0, 1).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">{job.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{job.company} · {job.location}</p>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">
                {job._count.applications} apps
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <select
                value={job.status}
                onChange={(event) => onStatus(job.id, event.target.value as JobStatus)}
                className={`flex-1 rounded-full border-0 px-3 py-2 text-xs font-bold ${statusClass[job.status]}`}
              >
                <option>DRAFT</option>
                <option>ACTIVE</option>
                <option>CLOSED</option>
              </select>
              <button type="button" onClick={() => onEdit(job)} className="admin-action-button">
                <Pencil size={15} />
              </button>
              <button
                type="button"
                onClick={() => onDelete(job.id)}
                disabled={deletingId === job.id || job._count.applications > 0}
                className="admin-action-button text-rose-600 disabled:opacity-25"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {!jobs.length && (
        <div className="px-6 py-16 text-center">
          <p className="text-sm font-semibold text-slate-700">No jobs match your current view.</p>
          <p className="mt-1 text-xs text-slate-500">Try another search term or status filter.</p>
        </div>
      )}
    </div>
  );
}
