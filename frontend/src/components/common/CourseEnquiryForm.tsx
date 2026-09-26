import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Mail, Phone, Send, User } from "lucide-react";
import { submitCourseEnquiry } from "../../services/api";

export default function CourseEnquiryForm({ courseId, courseTitle }: { courseId: number; courseTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      await submitCourseEnquiry(courseId, {
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("message") || ""),
      });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to submit the enquiry.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm"><CheckCircle2 size={28} /></div>
        <h3 className="mt-5 text-xl font-bold text-slate-950">Enquiry submitted</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">The EMTA team has received your enquiry for {courseTitle}.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <span className="eyebrow">COURSE ENQUIRY</span>
      <h3 className="mt-3 text-2xl font-bold text-slate-950">Talk to our training team</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">Ask about the {courseTitle} program, eligibility, fees and placement support.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label><span className="mb-2 block text-sm font-semibold text-slate-700">Name</span><div className="relative"><User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input name="name" required placeholder="Your name" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div></label>
        <label><span className="mb-2 block text-sm font-semibold text-slate-700">Email</span><div className="relative"><Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input name="email" type="email" required placeholder="you@example.com" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div></label>
        <label className="sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span><div className="relative"><Phone size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input name="phone" type="tel" required placeholder="Your phone number" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div></label>
        <label className="sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">Message</span><textarea name="message" rows={5} placeholder="What would you like to know?" className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></label>
      </div>
      {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
      <button disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60">{loading ? "Submitting..." : "Send enquiry"}<Send size={17} /></button>
    </form>
  );
}
