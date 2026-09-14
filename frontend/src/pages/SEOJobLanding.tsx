import { ArrowLeft, ArrowRight, BriefcaseBusiness, MapPin, WalletCards } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import { jobs } from "../data/jobs";

const slugToJobId: Record<string, string> = {
  "customer-care-executive-vijay-nagar": "new-cce-vijay-nagar",
  "inside-sales-executive": "new-inside-sales",
  "customer-care-swiggy": "new-cce-swiggy",
  "customer-success-associate-vivint": "new-csa-vivint",
  "customer-support-walmart": "new-cse-walmart",
  "customer-support-seller-support": "new-cse-seller-support",
  "senior-accountant": "new-senior-accountant",
};

export default function SEOJobLanding() {
  const { slug } = useParams();

  const jobId = slug ? slugToJobId[slug] : undefined;
  const job = jobs.find((item) => item.id === jobId);

  if (!job) {
    return (
      <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-slate-950">
            Job opening not found
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            This job opening may no longer be active.
          </p>

          <Link
            to="/careers"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Browse current jobs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${job.title} in ${job.location} | ${job.company} | EMTA`}
        description={
          job.description ||
          `Apply for ${job.title} at ${job.company}. View location, salary, eligibility and application details.`
        }
        canonical={`https://emta.co.in/jobs/${slug}`}
      />

      <main className="overflow-hidden">
        <section className="border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
          <div className="section-shell py-14 sm:py-18 lg:py-22">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft size={16} />
              Back to careers
            </Link>

            <div className="mt-8 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <BriefcaseBusiness size={13} />
                Actively hiring
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {job.title}
              </h1>

              <p className="mt-3 text-lg font-medium text-slate-500">
                {job.company}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-blue-600" />
                  {job.location}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  <WalletCards size={16} className="text-blue-600" />
                  {job.salary}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-18 lg:py-22">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-slate-950">
                Job overview
              </h2>

              <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">
                {job.description}
              </p>

              {job.responsibilities?.length ? (
                <>
                  <h2 className="mt-10 text-2xl font-bold text-slate-950">
                    Responsibilities
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {job.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-slate-600"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {job.requirements?.length ? (
                <>
                  <h2 className="mt-10 text-2xl font-bold text-slate-950">
                    Requirements
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {job.requirements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-slate-600"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>

            <aside className="h-fit rounded-3xl border border-blue-100 bg-blue-50/60 p-6 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Ready to apply?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Apply for this role
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Review the complete job details and submit your application
                through EMTA.
              </p>

              <Link
                to={`/jobs/${job.id}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View full job details
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Contact EMTA
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}