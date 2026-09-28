import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import ApplicationForm from "../components/common/ApplicationForm";
import { getJob, type ApiJob } from "../services/api";

function DetailList({ title, items, accent = "violet" }: { title: string; items: string[]; accent?: "violet" | "cyan" }) {
  if (!items.length) return null;
  const tone = accent === "cyan" ? "text-cyan-600 bg-cyan-50" : "text-violet-600 bg-violet-50";
  return (
    <section className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-8">
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-200/25 blur-3xl transition duration-500 group-hover:scale-125" />
      <h2 className="relative text-xl font-bold text-slate-950">{title}</h2>
      <div className="relative mt-6 space-y-4">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex gap-3.5">
            <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${tone}`}>
              <CheckCircle2 size={16} />
            </span>
            <p className="pt-1 text-sm leading-7 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-violet-700"><Icon size={17} /></div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{label}</p>
        <p className="mt-1 text-sm font-semibold leading-6 text-slate-800">{value}</p>
      </div>
    </div>
  );
}

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState<ApiJob | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    if (!id) {
      setError("Job not found");
      setLoading(false);
      return () => { mounted = false; };
    }
    setLoading(true);
    setError("");
    getJob(id)
      .then((response) => { if (mounted) setJob(response.data); })
      .catch((reason) => { if (mounted) setError(reason instanceof Error ? reason.message : "Job not found"); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);

  if (loading) {
    return <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f8fc]"><div className="h-11 w-11 animate-spin rounded-full border-4 border-violet-100 border-t-violet-600" /></main>;
  }

  if (!job || error) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f7f8fc] px-6 py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600"><BriefcaseBusiness size={28} /></div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">This opportunity isn't available</h1>
          <p className="mt-3 text-sm leading-7 text-slate-500">{error || "The position may have been closed or removed."}</p>
          <Link to="/careers" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"><ArrowLeft size={17} /> Browse open roles</Link>
        </div>
      </main>
    );
  }

  const responsibilities = job.responsibilities?.split("\n").map((item) => item.trim()).filter(Boolean) ?? [];
  const requirements = job.requirements?.split("\n").map((item) => item.trim()).filter(Boolean) ?? [];

  return (
    <>
      <SEO title={`${job.title} | ${job.company} | EMTA Careers`} description={job.description || `View details for ${job.title}.`} canonical={`https://emta.co.in/jobs/${job.slug}`} />
      <main className="overflow-hidden bg-[#f7f8fc]">
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-1/2 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" />

          <div className="section-shell relative py-12 sm:py-16 lg:py-20">
            <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"><ArrowLeft size={16} /> Back to opportunities</Link>
            <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" /> Actively hiring</div>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{job.title}</h1>
                <p className="mt-4 text-base font-medium text-slate-300">{job.company}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2.5 text-sm text-slate-200 backdrop-blur-md"><MapPin size={16} className="text-cyan-300" />{job.location}</span>
                  {job.employmentType && <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2.5 text-sm text-slate-200 backdrop-blur-md"><BriefcaseBusiness size={16} className="text-violet-300" />{job.employmentType}</span>}
                  {job.openings !== null && <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2.5 text-sm text-slate-200 backdrop-blur-md"><Users size={16} className="text-emerald-300" />{job.openings} openings</span>}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
                <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Compensation</p>
                <p className="relative mt-3 text-2xl font-bold text-white">{job.salary || "Best in Industry"}</p>
                <Link to={`/jobs/${job.id}#apply`} className="relative mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-50">Apply now <ArrowUpRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              <section className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-8">
                <div className="absolute -left-12 top-0 h-32 w-32 rounded-full bg-cyan-200/25 blur-3xl transition duration-500 group-hover:scale-125" />
                <div className="relative flex items-center gap-2 text-sm font-bold uppercase tracking-[0.13em] text-violet-700"><Sparkles size={15} /> Role overview</div>
                <h2 className="relative mt-3 text-2xl font-bold tracking-tight text-slate-950">Why this role matters</h2>
                <p className="relative mt-5 whitespace-pre-line text-sm leading-8 text-slate-600">{job.description}</p>
              </section>
              <DetailList title="Key responsibilities" items={responsibilities} accent="violet" />
              <DetailList title="What we're looking for" items={requirements} accent="cyan" />
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white/85 p-6 shadow-[0_20px_65px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <span className="eyebrow">AT A GLANCE</span>
                <div className="mt-6 space-y-6">
                  <InfoItem icon={MapPin} label="Location" value={job.location} />
                  <InfoItem icon={BriefcaseBusiness} label="Employment type" value={job.employmentType || undefined} />
                  {job.openings !== null && <InfoItem icon={Users} label="Openings" value={String(job.openings)} />}
                </div>
                <Link to={`/jobs/${job.id}#apply`} className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-linear-to-r hover:from-violet-700 hover:to-cyan-600">Start application <ArrowUpRight size={17} /></Link>
              </div>
            </aside>
          </div>
        </section>

        <section id="apply" className="relative overflow-hidden border-t border-slate-200 bg-white">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
          <div className="section-shell relative py-14 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="eyebrow">READY TO APPLY?</span>
                <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">Make your next move count.</h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">Complete the application below. Your profile and resume will be reviewed by the EMTA team for this opportunity.</p>
              </div>
              <ApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
