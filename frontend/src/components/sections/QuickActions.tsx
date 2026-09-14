import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const actions = [
  {
    label: "Work with Us",
    href: "/work-with-us",
    icon: BriefcaseBusiness,
  },
  {
    label: "Partner with Us",
    href: "/partner-with-us",
    icon: Handshake,
  },
  {
    label: "Study with Us",
    href: "/study-with-us",
    icon: GraduationCap,
  },
  {
    label: "Hire with Us",
    href: "/hire-with-us",
    icon: Building2,
  },
];

export default function QuickActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {/* Action buttons */}
      <div
        id="quick-action-links"
        className={`mb-3 flex flex-col items-end gap-2 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.href}
              to={action.href}
              tabIndex={open ? 0 : -1}
              className="group flex items-center gap-3 rounded-full border border-blue-100 bg-white py-2 pl-4 pr-2 text-sm font-semibold text-slate-700 shadow-xl shadow-blue-900/10 transition-all duration-200 hover:-translate-x-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <span>{action.label}</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={17} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Main toggle */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close quick navigation menu" : "Open quick navigation menu"}
        aria-expanded={open}
        aria-controls="quick-action-links"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:bg-blue-700"
      >
        {open ? (
          <X size={22} aria-hidden="true" />
        ) : (
          <Plus size={22} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}