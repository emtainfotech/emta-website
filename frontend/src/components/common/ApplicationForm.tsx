import { useState } from "react";
import { submitApplication } from "../../services/api";
import type { ChangeEvent, FormEvent } from "react";
import {
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  Phone,
  Send,
  User,
} from "lucide-react";

interface ApplicationFormProps {
  jobId: number;
  jobTitle: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  experience: string;
  qualification: string;
  location: string;
  resume: File | null;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  experience: "",
  qualification: "",
  location: "",
  resume: null,
};

export default function ApplicationForm({
  jobId,
  jobTitle,
}: ApplicationFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    setForm((current) => ({
      ...current,
      resume: file,
    }));

    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!form.resume) {
      setError("Please upload your resume.");
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (form.resume.size > maxSize) {
      setError("Resume size must be 5 MB or less.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await submitApplication({
        jobId,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        experience: form.experience.trim(),
        qualification: form.qualification.trim(),
        location: form.location.trim(),
        coverMessage: form.message.trim(),
        resume: form.resume,
      });

      setSubmitted(true);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to submit your application.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 size={30} />
        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-950">
          Application prepared successfully
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
          Your application details for{" "}
          <span className="font-semibold">{jobTitle}</span> have been
          validated successfully.
        </p>

        <p className="mt-4 text-xs text-slate-500">
          Your application has been sent to the EMTA recruitment system.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-7 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-8">
        <span className="eyebrow">APPLICATION</span>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
          Apply for this position
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Applying for:{" "}
          <span className="font-semibold text-slate-700">{jobTitle}</span>
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Full name <span className="text-red-500">*</span>
          </span>

          <div className="relative">
            <User
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Email address <span className="text-red-500">*</span>
          </span>

          <div className="relative">
            <Mail
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Phone number <span className="text-red-500">*</span>
          </span>

          <div className="relative">
            <Phone
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              inputMode="tel"
              className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Experience
          </span>
          <input
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="e.g. Fresher / 2 years"
            className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Qualification
          </span>
          <input
            type="text"
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            placeholder="e.g. B.Tech / B.Com"
            className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Current location
          </span>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="City / location"
            className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Resume <span className="text-red-500">*</span>
          </span>

          <div className="relative rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50/40">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <FileText size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {form.resume?.name || "Upload your resume"}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  PDF, DOC or DOCX · Maximum 5 MB
                </p>
              </div>

              <label className="cursor-pointer rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50">
                Browse
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Message
          </span>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us briefly about yourself..."
            rows={5}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </label>
      </div>

      {error && (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Submit application
            <Send size={17} />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        Your information will be used for this job application.
      </p>
    </form>
  );
}