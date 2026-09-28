import { ArrowRight, Clock3, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { submitContact } from "../services/api";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      await submitContact({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        subject: String(form.get("subject") || "Website contact enquiry"),
        message: String(form.get("message") || ""),
      });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to send your message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Contact EMTA | Job Consultancy & Training Academy in Indore" description="Contact Elite Manpower & Training Academy for recruitment, career guidance, placement and BFSI training enquiries." canonical="https://emta.co.in/contact" />
      <main className="overflow-hidden bg-[#f7f4ff] text-slate-950">
        <section className="relative isolate overflow-hidden bg-[#12102a] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(244,114,182,0.22),transparent_28%),linear-gradient(120deg,#12102a,#201342_52%,#101a32)]" />
          <div className="absolute left-[8%] top-24 h-32 w-32 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm" />
          <div className="absolute right-[12%] bottom-8 h-40 w-40 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/5 blur-md" />
          <div className="section-shell relative py-20 sm:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur"><Sparkles size={14} /> Contact EMTA</div>
              <h1 className="mt-6 text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">Let&apos;s turn a question into a <span className="bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">conversation.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Whether you are looking for a job, training opportunity, recruitment support or simply need guidance, reach the EMTA team directly.</p>
            </div>
          </div>
        </section>

        <section className="section-shell relative -mt-10 pb-16 sm:-mt-16 sm:pb-24">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="space-y-4">
              <a href="https://maps.google.com/?q=Vatsalya+AF-3+Scheme+No+54+Vijay+Nagar+Indore" target="_blank" rel="noreferrer" className="group block rounded-[1.7rem] border border-white/60 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(76,29,149,0.14)]">
                <div className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-100 to-violet-100 text-violet-700"><MapPin size={19} /></div><div><p className="text-sm font-bold">Office</p><p className="mt-1 text-sm leading-6 text-slate-500">Flat No. 102, Vatsalya, AF-3, Scheme No. 54,<br />Vijay Nagar, Indore – 452010<br />Behind the lane of Golden Gate Hotel,<br />near Satya Sai Square</p></div></div>
              </a>
              <a href="mailto:hr@emta.co.in" className="group block rounded-[1.7rem] border border-white/60 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(76,29,149,0.14)]">
                <div className="flex items-center gap-4"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-100 to-violet-100 text-violet-700"><Mail size={19} /></div><div><p className="text-sm font-bold">Email</p><p className="mt-1 text-sm text-slate-500">hr@emta.co.in</p></div></div>
              </a>
              <a href="tel:+918962540996" className="group block rounded-[1.7rem] border border-white/60 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(76,29,149,0.14)]">
                <div className="flex items-center gap-4"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-100 to-violet-100 text-violet-700"><Phone size={19} /></div><div><p className="text-sm font-bold">Phone</p><p className="mt-1 text-sm text-slate-500">+91 89625 40996</p></div></div>
              </a>
              <div className="rounded-[1.7rem] bg-linear-to-br from-violet-700 to-indigo-950 p-5 text-white shadow-[0_24px_70px_rgba(76,29,149,0.25)]"><div className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10"><Clock3 size={19} /></div><div><p className="text-sm font-bold">Visit us</p><p className="mt-1 text-sm leading-6 text-violet-100">Contact the EMTA team for office availability and appointments.</p></div></div></div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_30px_90px_rgba(76,29,149,0.12)] sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-100 blur-3xl" />
              {submitted ? (
                <div className="relative flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-cyan-100 to-emerald-100 text-emerald-600"><Send size={25} /></div>
                  <h2 className="mt-6 text-3xl font-bold">Message sent successfully.</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">Your enquiry has reached the EMTA team. We&apos;ll get back to you using the details you provided.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700">Send another message</button>
                </div>
              ) : (
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">Send a message</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">Tell us what you need.</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">A clear message helps us route your enquiry to the right EMTA team.</p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label><span className="mb-2 block text-sm font-semibold text-slate-700">Name</span><input name="name" required placeholder="Your name" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100" /></label>
                      <label><span className="mb-2 block text-sm font-semibold text-slate-700">Email</span><input name="email" type="email" required placeholder="you@example.com" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100" /></label>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label><span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span><input name="phone" type="tel" placeholder="Your phone number" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100" /></label>
                      <label><span className="mb-2 block text-sm font-semibold text-slate-700">Subject</span><input name="subject" placeholder="How can we help?" className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100" /></label>
                    </div>
                    <label><span className="mb-2 block text-sm font-semibold text-slate-700">Message</span><textarea name="message" required rows={6} placeholder="Write your enquiry..." className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100" /></label>
                    {error ? <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p> : null}
                    <button type="submit" disabled={loading} className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Sending..." : "Send message"} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-violet-100 bg-white py-14">
          <div className="section-shell flex flex-col gap-5 rounded-[1.8rem] bg-linear-to-r from-cyan-50 via-violet-50 to-fuchsia-50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Need something specific?</p><h2 className="mt-2 text-2xl font-bold">Choose the route that matches your goal.</h2></div>
            <div className="flex flex-wrap gap-3"><Link to="/for-job-seekers" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">I&apos;m a job seeker</Link><Link to="/for-employers" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-1">I&apos;m an employer</Link></div>
          </div>
        </section>
      </main>
    </>
  );
}
