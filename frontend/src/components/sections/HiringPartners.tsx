import { ArrowUpRight } from "lucide-react";

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

export default function HiringPartners() {
  const firstRow = companies.slice(0, 17);
  const secondRow = companies.slice(17);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-blue-50/60 py-14 sm:py-18 lg:py-20">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        {/* Section heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Trusted network
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Hiring Partners
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Connecting skilled candidates with leading employers across
              growing industries.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-blue-100 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <span className="text-lg font-bold">100+</span>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Hiring network
              </p>
              <p className="mt-0.5 text-sm font-bold text-slate-900">
                Employer connections
              </p>
            </div>

            <ArrowUpRight
              size={17}
              className="ml-2 text-blue-600"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* First marquee */}
        <div className="relative mt-10 overflow-hidden rounded-4xl border border-white/80 bg-white/45 py-5 shadow-[0_20px_60px_rgba(37,99,235,0.06)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-linear-to-r from-sky-50 via-sky-50/70 to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-linear-to-l from-blue-50/80 via-blue-50/40 to-transparent"
            aria-hidden="true"
          />

          <div className="overflow-hidden">
            <div className="hiring-partners-track flex w-max items-center">
              {[...firstRow, ...firstRow].map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="mx-2.5 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/85 px-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:mx-3 sm:w-40"
                >
                  <img
                    src={company.src}
                    alt={index >= firstRow.length ? "" : company.alt}
                    width={150}
                    height={50}
                    loading="lazy"
                    className="h-auto max-h-11 w-auto max-w-full object-contain opacity-80 transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second marquee */}
        <div className="relative mt-4 overflow-hidden rounded-4xl border border-white/80 bg-sky-100/30 py-5 shadow-[0_20px_60px_rgba(14,165,233,0.05)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-linear-to-r from-sky-50 via-sky-50/70 to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-linear-to-l from-blue-50 via-blue-50/50 to-transparent"
            aria-hidden="true"
          />

          <div className="overflow-hidden">
            <div className="hiring-partners-track-reverse flex w-max items-center">
              {[...secondRow, ...secondRow].map((company, index) => (
                <div
                  key={`row2-${index}`}
                  className="mx-2.5 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-sky-100/90 bg-white/85 px-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:mx-3 sm:w-40"
                >
                  <img
                    src={company.src}
                    alt={index >= secondRow.length ? "" : company.alt}
                    width={150}
                    height={50}
                    loading="lazy"
                    className="h-auto max-h-11 w-auto max-w-full object-contain opacity-80 transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs font-medium text-slate-400">
          Trusted connections across multiple industries and hiring
          categories.
        </p>
      </div>
    </section>
  );
}