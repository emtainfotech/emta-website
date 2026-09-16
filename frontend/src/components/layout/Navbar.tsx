import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-blue-50 text-blue-700"
      : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-blue-50 text-blue-700"
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
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="shrink-0 transition-opacity duration-200 hover:opacity-90"
          aria-label="EMTA home"
        >
          <img
            src="/assets/logo.png"
            alt="Elite Manpower & Training Academy"
            width={150}
            height={52}
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Home */}
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {/* Careers */}
          <NavLink to="/careers" className={navLinkClass}>
            Careers
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
              className={`flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                jobsOpen
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"
              }`}
            >
              Jobs

              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  jobsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {jobsOpen && (
              <div
                className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3"
                role="menu"
              >
                <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-2xl shadow-blue-900/10">
                  <Link
                    to="/for-employer"
                    role="menuitem"
                    onClick={() => setJobsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    For Employers
                  </Link>

                  <Link
                    to="/for-employee"
                    role="menuitem"
                    onClick={() => setJobsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    For Job Seekers
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* BFSI Training */}
          <NavLink to="/bfsi-training" className={navLinkClass}>
            BFSI Training
          </NavLink>

          {/* Blog */}
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          {/* About */}
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Contact */}
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          {/* CTA */}
          <Link
            to="/work-with-us"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
          >
            Apply for Job
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
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
        <div className="border-t border-blue-100 bg-white/95 px-4 pb-5 pt-3 shadow-xl shadow-blue-900/5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {/* Home */}
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={mobileNavLinkClass}
            >
              Home
            </NavLink>

            {/* Careers */}
            <NavLink
              to="/careers"
              onClick={closeMobileMenu}
              className={mobileNavLinkClass}
            >
              Careers
            </NavLink>

            {/* Jobs */}
            <div>
              <button
                type="button"
                onClick={() => setJobsOpen((open) => !open)}
                aria-expanded={jobsOpen}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition ${
                  jobsOpen
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-sky-50 hover:text-blue-700"
                }`}
              >
                Jobs

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    jobsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {jobsOpen && (
                <div className="ml-4 mt-1 border-l border-blue-100 pl-3">
                  <Link
                    to="/for-employer"
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    For Employers
                  </Link>

                  <Link
                    to="/for-employee"
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    For Job Seekers
                  </Link>
                </div>
              )}
            </div>

            {/* BFSI Training */}
            <NavLink
              to="/bfsi-training"
              onClick={closeMobileMenu}
              className={mobileNavLinkClass}
            >
              BFSI Training
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              onClick={closeMobileMenu}
              className={mobileNavLinkClass}
            >
              Blog
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={mobileNavLinkClass}
            >
              About
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={mobileNavLinkClass}
            >
              Contact
            </NavLink>

            {/* CTA */}
            <Link
              to="/work-with-us"
              onClick={closeMobileMenu}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Apply for Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}