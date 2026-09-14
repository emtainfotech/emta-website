import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

import ScrollReveal from "../common/ScrollReveal";

const testimonials = [
  {
    name: "Heerandra pratap singh",
    company: "Sales & Service - PIRAMAL FINANCE",
    image: "/img/Heerandra pratap singh.png",
    text: "EMTA helped me enhance my soft skills.",
  },
  {
    name: "Atul Kumar Pare",
    company: "YES BANK",
    image: "/img/Atul Kumar Pare.png",
    text: "Team EMTA helped me in securing my job with great package. They also help in understanding the possibilities of growth in respective sectors.",
  },
  {
    name: "Sanchita Sharma",
    company: "INDUSIND BANK",
    image: "/img/Sanchita Sharma.png",
    text: "EMTA helped me secure this job, really greateful to the team for helping me with complete banking training.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = testimonials.length;

  const previous = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [total]);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Quote size={14} aria-hidden="true" />
              Testimonials
            </span>

            <h2 className="section-title mt-5">
              What Our Customers Are Saying
            </h2>

            <p className="section-description mx-auto mt-5">
              Our customers’ success stories speak volumes about the quality
              and impact of our services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative mx-auto mt-10 max-w-5xl">
            <div className="overflow-hidden rounded-4xl border border-blue-100 bg-linear-to-br from-sky-50 via-white to-blue-50 p-5 shadow-xl shadow-blue-900/5 sm:p-8 lg:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[220px_1fr] md:gap-10">
                {/* Profile */}
                <div className="flex flex-col items-center text-center md:border-r md:border-blue-100 md:pr-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-sky-200 blur-xl" />

                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl sm:h-32 sm:w-32">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={128}
                        height={128}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
                    {testimonial.company}
                  </p>

                  <div
                    className="mt-4 flex items-center gap-1 text-amber-400"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative">
                  <Quote
                    size={64}
                    className="absolute -right-1 -top-5 text-blue-100 sm:-right-2"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">
                      Candidate Experience
                    </p>

                    <blockquote className="mt-5 max-w-2xl text-2xl font-semibold leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
                      “{testimonial.text}”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6">
                <div
                  className="flex items-center gap-2"
                  aria-label="Testimonial navigation"
                >
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Show testimonial from ${item.name}`}
                      aria-current={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-blue-600"
                          : "w-2.5 bg-blue-200 hover:bg-blue-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}