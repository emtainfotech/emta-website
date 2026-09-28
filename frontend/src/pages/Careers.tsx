import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  Check,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import SEO from "../components/common/SEO";
import JobCard from "../components/common/JobCard";
import { getJobs, type ApiJob } from "../services/api";

const perks = ["Verified openings", "Freshers welcome", "Career guidance", "Interview support"];

export default function Careers() {
  const [jobs, setJobs] = useState<ApiJob[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    getJobs({ limit: 100 })
      .then((response) => {
        if (mounted) setJobs(response.data);
      })
      .catch((reason) => {
        if (mounted) setError(reason instanceof Error ? reason.message : "Unable to load jobs");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const locations = useMemo(() => {
    const values = jobs.map((job) => job.location.trim()).filter(Boolean);
    return ["All Locations", ...Array.from(new Set(values))];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        [job.title, job.company, job.location, job.description].some((value) =>
          value.toLowerCase().includes(query),
        );
      const matchesLocation = location === "All Locations" || job.location === location;
      return matchesSearch && matchesLocation;
    });
  }, [jobs, location, search]);

  const clearFilters = () => {
    setSearch("");
    setLocation("All Locations");
  };

  return (
    <>
      <SEO
        title="Careers | Jobs in Indore & Across India | EMTA"
        description="Explore verified openings, freshers jobs and career opportunities with EMTA."
        canonical="https://emta.co.in/careers"
      />

      <main className="overflow-hidden bg-[#f7f8fc]">
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="section-shell relative py-16 sm:py-20 lg:py-24">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-md">
                <Sparkles size={14} /> Career opportunities
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Find work that moves your career <span className="bg-linear-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">forward.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Search live opportunities across customer support, sales, BFSI, operations, creative and business roles — with EMTA supporting you from application to interview.
              </p>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {perks.map((perk) => (
                  <span key={perk} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-3.5 py-2 text-xs font-medium text-slate-200 backdrop-blur-md">
                    <Check size={13} className="text-cyan-300" /> {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-12 rounded-[2rem] border border-white/12 bg-white/8 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-4">
              <div className="grid gap-3 lg:grid-cols-[1fr_250px_auto]">
                <label className="relative block">
                  <span className="sr-only">Search jobs</span>
                  <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search title, company or keyword"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/70 pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/10"
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">Filter by location</span>
                  <MapPin size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-slate-900/70 pl-11 pr-4 text-sm text-white outline-none transition focus:border-violet-300/50 focus:ring-4 focus:ring-violet-300/10"
                  >
                    {locations.map((item) => (
                      <option key={item} value={item} className="bg-slate-900">{item}</option>
                    ))}
                  </select>
                </label>

                <button
                  type="button"
                  onClick={clearFilters}
                  disabled={!search && location === "All Locations"}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Reset <X size={16} />
                </button>
              </div>
            </div>

            <a href="#open-positions" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
              Browse open positions <ArrowDownRight size={17} />
            </a>
          </div>
        </section>

        <section id="open-positions" className="relative overflow-hidden bg-[#f7f8fc] py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute left-0 top-16 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-200/25 blur-3xl" />

          <div className="section-shell relative">
            <div className="flex flex-col gap-5 border-b border-slate-200/80 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">OPEN POSITIONS</span>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">Latest opportunities</h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">{filteredJobs.length} {filteredJobs.length === 1 ? "role" : "roles"} matching your search.</p>
              </div>
              {(search || location !== "All Locations") && (
                <button type="button" onClick={clearFilters} className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-violet-200 hover:text-violet-700">
                  <X size={15} /> Clear filters
                </button>
              )}
            </div>

            {loading ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-80 animate-pulse rounded-[2rem] border border-white bg-white/70" />
                ))}
              </div>
            ) : error ? (
              <div className="mt-10 rounded-[2rem] border border-rose-100 bg-rose-50 px-6 py-12 text-center text-sm text-rose-700">{error}</div>
            ) : filteredJobs.length ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}
              </div>
            ) : (
              <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-white/75 px-6 py-16 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-50 to-violet-50 text-violet-600">
                  <BriefcaseBusiness size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">No matching roles</h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500">Try a broader keyword or clear your location filter to see the full opening list.</p>
                <button type="button" onClick={clearFilters} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">Clear filters</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
