import { useMemo, useState } from "react";
import { BriefcaseBusiness, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import JobCard from "../components/common/JobCard";
import { jobs } from "../data/jobs";

export default function Careers() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");

  const locations = useMemo(() => {
    const values = jobs
      .map((job) => job.location)
      .filter(Boolean)
      .map((value) => value.trim());

    return ["All Locations", ...Array.from(new Set(values))];
  }, []);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query);

      const matchesLocation =
        location === "All Locations" || job.location === location;

      return matchesSearch && matchesLocation;
    });
  }, [search, location]);

  const clearFilters = () => {
    setSearch("");
    setLocation("All Locations");
  };

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate border-b border-slate-200 bg-linear-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">CAREERS</span>

            <h1 className="section-title mt-4 max-w-3xl">
              Find your next{" "}
              <span className="text-blue-600">opportunity</span>
            </h1>

            <p className="section-description mt-5 max-w-2xl">
              Explore current job openings and discover opportunities that
              match your skills, experience and career goals.
            </p>
          </div>

          {/* Search panel */}
          <div className="mt-10 rounded-3xl border border-white/80 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-5">
            <div className="grid gap-3 lg:grid-cols-[1fr_240px_auto]">
              <label className="relative block">
                <span className="sr-only">Search jobs</span>

                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by job title, company or keyword"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="relative block">
                <span className="sr-only">Filter by location</span>

                <MapPin
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                >
                  {locations.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="button"
                onClick={clearFilters}
                disabled={!search && location === "All Locations"}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <SlidersHorizontal size={17} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">OPEN POSITIONS</span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Latest job openings
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Showing {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "opportunity" : "opportunities"}
            </p>
          </div>

          {(search || location !== "All Locations") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
            >
              <X size={15} />
              Clear filters
            </button>
          )}
        </div>

        {filteredJobs.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
              <BriefcaseBusiness size={24} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              No matching jobs found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try a different search term or clear the location filter to
              browse all current openings.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}