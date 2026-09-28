import { useState } from "react";
import type { ReactNode } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { adminLogin } from "../../services/adminApi";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const from =
    (location.state as { from?: string } | null)?.from || "/admin";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await adminLogin(email, password);
      navigate(from, { replace: true });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to sign in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-shell min-h-screen overflow-hidden">
      <div className="admin-login-noise" aria-hidden="true" />
      <div className="admin-login-orb admin-login-orb-one" aria-hidden="true" />
      <div className="admin-login-orb admin-login-orb-two" aria-hidden="true" />
      <div className="admin-login-orb admin-login-orb-three" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1550px] lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden overflow-hidden px-10 py-12 lg:flex xl:px-16">
          <div className="admin-login-grid" aria-hidden="true" />
          <div className="admin-login-ring admin-login-ring-one" aria-hidden="true" />
          <div className="admin-login-ring admin-login-ring-two" aria-hidden="true" />

          <div className="relative flex w-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-white">
                <div className="admin-login-brand-mark">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-sm font-black tracking-tight">EMTA</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200/75">Admin control room</p>
                </div>
              </div>

              <div className="mt-20 max-w-xl xl:mt-28">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md">
                  <Sparkles size={12} /> Secure operations
                </div>
                <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] text-white xl:text-7xl">
                  Run the hiring engine from one place.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-indigo-100/85">
                  Keep vacancies, applications and recruitment operations connected to the same live system your candidates use.
                </p>

                <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
                  <FeatureCard icon={<BriefcaseIcon />} title="Live vacancies" text="Create and publish roles without touching the public code." />
                  <FeatureCard icon={<UsersIcon />} title="Talent pipeline" text="Move candidates through review, interview and selection." />
                  <FeatureCard icon={<CloudIcon />} title="Cloud resumes" text="Open uploaded resumes directly from applications." />
                  <FeatureCard icon={<ShieldCheck size={17} />} title="Protected access" text="Admin sessions use secure HttpOnly cookie authentication." />
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[11px] font-medium text-white/45">
              <span className="admin-live-dot" />
              EMTA recruitment infrastructure
              <span className="h-1 w-1 rounded-full bg-white/25" />
              Indore
            </div>
          </div>

          <div className="admin-login-floating-card admin-login-floating-card-one" aria-hidden="true">
            <p>Active jobs</p>
            <strong>22</strong>
            <span>Live vacancy network</span>
          </div>
          <div className="admin-login-floating-card admin-login-floating-card-two" aria-hidden="true">
            <p>Pipeline</p>
            <strong>24/7</strong>
            <span>Operational visibility</span>
          </div>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-xl">
            <div className="mb-5 flex items-center justify-between lg:hidden">
              <div className="flex items-center gap-2.5 text-white">
                <div className="admin-login-brand-mark h-11 w-11">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <p className="text-sm font-black">EMTA Admin</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/75">Control room</p>
                </div>
              </div>
            </div>

            <div className="admin-login-card rounded-[32px] p-6 sm:p-8 xl:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-700">
                    <ShieldCheck size={12} /> Internal access
                  </div>
                  <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Welcome back.</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Sign in to manage EMTA jobs, candidate applications and recruitment operations.
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 text-white shadow-lg shadow-indigo-500/20 sm:flex">
                  <Sparkles size={19} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <label>
                  <span className="admin-field-label">Email address</span>
                  <div className="relative">
                    <Mail size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="admin-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoComplete="username"
                      placeholder="admin@emta.co.in"
                      className="admin-login-input pl-11"
                    />
                  </div>
                </label>

                <label>
                  <span className="admin-field-label">Password</span>
                  <div className="relative">
                    <LockKeyhole size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="admin-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="admin-login-input pl-11 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </label>

                {error && (
                  <div role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading} className="admin-login-submit disabled:cursor-not-allowed disabled:opacity-60">
                  <span>{loading ? "Signing in..." : "Enter control room"}</span>
                  <ArrowRight size={17} />
                </button>
              </form>

              <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.55)]" />
                  Protected admin session
                </div>
                <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 transition hover:text-violet-600">
                  Back to website <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="admin-login-feature-card rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">{icon}</div>
      <p className="mt-3 text-sm font-bold text-white">{title}</p>
      <p className="mt-1.5 text-[11px] leading-5 text-indigo-100/60">{text}</p>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.8]">
      <path d="M9 6V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V6" />
      <rect x="3" y="6" width="18" height="14" rx="2.2" />
      <path d="M3 11h18M10 11v1.4h4V11" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.8]">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 4.8a2.7 2.7 0 1 1 0 5.2M16.6 13.4a4.4 4.4 0 0 1 4 4.5" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.8]">
      <path d="M7.3 18.5h9.1a4.1 4.1 0 1 0-.7-8.1A5.4 5.4 0 0 0 5.2 11a3.8 3.8 0 0 0 2.1 7.5Z" />
    </svg>
  );
}
