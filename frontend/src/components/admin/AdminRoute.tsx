import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentAdmin, type AdminUser } from "../../services/adminApi";

export default function AdminRoute() {
  const location = useLocation();
  const [state, setState] = useState<"checking" | "authenticated" | "unauthenticated">("checking");
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  useEffect(() => {
    let mounted = true;
    getCurrentAdmin()
      .then((response) => { if (mounted) { setAdmin(response.data); setState("authenticated"); } })
      .catch(() => { if (mounted) setState("unauthenticated"); });
    return () => { mounted = false; };
  }, []);

  if (state === "checking") return <div className="flex min-h-screen items-center justify-center bg-slate-50"><div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" /></div>;
  if (state === "unauthenticated") return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  return <Outlet context={{ admin }} />;
}
