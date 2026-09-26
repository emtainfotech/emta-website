import { BarChart3, BriefcaseBusiness, FileText, LogOut, ShieldCheck } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { adminLogout } from "../../services/adminApi";

const links = [
  { to: "/admin", label: "Dashboard", icon: BarChart3, end: true },
  { to: "/admin/jobs", label: "Jobs", icon: BriefcaseBusiness },
  { to: "/admin/applications", label: "Applications", icon: FileText },
];

export default function AdminSidebar({ mobile = false }: { mobile?: boolean }) {
  const navigate = useNavigate();
  async function logout() {
    try { await adminLogout(); } finally { navigate("/admin/login", { replace: true }); }
  }
  return (
    <aside className={`${mobile ? "flex h-full w-72 shrink-0 flex-col" : "hidden w-64 shrink-0 lg:flex lg:flex-col"} border-r border-slate-200 bg-slate-950 text-white`}>
      <div className="border-b border-white/10 p-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600"><ShieldCheck size={20} /></div><div><p className="font-bold">EMTA Admin</p><p className="text-xs text-slate-400">Management portal</p></div></div></div>
      <nav className="flex-1 space-y-1 p-4">{links.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-white/8 hover:text-white"}`}><Icon size={18} />{label}</NavLink>)}</nav>
      <div className="border-t border-white/10 p-4"><button onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-red-500/10 hover:text-red-300"><LogOut size={18} />Sign out</button></div>
    </aside>
  );
}
