import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import type { AdminUser } from "../../services/adminApi";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  const { admin } = useOutletContext<{ admin: AdminUser }>();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 lg:flex">
      <AdminSidebar />
      <div className="min-w-0 flex-1">
        <AdminHeader onMenu={() => setMobileOpen((open) => !open)} />
        {mobileOpen && <div className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" onClick={() => setMobileOpen(false)}><div className="h-full w-72 bg-slate-950" onClick={(event) => event.stopPropagation()}><div className="h-full"><AdminSidebar mobile /></div></div></div>}
        <main className="p-4 sm:p-6 lg:p-8"><Outlet context={{ admin }} /></main>
      </div>
    </div>
  );
}
