import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
import ScrollToTop from "../common/ScrollToTop";

export default function PublicLayout() {
  const { pathname } = useLocation();
  const routeKey = pathname.split("/").filter(Boolean)[0] || "home";

  return (
    <div className={`public-site route-${routeKey} min-h-screen text-slate-950`}>
      <div className="route-aura" aria-hidden="true">
        <span className="route-aura__orb route-aura__orb--one" />
        <span className="route-aura__orb route-aura__orb--two" />
        <span className="route-aura__orb route-aura__orb--three" />
      </div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}
