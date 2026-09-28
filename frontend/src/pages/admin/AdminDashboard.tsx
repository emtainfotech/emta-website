import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, FileText, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { getAdminDashboard, type ApplicationStatus } from "../../services/adminApi";
import StatCard from "../../components/admin/StatCard";

const statusStyles: Record<ApplicationStatus, string> = {
  APPLIED: "bg-sky-50 text-sky-700 ring-sky-200",
  SHORTLISTED: "bg-amber-50 text-amber-700 ring-amber-200",
  INTERVIEW: "bg-violet-50 text-violet-700 ring-violet-200",
  SELECTED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  REJECTED: "bg-rose-50 text-rose-700 ring-rose-200",
};

export default function AdminDashboard() {
  const [data, setData] = useState<Awaited<ReturnType<typeof getAdminDashboard>>["data"] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminDashboard()
      .then((response) => setData(response.data))
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load dashboard"));
  }, []);

  const pipeline = useMemo(() => {
    if (!data) return [];
    return [
      ["Applied", data.applications.applied, "from-sky-400 to-cyan-500"],
      ["Shortlisted", data.applications.shortlisted, "from-amber-300 to-orange-500"],
      ["Interview", data.applications.interview, "from-violet-400 to-indigo-600"],
      ["Selected", data.applications.selected, "from-emerald-400 to-teal-600"],
      ["Rejected", data.applications.rejected, "from-rose-400 to-pink-500"],
    ] as const;
  }, [data]);

  if (error) {
    return <div className="admin-error-banner">{error}</div>;
  }

  if (!data) {
    return (
      <div className="space-y-6">
        <div className="admin-card h-44 animate-pulse rounded-[28px] bg-white/60" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="admin-card h-40 animate-pulse rounded-[26px] bg-white/60" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      <section className="admin-dashboard-hero overflow-hidden rounded-[32px] p-6 text-white shadow-[0_30px_90px_rgba(49,46,129,0.2)] sm:p-8">
        <div className="admin-dashboard-hero-grid" aria-hidden="true" />
        <div className="relative grid gap-8 xl:grid-cols-[1.55fr_0.85fr] xl:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-100 backdrop-blur-md">
              <span className="admin-live-dot" /> Live operations
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl xl:text-5xl">
              Recruitment, applications and training — all in one control room.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
              Monitor the live EMTA pipeline, keep vacancies updated and move candidates forward without leaving the dashboard.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/admin/jobs" className="admin-hero-button admin-hero-button-light">
                Manage jobs <ArrowRight size={15} />
              </Link>
              <Link to="/admin/applications" className="admin-hero-button admin-hero-button-dark">
                Review applications <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="admin-dashboard-orbit-wrap" aria-hidden="true">
            <div className="admin-dashboard-orbit admin-dashboard-orbit-one" />
            <div className="admin-dashboard-orbit admin-dashboard-orbit-two" />
            <div className="admin-dashboard-core">
              <ShieldIcon />
              <span>EMTA</span>
              <small>CONTROL</small>
            </div>
            <div className="admin-dashboard-float admin-dashboard-float-one">
              <span className="admin-dashboard-float-label">Active jobs</span>
              <strong>{data.jobs.active}</strong>
            </div>
            <div className="admin-dashboard-float admin-dashboard-float-two">
              <span className="admin-dashboard-float-label">Applications</span>
              <strong>{data.applications.total}</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active jobs" value={data.jobs.active} hint={`${data.jobs.total} total vacancies`} icon={BriefcaseBusiness} tone="cyan" />
        <StatCard label="Applications" value={data.applications.total} hint={`${data.applications.applied} awaiting review`} icon={FileText} tone="violet" />
        <StatCard label="Selected" value={data.applications.selected} hint={`${data.applications.interview} currently interviewing`} icon={Users} tone="emerald" />
        <StatCard label="Courses" value={data.courses.total} hint="Training programs in the catalog" icon={GraduationCap} tone="amber" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <section className="admin-card overflow-hidden rounded-[28px]">
          <div className="flex items-center justify-between border-b border-slate-100/90 px-5 py-5 sm:px-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-600">Candidate flow</p>
              <h2 className="mt-1.5 text-lg font-black tracking-tight text-slate-950">Recent applications</h2>
              <p className="mt-1 text-xs text-slate-500">The latest candidate activity across live vacancies.</p>
            </div>
            <Link to="/admin/applications" className="admin-soft-link">View all <ArrowRight size={13} /></Link>
          </div>
          <div className="divide-y divide-slate-100/90">
            {data.recentApplications.length ? (
              data.recentApplications.map((application) => (
                <div key={application.id} className="admin-application-row flex flex-col gap-3 px-5 py-4.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="admin-avatar-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white">
                      {application.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">{application.name}</p>
                      <p className="mt-1 truncate text-xs text-slate-500">{application.job.title} · {application.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ring-inset ${statusStyles[application.status]}`}>
                      {application.status}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {new Date(application.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-5 py-14 text-center text-sm text-slate-500">No applications yet.</div>
            )}
          </div>
        </section>

        <section className="admin-card rounded-[28px] p-5 sm:p-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-700">Pipeline health</p>
            <h2 className="mt-1.5 text-lg font-black tracking-tight text-slate-950">Application pipeline</h2>
          </div>
          <div className="mt-7 space-y-5">
            {pipeline.map(([label, value, gradient]) => {
              const percentage = data.applications.total ? Math.round((value / data.applications.total) * 100) : 0;
              return (
                <div key={label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">{label}</span>
                    <span className="font-semibold text-slate-400">{value}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-700`} style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-[1.6]">
      <path d="M12 3.2 19 6v5.8c0 4.5-2.6 7.7-7 9-4.4-1.3-7-4.5-7-9V6l7-2.8Z" />
      <path d="m8.8 12 2.1 2.1 4.5-4.7" />
    </svg>
  );
}
