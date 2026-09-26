import { useEffect, useState } from "react";
import { BriefcaseBusiness, FileText, GraduationCap, Users } from "lucide-react";
import { getAdminDashboard, type ApplicationStatus } from "../../services/adminApi";
import StatCard from "../../components/admin/StatCard";

const statusStyles: Record<ApplicationStatus, string> = {
  APPLIED: "bg-sky-50 text-sky-700",
  SHORTLISTED: "bg-amber-50 text-amber-700",
  INTERVIEW: "bg-violet-50 text-violet-700",
  SELECTED: "bg-emerald-50 text-emerald-700",
  REJECTED: "bg-red-50 text-red-700",
};

export default function AdminDashboard() {
  const [data, setData] = useState<Awaited<ReturnType<typeof getAdminDashboard>>["data"] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminDashboard().then((response) => setData(response.data)).catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load dashboard"));
  }, []);

  if (error) return <div className="rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-red-700">{error}</div>;
  if (!data) return <div className="space-y-5"><div className="h-12 w-60 animate-pulse rounded-xl bg-slate-200" /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-36 animate-pulse rounded-2xl bg-white" />)}</div></div>;

  return <div className="space-y-8">
    <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Overview</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Recruitment dashboard</h1><p className="mt-2 text-sm text-slate-500">A live view of jobs, applications and training programs.</p></div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Active jobs" value={data.jobs.active} hint={`${data.jobs.total} total jobs`} icon={BriefcaseBusiness} />
      <StatCard label="Applications" value={data.applications.total} hint={`${data.applications.applied} awaiting review`} icon={FileText} />
      <StatCard label="Selected" value={data.applications.selected} hint={`${data.applications.interview} in interview stage`} icon={Users} />
      <StatCard label="Courses" value={data.courses.total} hint="Active training programs" icon={GraduationCap} />
    </div>

    <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><div><h2 className="font-semibold text-slate-950">Recent applications</h2><p className="mt-1 text-xs text-slate-500">Latest candidate submissions</p></div></div><div className="divide-y divide-slate-100">{data.recentApplications.length ? data.recentApplications.map((application) => <div key={application.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><p className="truncate text-sm font-semibold text-slate-900">{application.name}</p><p className="mt-1 truncate text-xs text-slate-500">{application.job.title} · {application.email}</p></div><div className="flex items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[application.status]}`}>{application.status}</span><span className="text-xs text-slate-400">{new Date(application.createdAt).toLocaleDateString()}</span></div></div>) : <div className="px-5 py-12 text-center text-sm text-slate-500">No applications yet.</div>}</div></section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-950">Application pipeline</h2><div className="mt-6 space-y-5">{([['Applied', data.applications.applied], ['Shortlisted', data.applications.shortlisted], ['Interview', data.applications.interview], ['Selected', data.applications.selected], ['Rejected', data.applications.rejected]] as const).map(([label, value]) => { const percentage = data.applications.total ? Math.round((value / data.applications.total) * 100) : 0; return <div key={label}><div className="flex items-center justify-between text-sm"><span className="font-medium text-slate-700">{label}</span><span className="text-slate-400">{value}</span></div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-blue-600" style={{ width: `${percentage}%` }} /></div></div>; })}</div></section>
    </div>
  </div>;
}
