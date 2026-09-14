import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">CONTACT EMTA</span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let&apos;s start a{" "}
            <span className="text-blue-600">conversation</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Whether you are looking for a job, training opportunity or
            recruitment support, get in touch with the EMTA team.
          </p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div>
            <span className="eyebrow">GET IN TOUCH</span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              We&apos;d love to hear from you.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              Reach the EMTA team using the contact details below.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://maps.google.com/?q=Vatsalya+AF-3+Scheme+No+54+Vijay+Nagar+Indore"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Flat No. 102, Vatsalya, AF-3, Scheme No. 54,
                    <br />
                    Vijay Nagar, Indore – 452010
                    <br />
                    Behind the lane of Golden Gate Hotel,
                    <br />
                    near Satya Sai Square
                  </p>
                </div>
              </a>

              <a
                href="mailto:hr@emta.co.in"
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    hr@emta.co.in
                  </p>
                </div>
              </a>

              <a
                href="tel:+918962540996"
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    +91 89625 40996
                  </p>
                </div>
              </a>

              <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Visit us
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Contact the EMTA team for office availability and
                    appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              {submitted ? (
                <div className="flex min-h-112.5 flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Send size={25} />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    Message prepared successfully
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    Your message has passed the frontend validation. The
                    server-side contact endpoint will be connected separately.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <span className="eyebrow">SEND A MESSAGE</span>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    How can we help?
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label>
                        <span className="mb-2 block text-sm font-semibold text-slate-700">
                          Name
                        </span>

                        <input
                          name="name"
                          type="text"
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
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </label>
                    </div>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone
                      </span>

                      <input
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Message
                      </span>

                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Tell us how we can help..."
                        required
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Send message
                      <Send size={17} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}