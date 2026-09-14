import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold">EMTA</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Elite Manpower & Training Academy
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/about" className="hover:text-white">
                About
              </Link>
              <Link to="/careers" className="hover:text-white">
                Careers
              </Link>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Services
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/bfsi-training" className="hover:text-white">
                BFSI Training
              </Link>
              <Link to="/job-placement" className="hover:text-white">
                Job Placement
              </Link>
              <Link to="/for-employer" className="hover:text-white">
                For Employers
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Indore, Madhya Pradesh, India
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} EMTA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}