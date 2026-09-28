import { ChevronDown, Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `group relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
    isActive ? "bg-gradient-to-r from-indigo-50 via-white to-cyan-50 text-indigo-700 shadow-sm" : "text-slate-600 hover:bg-white/70 hover:text-indigo-700"
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
    isActive
      ? "bg-blue-50 text-blue-700 shadow-sm"
      : "text-slate-700 hover:bg-sky-50 hover:text-blue-700"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setJobsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-visible rounded-[1.55rem] border border-white/80 bg-white/82 shadow-[0_18px_55px_rgba(20,54,93,0.09)] backdrop-blur-2xl">
        <nav className="flex min-h-[4.55rem] items-center justify-between px-3 sm:px-5 lg:px-6" aria-label="Primary navigation">
          <Link to="/" onClick={closeMobileMenu} className="shrink-0" aria-label="EMTA home">
            <img src="/assets/logo.png" alt="Elite Manpower & Training Academy" width={150} height={52} className="h-10 w-auto object-contain sm:h-11" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>

            <div className="relative" onMouseEnter={() => setJobsOpen(true)} onMouseLeave={() => setJobsOpen(false)}>
              <button type="button" aria-haspopup="menu" aria-expanded={jobsOpen} onClick={() => setJobsOpen((open) => !open)} className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition ${jobsOpen ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"}`}>
                Jobs <ChevronDown size={15} className={`transition-transform ${jobsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {jobsOpen && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3" role="menu">
                  <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white/95 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
                    <Link to="/for-employer" role="menuitem" onClick={() => setJobsOpen(false)} className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
                      <span>For Employers</span><ArrowUpRight size={15} className="opacity-40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                    <Link to="/for-employee" role="menuitem" onClick={() => setJobsOpen(false)} className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
                      <span>For Job Seekers</span><ArrowUpRight size={15} className="opacity-40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/bfsi-training" className={navLinkClass}>BFSI Training</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            <Link to="/careers" className="ml-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(79,70,229,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(79,70,229,.28)]">
              <Sparkles size={15} /> Apply for Job
            </Link>
          </div>

          <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} className="rounded-2xl border border-blue-100 bg-blue-50 p-2.5 text-slate-800 transition hover:bg-blue-100 lg:hidden">
            {mobileOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-blue-100/70 px-3 pb-4 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              <NavLink to="/" onClick={closeMobileMenu} className={mobileNavLinkClass}>Home</NavLink>
              <NavLink to="/careers" onClick={closeMobileMenu} className={mobileNavLinkClass}>Careers</NavLink>
              <div>
                <button type="button" onClick={() => setJobsOpen((open) => !open)} aria-expanded={jobsOpen} className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold ${jobsOpen ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-sky-50 hover:text-blue-700"}`}>
                  Jobs <ChevronDown size={17} className={`transition-transform ${jobsOpen ? "rotate-180" : ""}`} />
                </button>
                {jobsOpen && (
                  <div className="ml-3 mt-1 border-l border-blue-100 pl-3">
                    <Link to="/for-employer" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">For Employers</Link>
                    <Link to="/for-employee" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">For Job Seekers</Link>
                  </div>
                )}
              </div>
              <NavLink to="/bfsi-training" onClick={closeMobileMenu} className={mobileNavLinkClass}>BFSI Training</NavLink>
              <NavLink to="/blog" onClick={closeMobileMenu} className={mobileNavLinkClass}>Blog</NavLink>
              <NavLink to="/about" onClick={closeMobileMenu} className={mobileNavLinkClass}>About</NavLink>
              <NavLink to="/contact" onClick={closeMobileMenu} className={mobileNavLinkClass}>Contact</NavLink>
              <Link to="/careers" onClick={closeMobileMenu} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3.5 text-sm font-bold text-white shadow-md">Apply for Job</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
