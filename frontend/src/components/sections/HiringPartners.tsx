import { ArrowUpRight, Building2, Sparkles } from "lucide-react";

const companies = [
  { src: "/company/1-min.png", alt: "Industry partner" },
  { src: "/company/2-min.png", alt: "Nestle" },
  { src: "/company/4-min.png", alt: "BookMyShow" },
  { src: "/company/5-min.png", alt: "Nykaa" },
  { src: "/company/6-min.png", alt: "Decathlon" },
  { src: "/company/7-min.png", alt: "OYO" },
  { src: "/company/8-min.png", alt: "Paytm" },
  { src: "/company/10-min.png", alt: "HCL" },
  { src: "/company/12-min.png", alt: "Partner company" },
  { src: "/company/14-min.png", alt: "OYO" },
  { src: "/company/16-min.png", alt: "Partner company" },
  { src: "/company/17-min.png", alt: "HCL" },
  { src: "/company/18-min.png", alt: "BookMyShow" },
  { src: "/company/19-min.png", alt: "Nykaa" },
  { src: "/company/20-min.png", alt: "Decathlon" },
  { src: "/company/21-min.png", alt: "OYO" },
  { src: "/company/22-min.png", alt: "Paytm" },
  { src: "/company/23-min.png", alt: "Partner company" },
  { src: "/company/24-min.png", alt: "HCL" },
  { src: "/company/26-min.png", alt: "Nykaa" },
  { src: "/company/27-min.png", alt: "Decathlon" },
  { src: "/company/28-min.png", alt: "OYO" },
  { src: "/company/29-min.png", alt: "OYO" },
  { src: "/company/30-min.png", alt: "Partner company" },
  { src: "/company/31-min.png", alt: "Partner company" },
  { src: "/company/32-min.png", alt: "HCL" },
  { src: "/company/33-min.png", alt: "BookMyShow" },
  { src: "/company/34-min.png", alt: "Nykaa" },
  { src: "/company/36-min.png", alt: "OYO" },
  { src: "/company/38-min.png", alt: "Partner company" },
  { src: "/company/39-min.png", alt: "HCL" },
  { src: "/company/40-min.png", alt: "BookMyShow" },
  { src: "/company/41-min.png", alt: "Nykaa" },
];

function LogoRail({
  items,
  reverse = false,
}: {
  items: typeof companies;
  reverse?: boolean;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="hiring-partner-window relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 py-5 shadow-[0_28px_80px_rgba(2,8,23,.28)] backdrop-blur-2xl">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0a1630] via-[#0a1630]/80 to-transparent sm:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#111530] via-[#111530]/80 to-transparent sm:w-28"
        aria-hidden="true"
      />

      <div className="overflow-hidden">
        <div
          className={`${
            reverse ? "hiring-partners-track-reverse" : "hiring-partners-track"
          } flex w-max items-center py-1`}
        >
          {repeated.map((company, index) => (
            <div
              key={`${company.src}-${index}`}
              className="group hiring-partner-card edge-hover mx-2.5 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/88 px-5 shadow-[0_12px_30px_rgba(2,8,23,.15)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white sm:mx-3 sm:h-[5.4rem] sm:w-40"
            >
              <img
                src={company.src}
                alt={index >= items.length ? "" : company.alt}
                width={150}
                height={50}
                loading="lazy"
                className="h-auto max-h-11 w-auto max-w-full object-contain opacity-70 grayscale transition duration-500 group-hover:scale-[1.06] group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HiringPartners() {
  const firstRow = companies.slice(0, 17);
  const secondRow = companies.slice(17);

  return (
    <section className="homepage-partners relative overflow-hidden bg-[#081329] py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(34,211,238,.18),transparent_26%),radial-gradient(circle_at_88%_14%,rgba(124,58,237,.24),transparent_28%),radial-gradient(circle_at_55%_100%,rgba(236,72,153,.11),transparent_22%)]" aria-hidden="true" />
      <div className="homepage-partners__grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="section-shell relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-cyan-200 backdrop-blur-xl">
              <Sparkles size={13} /> Trusted network
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Hiring Partners
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Connecting skilled candidates with leading employers across
              growing industries.
            </p>
          </div>

          <div className="edge-hover float-slower relative flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 shadow-2xl backdrop-blur-xl">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400/20 via-violet-400/15 to-fuchsia-400/20 opacity-80" aria-hidden="true" />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 via-violet-300 to-fuchsia-300 text-slate-950 shadow-[0_14px_28px_rgba(34,211,238,.16)]">
              <Building2 size={20} />
            </div>
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Hiring network</p>
              <p className="mt-0.5 text-sm font-bold text-white">100+ employer connections</p>
            </div>
            <ArrowUpRight size={17} className="relative ml-2 text-cyan-200" aria-hidden="true" />
          </div>
        </div>

        <div className="relative mt-10 space-y-4">
          <LogoRail items={firstRow} />
          <LogoRail items={secondRow} reverse />
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          <span>Rows move independently</span>
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
          <span>Hover to pause</span>
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
          <span>Explore partner network</span>
        </div>
      </div>
    </section>
  );
}
