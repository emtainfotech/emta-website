import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "BFSI Training", href: "/bfsi-training" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setJobsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="shrink-0"
        >
          <img
            src="/assets/logo.png"
            alt="Elite Manpower & Training Academy"
            width={150}
            height={52}
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"
              }`
            }
          >
            About
          </NavLink>

          {/* Jobs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setJobsOpen(true)}
            onMouseLeave={() => setJobsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={jobsOpen}
              onClick={() => setJobsOpen((open) => !open)}
              className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-blue-700"
            >
              Jobs
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  jobsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {jobsOpen && (
              <div
                className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3"
                role="menu"
              >
                <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-2xl shadow-blue-900/10">
                  <Link
                    to="/for-employer"
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setJobsOpen(false)}
                  >
                    For Employers
                  </Link>

                  <Link
                    to="/for-employee"
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setJobsOpen(false)}
                  >
                    For Job Seekers
                  </Link>
                </div>
              </div>
            )}
          </div>

          {mainNavItems.slice(2).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/work-with-us"
            className="ml-3 inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Apply for Job
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="rounded-xl border border-blue-100 bg-blue-50 p-2.5 text-slate-800 transition hover:bg-blue-100 lg:hidden"
        >
          {mobileOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-blue-100 bg-white px-4 pb-5 pt-3 shadow-xl shadow-blue-900/5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-sky-50"
            >
              About
            </NavLink>

            {/* Mobile Jobs Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setJobsOpen((open) => !open)}
                aria-expanded={jobsOpen}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-slate-700 hover:bg-sky-50"
              >
                Jobs

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    jobsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {jobsOpen && (
                <div className="ml-4 border-l border-blue-100 pl-3">
                  <Link
                    to="/for-employer"
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    For Employers
                  </Link>

                  <Link
                    to="/for-employee"
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    For Job Seekers
                  </Link>
                </div>
              )}
            </div>

            {mainNavItems.slice(2).map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-sky-50"
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/work-with-us"
              onClick={closeMobileMenu}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3.5 text-center text-sm font-semibold text-white"
            >
              Apply for Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}