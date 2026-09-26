import { Menu, ExternalLink } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import type { AdminUser } from "../../services/adminApi";

export default function AdminHeader({ onMenu }: { onMenu: () => void }) {
  const { admin } = useOutletContext<{ admin: AdminUser }>();
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-xl sm:px-6">
      <button type="button" onClick={onMenu} className="rounded-xl border border-slate-200 p-2 lg:hidden"><Menu size={20} /></button>
      <div className="ml-3 hidden min-w-0 lg:block"><p className="text-sm font-semibold text-slate-950">Welcome back, {admin.name}</p><p className="text-xs text-slate-500">Manage EMTA recruitment operations</p></div>
      <div className="ml-auto flex items-center gap-3"><Link to="/" target="_blank" className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 sm:inline-flex">View site<ExternalLink size={14} /></Link><div className="rounded-xl bg-blue-50 px-3 py-2 text-right"><p className="text-xs font-semibold text-blue-700">{admin.role}</p><p className="hidden text-[11px] text-slate-500 sm:block">{admin.email}</p></div></div>
    </header>
  );
}
