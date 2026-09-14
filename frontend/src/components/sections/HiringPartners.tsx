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
    <section className="border-b border-blue-100 bg-white py-8 sm:py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 min-w-20 items-center justify-center rounded-2xl bg-blue-600 px-4 text-white shadow-lg shadow-blue-600/15">
              <div className="text-center">
                <div className="text-2xl font-bold leading-none">100+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-blue-100">
                  Partners
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Trusted network
              </p>
              <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Hiring Partners
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>Connecting talent with leading employers</span>
            <ArrowUpRight
              size={17}
              className="text-blue-600"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-r from-sky-50 via-white to-blue-50 py-5">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-sky-50 to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-blue-50 to-transparent"
            aria-hidden="true"
          />

          <div className="flex overflow-hidden">
            <div className="hiring-partners-track flex shrink-0 items-center">
              {firstRow.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="mx-3 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-blue-100/70 bg-white px-5 shadow-sm sm:mx-4 sm:w-40"
                >
                  <img
                    src={company.src}
                    alt={company.alt}
                    width={150}
                    height={50}
                    loading="lazy"
                    className="max-h-10 w-auto max-w-30 object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}

              {firstRow.map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="mx-3 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-blue-100/70 bg-white px-5 shadow-sm sm:mx-4 sm:w-40"
                  aria-hidden="true"
                >
                  <img
                    src={company.src}
                    alt=""
                    width={150}
                    height={50}
                    loading="lazy"
                    className="max-h-10 w-auto max-w-30 object-contain opacity-75 grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-3xl border border-sky-100 bg-sky-50/60 py-5">
          <div
            className="flex hiring-partners-track-reverse shrink-0 items-center"
          >
            {secondRow.map((company, index) => (
              <div
                key={`second-${index}`}
                className="mx-3 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-white px-5 shadow-sm sm:mx-4 sm:w-40"
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  width={150}
                  height={50}
                  loading="lazy"
                  className="max-h-10 w-auto max-w-30 object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}

            {secondRow.map((company, index) => (
              <div
                key={`second-duplicate-${index}`}
                className="mx-3 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-white px-5 shadow-sm sm:mx-4 sm:w-40"
                aria-hidden="true"
              >
                <img
                  src={company.src}
                  alt=""
                  width={150}
                  height={50}
                  loading="lazy"
                  className="max-h-10 w-auto max-w-30 object-contain opacity-75 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}