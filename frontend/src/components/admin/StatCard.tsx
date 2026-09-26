import type { LucideIcon } from "lucide-react";

export default function StatCard({ label, value, icon: Icon, hint }: { label: string; value: number | string; icon: LucideIcon; hint: string }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{label}</p><p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{value}</p></div><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={21} /></div></div><p className="mt-4 text-xs text-slate-500">{hint}</p></div>;
}
