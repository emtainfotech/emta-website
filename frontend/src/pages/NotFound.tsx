import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | EMTA"
        description="The requested EMTA page could not be found."
        noindex
      />

      <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-blue-600">
            <SearchX size={28} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            404 ERROR
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Page not found
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}