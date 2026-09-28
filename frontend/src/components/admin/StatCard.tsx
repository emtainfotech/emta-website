import type { LucideIcon } from "lucide-react";

type Tone = "cyan" | "violet" | "emerald" | "amber";

const toneMap: Record<Tone, { icon: string; glow: string; label: string }> = {
  cyan: {
    icon: "from-cyan-400 to-sky-500 text-white",
    glow: "bg-cyan-400/20",
    label: "text-cyan-700",
  },
  violet: {
    icon: "from-violet-500 to-indigo-600 text-white",
    glow: "bg-violet-400/20",
    label: "text-violet-700",
  },
  emerald: {
    icon: "from-emerald-400 to-teal-600 text-white",
    glow: "bg-emerald-400/20",
    label: "text-emerald-700",
  },
  amber: {
    icon: "from-amber-300 to-orange-500 text-white",
    glow: "bg-amber-300/20",
    label: "text-amber-700",
  },
};

export default function StatCard({
  label,
  value,
  icon: Icon,
  hint,
  tone = "cyan",
}: {
  label: string;
  value: number | string;
  icon: LucideIcon;
  hint: string;
  tone?: Tone;
}) {
  const colors = toneMap[tone];

  return (
    <div className="admin-stat-card admin-card group rounded-[26px] p-5 sm:p-6">
      <div className={`admin-stat-glow ${colors.glow}`} />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`text-[11px] font-bold uppercase tracking-[0.15em] ${colors.label}`}>
            {label}
          </p>
          <p className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {value}
          </p>
          <p className="mt-2 max-w-[190px] text-xs leading-5 text-slate-500">{hint}</p>
        </div>
        <div className={`admin-stat-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg ${colors.icon}`}>
          <Icon size={21} />
        </div>
      </div>
      <div className="admin-stat-line mt-6" />
    </div>
  );
}
