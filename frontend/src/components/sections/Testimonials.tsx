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
  const testimonial = testimonials[activeIndex];

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

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50/50 via-white to-sky-50/60 py-16 sm:py-20 lg:py-24">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        {/* Heading */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Quote size={14} aria-hidden="true" />
              Testimonials
            </span>

            <h2 className="section-title mt-5">
              Real experiences.
              <span className="block text-blue-600">
                Real career journeys.
              </span>
            </h2>

            <p className="section-description mx-auto mt-5">
              Our candidates' experiences reflect the support, training and
              opportunities they received through EMTA.
            </p>
          </div>
        </ScrollReveal>

        {/* Main testimonial */}
        <ScrollReveal>
          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-200/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/70 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6 lg:p-8">
              <div className="grid gap-5 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr]">
                {/* Profile panel */}
                <div className="rounded-3xl border border-blue-100/80 bg-linear-to-br from-sky-50 via-white to-blue-50/70 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div
                        className="absolute -inset-3 rounded-full bg-sky-200/50 blur-xl"
                        aria-hidden="true"
                      />

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
                          size={16}
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote panel */}
                <div className="relative flex min-h-65 flex-col justify-center rounded-3xl border border-blue-100/60 bg-white/55 px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
                  <Quote
                    size={82}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute right-5 top-4 text-blue-100/80"
                    aria-hidden="true"
                  />

                  <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    Candidate Experience
                  </p>

                  <blockquote
                    key={testimonial.name}
                    className="relative mt-5 max-w-2xl text-2xl font-semibold leading-relaxed tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
                  >
                    “{testimonial.text}”
                  </blockquote>

                  <div className="relative mt-7 h-1 w-16 rounded-full bg-linear-to-r from-blue-600 to-sky-400" />
                </div>
              </div>

              {/* Controls */}
              <div className="mt-5 flex flex-col gap-5 border-t border-slate-200/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Indicators */}
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
                          ? "w-9 bg-blue-600"
                          : "w-2.5 bg-blue-200 hover:bg-blue-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <ChevronLeft size={19} aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    <ChevronRight size={19} aria-hidden="true" />
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