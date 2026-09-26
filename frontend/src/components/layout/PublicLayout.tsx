import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}
