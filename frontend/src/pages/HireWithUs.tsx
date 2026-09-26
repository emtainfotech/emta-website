import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  Send,
  Users,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { submitContact } from "../services/api";

const supportPoints = [
  "Candidate sourcing for open positions",
  "Recruitment and staffing assistance",
  "Candidate screening and shortlisting support",
  "Coordination throughout the hiring process",
];

export default function HireWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const message = [
      `Role: ${String(form.get("role") || "")}`,
      `Openings: ${String(form.get("openings") || "")}`,
      `Hiring requirement: ${String(form.get("requirement") || "")}`,
    ].join("\n");
    try {
      await submitContact({
        name: String(form.get("contactPerson") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        subject: `Hiring requirement - ${String(form.get("companyName") || "")}`,
        message,
      });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to submit the requirement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">HIRE WITH US</span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Tell us who you&apos;re{" "}
            <span className="text-blue-600">looking for</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Share your hiring requirement with EMTA and our team can assist
            with candidate sourcing and recruitment support.
          </p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left */}
          <div>
            <span className="eyebrow">RECRUITMENT SUPPORT</span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A simpler way to start your hiring requirement
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Provide the basic details of the role you need to hire for and
              the EMTA team can follow up regarding the requirement.
            </p>

            <div className="mt-8 space-y-4">
              {supportPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                DIRECT CONTACT
              </p>

              <div className="mt-5 space-y-4">
                <a
                  href="mailto:hr@emta.co.in"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
                >
                  <Mail size={17} className="text-sky-300" />
                  hr@emta.co.in
                </a>

                <a
                  href="tel:+918962540996"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
                >
                  <Phone size={17} className="text-sky-300" />
                  +91 89625 40996
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
            {submitted ? (
              <div className="flex min-h-140 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-950">
                  Requirement submitted
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                  Your hiring requirement has been submitted to the EMTA team.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  Submit another requirement
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">HIRING REQUIREMENT</span>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                  Share your requirement
                </h2>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label>
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Company name
                      </span>

                      <div className="relative">
                        <Building2
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="text"
                          name="companyName"
                          placeholder="Your company"
                          required
                          className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </label>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Contact person
                      </span>

                      <div className="relative">
                        <Users
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="text"
                          name="contactPerson"
                          placeholder="Your name"
                          required
                          className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
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
                        required
                        className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label>
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Role / designation
                      </span>

                      <input
                        type="text"
                        name="role"
                        placeholder="e.g. Sales Executive"
                        required
                        className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Number of openings
                      </span>

                      <input
                        type="number"
                        name="openings"
                        min="1"
                        placeholder="e.g. 10"
                        required
                        className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </label>
                  </div>

                  <label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Hiring requirement
                    </span>

                    <textarea
                      name="requirement"
                      rows={6}
                      placeholder="Tell us about the role, location, experience and other requirements..."
                      required
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    {loading ? "Submitting..." : "Send hiring requirement"}
                    <Send size={17} />
                  </button>

                  {error && <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
                  <p className="text-center text-xs leading-5 text-slate-400">
                    Your requirement will be stored in the EMTA enquiry system.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="section-shell py-14 sm:py-18">
          <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                MORE RECRUITMENT OPTIONS
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Need a broader recruitment solution?
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Explore EMTA&apos;s recruitment-focused services and partnership
                options.
              </p>
            </div>

            <Link
              to="/partner-with-us"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Partner with us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}