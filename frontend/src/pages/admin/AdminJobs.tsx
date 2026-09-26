import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Plus, X } from "lucide-react";
import AdminJobTable from "../../components/admin/AdminJobTable";
import { createAdminJob, deleteAdminJob, getAdminJobs, updateAdminJob, updateJobStatus, type AdminJob, type JobStatus } from "../../services/adminApi";

interface JobForm { title: string; company: string; location: string; salary: string; slug: string; description: string; responsibilities: string; requirements: string; employmentType: string; openings: string; status: JobStatus; }
const emptyForm: JobForm = { title: "", company: "EMTA", location: "", salary: "", slug: "", description: "", responsibilities: "", requirements: "", employmentType: "Full-Time", openings: "", status: "DRAFT" };

export default function AdminJobs() {
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ALL" | JobStatus>("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<AdminJob | null>(null);
  const [form, setForm] = useState<JobForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function load() {
    setLoading(true);
    try { const response = await getAdminJobs({ search, status: status === "ALL" ? undefined : status, limit: 100 }); setJobs(response.data); setError(""); }
    catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to load jobs"); }
    finally { setLoading(false); }
  }
  useEffect(() => { const timer = window.setTimeout(load, 250); return () => window.clearTimeout(timer); }, [search, status]);

  function openCreate() { setEditing(null); setForm(emptyForm); setShowForm(true); }
  function openEdit(job: AdminJob) { setEditing(job); setForm({ title: job.title, company: job.company, location: job.location, salary: job.salary || "", slug: job.slug, description: job.description, responsibilities: job.responsibilities || "", requirements: job.requirements || "", employmentType: job.employmentType || "", openings: job.openings == null ? "" : String(job.openings), status: job.status }); setShowForm(true); }
  const setField = <K extends keyof JobForm>(field: K, value: JobForm[K]) => setForm((current) => ({ ...current, [field]: value }));

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setError("");
    const payload = { ...form, openings: form.openings ? Number(form.openings) : undefined };
    try { if (editing) await updateAdminJob(editing.id, payload); else await createAdminJob(payload); setShowForm(false); await load(); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to save job"); } finally { setSaving(false); }
  }
  async function changeStatus(id: number, next: JobStatus) { try { await updateJobStatus(id, next); setJobs((current) => current.map((job) => job.id === id ? { ...job, status: next } : job)); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to update status"); } }
  async function remove(id: number) { if (!window.confirm("Delete this job?")) return; setDeletingId(id); try { await deleteAdminJob(id); setJobs((current) => current.filter((job) => job.id !== id)); } catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to delete job"); } finally { setDeletingId(null); } }

  return <div className="space-y-6">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Recruitment</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Jobs</h1><p className="mt-2 text-sm text-slate-500">Create, edit and control the vacancies shown on the public site.</p></div><button onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"><Plus size={17} />Create job</button></div>
    {error && <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
    {showForm && <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-center justify-between"><div><h2 className="text-lg font-semibold text-slate-950">{editing ? "Edit job" : "Create job"}</h2><p className="mt-1 text-xs text-slate-500">Fields with detailed text accept one item per line for responsibilities and requirements.</p></div><button onClick={() => setShowForm(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><X size={18} /></button></div><form onSubmit={save} className="mt-6 grid gap-4 sm:grid-cols-2">
      {([['title','Job title',true],['company','Company',true],['location','Location',true],['salary','Salary',false],['employmentType','Employment type',false],['openings','Openings',false],['slug','Slug (optional)',false]] as const).map(([field,label,required]) => <label key={field}><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span><input required={required} type={field === 'openings' ? 'number' : 'text'} min={field === 'openings' ? 1 : undefined} value={form[field]} onChange={(e) => setField(field, e.target.value as never)} className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></label>)}
      <label><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Status</span><select value={form.status} onChange={(e) => setField('status', e.target.value as JobStatus)} className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm"><option>DRAFT</option><option>ACTIVE</option><option>CLOSED</option></select></label>
      <label className="sm:col-span-2"><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Description</span><textarea required rows={5} value={form.description} onChange={(e) => setField('description', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></label>
      <label><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Responsibilities</span><textarea rows={7} value={form.responsibilities} onChange={(e) => setField('responsibilities', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></label>
      <label><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Requirements</span><textarea rows={7} value={form.requirements} onChange={(e) => setField('requirements', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></label>
      <div className="flex flex-wrap justify-end gap-3 sm:col-span-2"><button type="button" onClick={() => setShowForm(false)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">Cancel</button><button disabled={saving} className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">{saving ? "Saving..." : editing ? "Save changes" : "Create job"}</button></div>
    </form></div>}

    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search jobs..." className="h-11 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm" /><select value={status} onChange={(e) => setStatus(e.target.value as typeof status)} className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm"><option value="ALL">All statuses</option><option>ACTIVE</option><option>DRAFT</option><option>CLOSED</option></select></div>
    {loading ? <div className="h-96 animate-pulse rounded-2xl bg-white" /> : <AdminJobTable jobs={jobs} onEdit={openEdit} onStatus={changeStatus} onDelete={remove} deletingId={deletingId} />}
  </div>;
}
