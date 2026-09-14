import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Recruitment Solution", href: "/hire-with-us" },
  { label: "Courses & Fees", href: "/bfsi-training" },
  { label: "Careers", href: "/careers" },
  { label: "BFSI", href: "/bfsi-training" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/EMTA/100076544892050/?paipv=0&eav=AfbXq3U78y0pbd2H_FttF7WA0BS0qfYH053dyEVKd0eIm1buJ6xPKJlNyEU3GXUlZfU",
    short: "f",
  },
  {
    label: "X",
    href: "https://x.com/EliteManpowerT1/status/1553354721330692098",
    short: "𝕏",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/emta.placements/?igsh=eXN6cXdxNHFpZzAy",
    short: "ig",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/elite-manpower-training-academy/about/",
    short: "in",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-blue-600 font-bold shadow-lg shadow-sky-900/30">
                E
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight">EMTA</p>
                <p className="text-xs text-slate-400">
                  Elite Manpower & Training Academy
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Elite Manpower and Training Academy (EMTA), founded in 2020 by
              visionaries Abhijeet Raghuwanshi, is a trailblazer in BFSI
              training and job placement.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, short }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-white/5 text-slate-300 transition hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-300"
                >
                  <span className="text-xs font-bold">{short}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Useful links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Useful Links
            </p>

            <div className="mt-6 space-y-3">
              {usefulLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group flex items-center justify-between border-b border-slate-800 pb-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={15}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Get in touch
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                  <MapPin size={18} />
                </div>
                <p className="text-sm leading-6 text-slate-400">
                  Flat No. 102, Vatsalya, AF-3, Scheme No. 54,
                  <br />
                  Vijay Nagar, Indore – 452010
                  <br />
                  Behind the lane of Golden Gate Hotel,
                  <br />
                  near Satya Sai Square
                </p>
              </div>

              <a
                href="mailto:hr@emta.co.in"
                className="flex items-center gap-4 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                  <Mail size={18} />
                </span>
                hr@emta.co.in
              </a>

              <a
                href="tel:+918962540996"
                className="flex items-center gap-4 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                  <Phone size={18} />
                </span>
                +91 89625 40996
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>EMTA, All rights reserved. | MSME Registered</p>

          <p>
            Designed By{" "}
            <a
              href="https://emtainfotech.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-sky-300"
            >
              EMTA INFOTECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}