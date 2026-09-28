import { ExternalLink, FileText, Trash2 } from "lucide-react";
import type { AdminApplication, ApplicationStatus } from "../../services/adminApi";

const statusClass: Record<ApplicationStatus, string> = {
  APPLIED: "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200",
  SHORTLISTED: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
  INTERVIEW: "bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200",
  SELECTED: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  REJECTED: "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200",
};

export default function AdminApplicationTable({
  applications,
  onStatus,
  onDelete,
}: {
  applications: AdminApplication[];
  onStatus: (id: number, status: ApplicationStatus) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="admin-table-card overflow-hidden rounded-[26px]">
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200/80 bg-slate-50/75">
            <tr>
              {["Candidate", "Job", "Contact", "Status", "Resume", "Applied"].map((head) => (
                <th key={head} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/90">
            {applications.map((item) => (
              <tr key={item.id} className="group transition hover:bg-white/80">
                <td className="px-5 py-5 align-top">
                  <div className="flex items-start gap-3">
                    <div className="admin-avatar-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white">
                      {item.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.qualification || "Qualification not provided"}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 align-top">
                  <p className="font-semibold text-slate-800">{item.job.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.job.company} · {item.job.location}</p>
                </td>
                <td className="px-5 py-5 align-top">
                  <p className="text-xs font-medium text-slate-700">{item.email}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.phone}</p>
                </td>
                <td className="px-5 py-5 align-top">
                  <select
                    value={item.status}
                    onChange={(event) => onStatus(item.id, event.target.value as ApplicationStatus)}
                    className={`rounded-full border-0 px-3 py-2 text-[11px] font-bold outline-none ${statusClass[item.status]}`}
                  >
                    <option>APPLIED</option>
                    <option>SHORTLISTED</option>
                    <option>INTERVIEW</option>
                    <option>SELECTED</option>
                    <option>REJECTED</option>
                  </select>
                </td>
                <td className="px-5 py-5 align-top">
                  {item.resumeUrl ? (
                    <a
                      href={item.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-indigo-600 transition hover:border-indigo-200 hover:bg-indigo-50"
                    >
                      <FileText size={14} />
                      Resume
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">Unavailable</span>
                  )}
                </td>
                <td className="px-5 py-5 align-top text-xs font-medium text-slate-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                  <button
                    type="button"
                    onClick={() => onDelete(item.id)}
                    className="mt-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-rose-500 hover:text-rose-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-slate-100/90 md:hidden">
        {applications.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                <div className="admin-avatar-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white">
                  {item.name.slice(0, 1).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-bold text-slate-900">{item.name}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">{item.job.title}</p>
                </div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {item.email} · {item.phone}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <select
                value={item.status}
                onChange={(event) => onStatus(item.id, event.target.value as ApplicationStatus)}
                className={`flex-1 rounded-full border-0 px-3 py-2 text-xs font-bold ${statusClass[item.status]}`}
              >
                <option>APPLIED</option>
                <option>SHORTLISTED</option>
                <option>INTERVIEW</option>
                <option>SELECTED</option>
                <option>REJECTED</option>
              </select>
              {item.resumeUrl && (
                <a
                  href={item.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="admin-action-button text-indigo-600"
                  aria-label="Open resume"
                >
                  <ExternalLink size={15} />
                </a>
              )}
              <button
                type="button"
                onClick={() => onDelete(item.id)}
                className="admin-action-button text-rose-600"
                aria-label="Delete application"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {!applications.length && (
        <div className="px-6 py-16 text-center">
          <p className="text-sm font-semibold text-slate-700">No applications found.</p>
          <p className="mt-1 text-xs text-slate-500">New candidate submissions will appear here.</p>
        </div>
      )}
    </div>
  );
}
