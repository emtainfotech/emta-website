import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import type { AdminUser } from "../../services/adminApi";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  const { admin } = useOutletContext<{ admin: AdminUser }>();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="admin-portal-shell admin-layout min-h-screen text-slate-950 lg:flex">
      <div className="admin-layout-aura admin-layout-aura-one" aria-hidden="true" />
      <div className="admin-layout-aura admin-layout-aura-two" aria-hidden="true" />
      <div className="admin-layout-grid" aria-hidden="true" />

      <AdminSidebar />

      <div className="relative min-w-0 flex-1">
        <AdminHeader onMenu={() => setMobileOpen((open) => !open)} />

        {mobileOpen && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div
              className="h-full w-80 max-w-[88vw] shadow-[24px_0_80px_rgba(2,6,23,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <AdminSidebar mobile />
            </div>
          </div>
        )}

        <main className="relative z-10 p-4 sm:p-6 lg:p-8 xl:p-10">
          <Outlet context={{ admin }} />
        </main>
      </div>
    </div>
  );
}
