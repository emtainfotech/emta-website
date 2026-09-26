import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const candidateLinks = [
  { label: "Browse Jobs", to: "/careers" },
  { label: "For Job Seekers", to: "/for-employee" },
  { label: "Work With Us", to: "/work-with-us" },
  { label: "Job Placement", to: "/job-placement" },
];

const employerLinks = [
  { label: "For Employers", to: "/for-employer" },
  { label: "Hire With Us", to: "/hire-with-us" },
  { label: "Partner With Us", to: "/partner-with-us" },
];

const exploreLinks = [
  { label: "About EMTA", to: "/about" },
  { label: "BFSI Training", to: "/bfsi-training" },
  { label: "Study With Us", to: "/study-with-us" },
  { label: "Career Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4 lg:border-0 lg:py-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-left lg:pointer-events-none"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white">{title}</span>

        <ChevronDown
          size={17}
          className={`text-slate-400 transition-transform lg:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 lg:mt-5 lg:block lg:max-h-none ${
          open ? "mt-4 max-h-80" : "max-h-0"
        }`}
      >
        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <span>{link.label}</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 right-0 h-136 w-136 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Closing CTA */}
        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/6 px-6 py-8 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                  EMTA • Your next move
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to take the next step in your career?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Explore opportunities, build job-ready skills or connect
                  with our recruitment team.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore jobs
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to EMTA
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main footer */}
        <section className="section-shell py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-blue-600 shadow-lg shadow-blue-950/30">
                  EM
                </span>

                <span>
                  <span className="block text-lg font-bold tracking-tight">
                    EMTA
                  </span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    Elite Manpower & Training Academy
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Elite Manpower and Training Academy (EMTA), founded in 2020,
                connects job seekers, training programs and hiring partners
                across career opportunities and BFSI-focused development.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="tel:+918962540996"
                  className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Phone
                    size={17}
                    className="mt-0.5 shrink-0 text-sky-400"
                  />
                  <span>+91 89625 40996</span>
                  <ArrowUpRight
                    size={14}
                    className="mt-0.5 opacity-0 transition group-hover:opacity-100"
                  />
                </a>

                <a
                  href="mailto:hr@emta.co.in"
                  className="group flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-sky-400"
                  />
                  <span>hr@emta.co.in</span>
                  <ArrowUpRight
                    size={14}
                    className="mt-0.5 opacity-0 transition group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://maps.google.com/?q=Vatsalya+AF-3+Scheme+No+54+Vijay+Nagar+Indore"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-sm leading-6 text-slate-400 transition hover:text-white"
                >
                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <span>
                    Flat No. 102, Vatsalya, AF-3, Scheme No. 54,
                    Vijay Nagar, Indore – 452010
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="mt-1 shrink-0 opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </div>

              {/* Socials */}
              <div className="mt-7 flex flex-wrap gap-2">
                <a
                  href="https://www.facebook.com/people/EMTA/100076544892050/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EMTA Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                >
                  <FaFacebookF size={17} />
                </a>

                <a
                  href="https://www.instagram.com/emta.placements/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EMTA Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                >
                  <FaInstagram size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/company/elite-manpower-training-academy/about/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EMTA LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                >
                  <FaLinkedinIn size={17} />
                </a>

                <a
                  href="https://x.com/EliteManpowerT1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EMTA on X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                >
                  <FaXTwitter size={16} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <FooterLinkGroup title="For Job Seekers" links={candidateLinks} />
            <FooterLinkGroup title="For Employers" links={employerLinks} />
            <FooterLinkGroup title="Explore EMTA" links={exploreLinks} />
            <div>
              <p className="text-sm font-semibold text-white">Internal</p>
              <div className="mt-5">
                <Link to="/admin/login" className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
                  <span>Admin Portal</span>
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="section-shell flex flex-col gap-3 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>© EMTA, All rights reserved.</span>
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              <span>MSME Registered</span>
            </div>

            <a
              href="https://emtainfotech.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              Designed by EMTA INFOTECH
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}