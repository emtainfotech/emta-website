import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import AdminApplicationTable from "../../components/admin/AdminApplicationTable";
import { deleteAdminApplication, getAdminApplications, updateApplicationStatus, type AdminApplication, type ApplicationStatus } from "../../services/adminApi";

export default function AdminApplications() {
  const [applications, setApplications] = useState<AdminApplication[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ALL" | ApplicationStatus>("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() { setLoading(true); try { const response = await getAdminApplications({ search, status: status === "ALL" ? undefined : status, limit: 100 }); setApplications(response.data); setError(""); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to load applications"); } finally { setLoading(false); } }
  useEffect(() => { const timer = window.setTimeout(load, 250); return () => window.clearTimeout(timer); }, [search, status]);
  async function changeStatus(id: number, next: ApplicationStatus) { try { await updateApplicationStatus(id, next); setApplications((current) => current.map((item) => item.id === id ? { ...item, status: next } : item)); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to update application"); } }
  async function remove(id: number) { if (!window.confirm("Delete this application?")) return; try { await deleteAdminApplication(id); setApplications((current) => current.filter((item) => item.id !== id)); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to delete application"); } }

  return <div className="space-y-6"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Candidates</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Applications</h1><p className="mt-2 text-sm text-slate-500">Review candidates and move each application through the hiring pipeline.</p></div>{error && <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}<div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row"><div className="relative flex-1"><Filter size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search candidate, email, phone or job..." className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm" /></div><select value={status} onChange={(e) => setStatus(e.target.value as typeof status)} className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm"><option value="ALL">All statuses</option><option>APPLIED</option><option>SHORTLISTED</option><option>INTERVIEW</option><option>SELECTED</option><option>REJECTED</option></select></div>{loading ? <div className="h-96 animate-pulse rounded-2xl bg-white" /> : <AdminApplicationTable applications={applications} onStatus={changeStatus} onDelete={remove} />}</div>;
}
