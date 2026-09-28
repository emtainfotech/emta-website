import { ExternalLink, Menu, ShieldCheck } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import type { AdminUser } from "../../services/adminApi";

export default function AdminHeader({ onMenu }: { onMenu: () => void }) {
  const { admin } = useOutletContext<{ admin: AdminUser }>();
  const adminWithName = admin as AdminUser & { name?: string };
  const displayName = adminWithName.name || "Administrator";

  return (
    <header className="admin-header sticky top-0 z-30 border-b border-white/60 bg-white/72 px-4 backdrop-blur-2xl sm:px-6">
      <div className="flex min-h-[76px] items-center gap-3 lg:gap-5">
        <button
          type="button"
          onClick={onMenu}
          className="admin-icon-button lg:hidden"
          aria-label="Open admin navigation"
        >
          <Menu size={19} />
        </button>

        <div className="hidden min-w-0 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            EMTA control room
          </p>
          <div className="mt-1 flex items-center gap-2">
            <h2 className="truncate text-lg font-bold tracking-tight text-slate-950">
              Welcome back, {displayName}
            </h2>
            <span className="admin-header-live">
              <span className="admin-live-dot" /> Live
            </span>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            target="_blank"
            rel="noreferrer"
            className="admin-top-link hidden sm:inline-flex"
          >
            <ExternalLink size={14} />
            View site
          </Link>

          <div className="admin-account-pill">
            <div className="admin-account-avatar">
              <ShieldCheck size={17} />
            </div>
            <div className="hidden min-w-0 md:block">
              <p className="truncate text-xs font-bold text-slate-900">{displayName}</p>
              <p className="truncate text-[10px] font-medium text-slate-500">{admin.email}</p>
            </div>
            <span className="admin-role-pill">{admin.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
