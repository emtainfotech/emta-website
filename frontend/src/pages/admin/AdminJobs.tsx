import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { BriefcaseBusiness, CheckCircle2, Filter, Plus, Search, X } from "lucide-react";
import AdminJobTable from "../../components/admin/AdminJobTable";
import {
  createAdminJob,
  deleteAdminJob,
  getAdminJobs,
  updateAdminJob,
  updateJobStatus,
  type AdminJob,
  type JobStatus,
} from "../../services/adminApi";

interface JobForm {
  title: string;
  company: string;
  location: string;
  salary: string;
  slug: string;
  description: string;
  responsibilities: string;
  requirements: string;
  employmentType: string;
  openings: string;
  status: JobStatus;
}

const emptyForm: JobForm = {
  title: "",
  company: "EMTA",
  location: "",
  salary: "",
  slug: "",
  description: "",
  responsibilities: "",
  requirements: "",
  employmentType: "Full-Time",
  openings: "",
  status: "DRAFT",
};

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
    try {
      const response = await getAdminJobs({
        search,
        status: status === "ALL" ? undefined : status,
        limit: 100,
      });
      setJobs(response.data);
      setError("");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to load jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(load, 250);
    return () => window.clearTimeout(timer);
  }, [search, status]);

  function openCreate() {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function openEdit(job: AdminJob) {
    setEditing(job);
    setForm({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary || "",
      slug: job.slug,
      description: job.description,
      responsibilities: job.responsibilities || "",
      requirements: job.requirements || "",
      employmentType: job.employmentType || "",
      openings: job.openings == null ? "" : String(job.openings),
      status: job.status,
    });
    setShowForm(true);
  }

  const setField = <K extends keyof JobForm>(field: K, value: JobForm[K]) =>
    setForm((current) => ({ ...current, [field]: value }));

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      openings: form.openings ? Number(form.openings) : undefined,
    };

    try {
      if (editing) await updateAdminJob(editing.id, payload);
      else await createAdminJob(payload);
      setShowForm(false);
      await load();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to save job");
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(id: number, next: JobStatus) {
    try {
      await updateJobStatus(id, next);
      setJobs((current) => current.map((job) => (job.id === id ? { ...job, status: next } : job)));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to update status");
    }
  }

  async function remove(id: number) {
    if (!window.confirm("Delete this job?")) return;
    setDeletingId(id);
    try {
      await deleteAdminJob(id);
      setJobs((current) => current.filter((job) => job.id !== id));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to delete job");
    } finally {
      setDeletingId(null);
    }
  }

  const counts = useMemo(
    () => ({
      active: jobs.filter((job) => job.status === "ACTIVE").length,
      draft: jobs.filter((job) => job.status === "DRAFT").length,
      closed: jobs.filter((job) => job.status === "CLOSED").length,
    }),
    [jobs],
  );

  return (
    <div className="space-y-7">
      <section className="admin-page-hero admin-page-hero-jobs overflow-hidden rounded-[30px] p-6 sm:p-8">
        <div className="admin-page-hero-orb admin-page-hero-orb-one" />
        <div className="admin-page-hero-orb admin-page-hero-orb-two" />
        <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/85 backdrop-blur-md">
              <BriefcaseBusiness size={12} /> Vacancy management
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Jobs</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100">
              Create, edit, publish and close the vacancies that candidates see across EMTA.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <HeroStat label="Active" value={counts.active} />
            <HeroStat label="Draft" value={counts.draft} />
            <HeroStat label="Closed" value={counts.closed} />
            <button type="button" onClick={openCreate} className="admin-hero-button admin-hero-button-light mt-1 sm:mt-0">
              <Plus size={15} /> Create job
            </button>
          </div>
        </div>
      </section>

      {error && <div className="admin-error-banner">{error}</div>}

      {showForm && (
        <div className="admin-form-shell rounded-[28px] p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-600">{editing ? "Editing vacancy" : "New vacancy"}</p>
              <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-950">{editing ? "Edit job" : "Create a job"}</h2>
              <p className="mt-2 text-xs leading-5 text-slate-500">Use one line per responsibility or requirement. Active jobs become visible to candidates immediately.</p>
            </div>
            <button type="button" onClick={() => setShowForm(false)} className="admin-icon-button">
              <X size={18} />
            </button>
          </div>

          <form onSubmit={save} className="mt-7 grid gap-4 sm:grid-cols-2">
            {(
              [
                ["title", "Job title", true],
                ["company", "Company", true],
                ["location", "Location", true],
                ["salary", "Salary", false],
                ["employmentType", "Employment type", false],
                ["openings", "Openings", false],
                ["slug", "Slug (optional)", false],
              ] as const
            ).map(([field, label, required]) => (
              <label key={field}>
                <span className="admin-field-label">{label}</span>
                <input
                  required={required}
                  type={field === "openings" ? "number" : "text"}
                  min={field === "openings" ? 1 : undefined}
                  value={form[field]}
                  onChange={(event) => setField(field, event.target.value as never)}
                  className="admin-field-input"
                />
              </label>
            ))}

            <label>
              <span className="admin-field-label">Status</span>
              <select
                value={form.status}
                onChange={(event) => setField("status", event.target.value as JobStatus)}
                className="admin-field-input"
              >
                <option>DRAFT</option>
                <option>ACTIVE</option>
                <option>CLOSED</option>
              </select>
            </label>

            <label className="sm:col-span-2">
              <span className="admin-field-label">Description</span>
              <textarea required rows={5} value={form.description} onChange={(event) => setField("description", event.target.value)} className="admin-field-textarea" />
            </label>

            <label>
              <span className="admin-field-label">Responsibilities</span>
              <textarea rows={7} value={form.responsibilities} onChange={(event) => setField("responsibilities", event.target.value)} className="admin-field-textarea" />
            </label>

            <label>
              <span className="admin-field-label">Requirements</span>
              <textarea rows={7} value={form.requirements} onChange={(event) => setField("requirements", event.target.value)} className="admin-field-textarea" />
            </label>

            <div className="flex flex-wrap justify-end gap-3 sm:col-span-2">
              <button type="button" onClick={() => setShowForm(false)} className="admin-secondary-button">Cancel</button>
              <button disabled={saving} className="admin-primary-button disabled:cursor-not-allowed disabled:opacity-60">
                {saving ? "Saving..." : editing ? "Save changes" : "Create job"}
              </button>
            </div>
          </form>
        </div>
      )}

      <section className="admin-card rounded-[26px] p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search jobs..." className="admin-search-input h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-11 pr-4 text-sm" />
          </div>
          <div className="relative lg:w-52">
            <Filter size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select value={status} onChange={(event) => setStatus(event.target.value as typeof status)} className="admin-search-input h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 text-sm font-semibold">
              <option value="ALL">All statuses</option>
              <option>ACTIVE</option>
              <option>DRAFT</option>
              <option>CLOSED</option>
            </select>
          </div>
        </div>
      </section>

      {loading ? <div className="admin-card h-96 animate-pulse rounded-[26px] bg-white/60" /> : <AdminJobTable jobs={jobs} onEdit={openEdit} onStatus={changeStatus} onDelete={remove} deletingId={deletingId} />}

      <div className="rounded-[24px] border border-emerald-100 bg-emerald-50/80 p-4 text-xs leading-5 text-emerald-900">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm"><CheckCircle2 size={15} /></span>
          <p><strong className="font-bold">Live publishing:</strong> changing a vacancy to ACTIVE updates the public jobs flow through the existing backend API.</p>
        </div>
      </div>
    </div>
  );
}

function HeroStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/10 px-3.5 py-3 backdrop-blur-md">
      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">{label}</p>
      <p className="mt-1 text-xl font-black text-white">{value}</p>
    </div>
  );
}
