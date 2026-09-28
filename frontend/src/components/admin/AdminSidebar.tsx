import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  LogOut,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
    try {
      await adminLogout();
    } finally {
      navigate("/admin/login", { replace: true });
    }
  }

  return (
    <aside
      className={`${
        mobile
          ? "flex h-screen w-80 shrink-0 flex-col"
          : "sticky top-0 hidden h-screen w-[278px] shrink-0 lg:flex lg:flex-col"
      } admin-sidebar-surface admin-sidebar text-white`}
    >
      <div className="relative overflow-hidden border-b border-white/10 px-5 pb-5 pt-6">
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-16 left-20 h-32 w-32 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="admin-brand-mark">
            <ShieldCheck size={21} />
            <span />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="truncate text-[15px] font-bold tracking-tight">EMTA Admin</p>
              <Sparkles size={13} className="text-cyan-300" />
            </div>
            <p className="mt-0.5 text-xs text-slate-400">Recruitment control center</p>
          </div>
        </div>

        <div className="admin-sidebar-status mt-5">
          <span className="admin-live-dot" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
              System online
            </p>
            <p className="mt-0.5 truncate text-xs text-slate-400">
              Live database connected
            </p>
          </div>
        </div>
      </div>

      <nav className="admin-sidebar-nav flex-1 space-y-2 overflow-y-auto px-4 py-5">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Workspace
        </p>
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 overflow-hidden rounded-2xl px-3.5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "admin-sidebar-link-active text-white"
                  : "text-slate-300 hover:bg-white/[0.065] hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="admin-sidebar-active-bar" />}
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                    isActive
                      ? "bg-white/12 text-cyan-200 shadow-[0_8px_28px_rgba(34,211,238,0.16)]"
                      : "bg-white/[0.045] text-slate-400 group-hover:bg-white/[0.09] group-hover:text-cyan-200"
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span>{label}</span>
                {isActive && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
                )}
              </>
            )}
          </NavLink>
        ))}

        <div className="admin-sidebar-divider my-5" />
        <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            Quick status
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white/[0.045] p-3">
              <p className="text-lg font-bold text-white">Live</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Public API</p>
            </div>
            <div className="rounded-xl bg-white/[0.045] p-3">
              <p className="text-lg font-bold text-white">Secure</p>
              <p className="mt-0.5 text-[10px] text-slate-500">HttpOnly auth</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="admin-sidebar-logout-wrap sticky bottom-0 mt-auto border-t border-white/10 p-4">
        <button
          type="button"
          onClick={logout}
          className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-3.5 py-3.5 text-left text-sm font-semibold text-slate-200 transition hover:border-rose-400/25 hover:bg-rose-500/10 hover:text-rose-200"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-slate-300 transition group-hover:bg-rose-500/10 group-hover:text-rose-300">
            <LogOut size={17} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block">Sign out</span>
            <span className="mt-0.5 block text-[10px] font-medium text-slate-500 group-hover:text-rose-300/70">
              End admin session
            </span>
          </span>
        </button>
      </div>
    </aside>
  );
}
