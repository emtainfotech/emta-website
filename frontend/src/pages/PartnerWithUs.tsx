import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Network,
  Send,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";
import { submitContact } from "../services/api";

const partnershipOptions = [
  {
    icon: Handshake,
    title: "Recruitment partnerships",
    text: "Collaborate with EMTA for candidate sourcing and recruitment requirements.",
  },
  {
    icon: Users,
    title: "Training partnerships",
    text: "Explore opportunities to collaborate around training and career-oriented programs.",
  },
  {
    icon: Network,
    title: "Industry collaboration",
    text: "Build connections that create opportunities for candidates, businesses and institutions.",
  },
];

const benefits = [
  "Connect with EMTA's candidate and employer network",
  "Explore recruitment and training collaborations",
  "Discuss requirements with the EMTA team",
  "Build long-term professional partnerships",
];

export default function PartnerWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const message = [
        `Partnership type: ${String(form.get("partnershipType") || "")}`,
        String(form.get("message") || ""),
      ].filter(Boolean).join("\n");
      await submitContact({
        name: String(form.get("contactPerson") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        subject: `Partnership enquiry - ${String(form.get("organization") || "")}`,
        message,
      });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to submit the enquiry");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">PARTNER WITH US</span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build meaningful{" "}
            <span className="text-blue-600">professional partnerships</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Connect with EMTA to explore recruitment, training and industry
            collaboration opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#partnership-form"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start a conversation
              <ArrowRight size={17} />
            </a>

            <Link
              to="/hire-with-us"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              Hire with us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership options */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">COLLABORATE WITH EMTA</span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Explore ways to work together
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Tell us what you are looking to achieve and we can discuss the
            partnership possibilities relevant to your organization.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {partnershipOptions.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-blue-600">
                <Icon size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">WHY PARTNER</span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Turn connections into opportunities
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                Explore a collaboration aligned with your recruitment,
                training or industry requirements.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                    <CheckCircle2 size={19} />
                  </div>

                  <p className="flex items-center text-sm font-semibold leading-6 text-slate-800">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="partnership-form" className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span className="eyebrow">LET&apos;S CONNECT</span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tell us about your partnership idea
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              Share your organization and collaboration requirements so the
              EMTA team can understand how you would like to work together.
            </p>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                <Building2 size={20} />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Looking for recruitment support?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                For an immediate hiring requirement, use our dedicated
                recruitment flow.
              </p>

              <Link
                to="/hire-with-us"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white"
              >
                Hire with us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-4xl border border-emerald-200 bg-emerald-50 p-8 text-center sm:p-10">
              <h3 className="text-2xl font-bold text-slate-950">Enquiry submitted</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Your partnership enquiry has been sent to the EMTA team.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700">Send another enquiry</button>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Organization
                </span>

                <input
                  type="text"
                  name="organization"
                  placeholder="Organization name"
                  required
                  className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Contact person
                </span>

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Your name"
                  required
                  className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact number"
                  className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Partnership type
                </span>

                <select
                  name="partnershipType"
                  required
                  className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="recruitment">Recruitment</option>
                  <option value="training">Training</option>
                  <option value="industry">Industry collaboration</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Tell us more
                </span>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Describe your partnership requirement..."
                  required
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>

            {error && <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Send partnership enquiry"}
              <Send size={17} />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Your enquiry will be stored in the EMTA contact system.
            </p>
          </form>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50">
        <div className="section-shell py-14 sm:py-18">
          <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                HAVE A HIRING REQUIREMENT?
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Need candidates for your next opening?
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Share your requirement through the dedicated hiring flow.
              </p>
            </div>

            <Link
              to="/hire-with-us"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Hire with us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}