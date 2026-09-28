import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "success" | "violet";

const variants: Record<BadgeVariant, string> = {
  default: "border-indigo-200 bg-indigo-50 text-indigo-700",
  secondary: "border-slate-200 bg-slate-50 text-slate-600",
  outline: "border-slate-200 bg-white/70 text-slate-600",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  violet: "border-violet-200 bg-violet-50 text-violet-700",
};

export default function Badge({
  variant = "default",
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      {...props}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold tracking-[0.06em] ${variants[variant]} ${className}`}
    />
  );
}
