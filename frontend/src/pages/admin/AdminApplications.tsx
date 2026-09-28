import { useEffect, useMemo, useState } from "react";
import { ArrowRight, FileText, Filter, Search, Sparkles } from "lucide-react";
import AdminApplicationTable from "../../components/admin/AdminApplicationTable";
import {
  deleteAdminApplication,
  getAdminApplications,
  updateApplicationStatus,
  type AdminApplication,
  type ApplicationStatus,
} from "../../services/adminApi";

export default function AdminApplications() {
  const [applications, setApplications] = useState<AdminApplication[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ALL" | ApplicationStatus>("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const response = await getAdminApplications({
        search,
        status: status === "ALL" ? undefined : status,
        limit: 100,
      });
      setApplications(response.data);
      setError("");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to load applications");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(load, 250);
    return () => window.clearTimeout(timer);
  }, [search, status]);

  async function changeStatus(id: number, next: ApplicationStatus) {
    try {
      await updateApplicationStatus(id, next);
      setApplications((current) =>
        current.map((item) => (item.id === id ? { ...item, status: next } : item)),
      );
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to update application");
    }
  }

  async function remove(id: number) {
    if (!window.confirm("Delete this application?")) return;
    try {
      await deleteAdminApplication(id);
      setApplications((current) => current.filter((item) => item.id !== id));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to delete application");
    }
  }

  const summary = useMemo(() => {
    return {
      total: applications.length,
      applied: applications.filter((item) => item.status === "APPLIED").length,
      interview: applications.filter((item) => item.status === "INTERVIEW").length,
      selected: applications.filter((item) => item.status === "SELECTED").length,
    };
  }, [applications]);

  return (
    <div className="space-y-7">
      <section className="admin-page-hero overflow-hidden rounded-[30px] p-6 sm:p-8">
        <div className="admin-page-hero-orb admin-page-hero-orb-one" />
        <div className="admin-page-hero-orb admin-page-hero-orb-two" />
        <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/85 backdrop-blur-md">
              <Sparkles size={12} /> Candidate pipeline
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Applications</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100">
              Review candidates, open resumes and move every application through its next stage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:w-[430px]">
            <MiniMetric label="Visible" value={summary.total} />
            <MiniMetric label="Applied" value={summary.applied} />
            <MiniMetric label="Interview" value={summary.interview} />
            <MiniMetric label="Selected" value={summary.selected} />
          </div>
        </div>
      </section>

      {error && <div className="admin-error-banner">{error}</div>}

      <section className="admin-card rounded-[26px] p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search candidate, email, phone or job..."
              className="admin-search-input h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-11 pr-4 text-sm"
            />
          </div>
          <div className="relative lg:w-52">
            <Filter size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as typeof status)}
              className="admin-search-input h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 text-sm font-semibold"
            >
              <option value="ALL">All statuses</option>
              <option>APPLIED</option>
              <option>SHORTLISTED</option>
              <option>INTERVIEW</option>
              <option>SELECTED</option>
              <option>REJECTED</option>
            </select>
          </div>
        </div>
      </section>

      {loading ? (
        <div className="admin-card h-96 animate-pulse rounded-[26px] bg-white/60" />
      ) : (
        <AdminApplicationTable applications={applications} onStatus={changeStatus} onDelete={remove} />
      )}

      <div className="rounded-[24px] border border-cyan-100 bg-cyan-50/80 p-4 text-xs leading-5 text-cyan-900 sm:flex sm:items-center sm:justify-between sm:gap-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
            <FileText size={15} />
          </span>
          <p>
            Resume links open the uploaded Cloudinary file in a new tab. Status changes are persisted immediately through the backend.
          </p>
        </div>
        <ArrowRight size={15} className="mt-2 hidden text-cyan-500 sm:block" />
      </div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-md">
      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/55">{label}</p>
      <p className="mt-1 text-xl font-black text-white">{value}</p>
    </div>
  );
}
