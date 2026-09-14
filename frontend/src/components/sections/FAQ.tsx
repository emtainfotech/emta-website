import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../common/ScrollReveal";

const faqs = [
  {
    question: "What are the training and placement charges at EMTA?",
    answer:
      "EMTA's training fees vary by program (e.g., Sales/Collection is ₹5,000, Relationship Manager & Credit Officer are ₹20,000, and the Complete BFSI Training is ₹25,000, including GST). As a placement consultancy, we do not charge job seekers for direct placements. Corporate recruitment and staffing fee models vary by agreement.",
  },
  {
    question: "How does the placement process work?",
    answer:
      "Once a candidate successfully completes their training program, our placement coordinators match their profile with active openings in our network of 100+ banks and financial firms. We schedule and prepare candidates for interviews, providing unlimited interview opportunities within the placement assurance timeline (3 to 5 months) until they secure a job.",
  },
  {
    question: "How much salary can I expect after completing the training?",
    answer:
      "Graduates of our training programs can expect starting packages ranging from ₹2.5 LPA to ₹5 LPA depending on the course. Sales/Collection Officers typically earn up to ₹3 LPA, Credit Officers up to ₹4 LPA, and Complete BFSI Operations specialists can earn up to ₹5 LPA depending on the hiring bank or institution.",
  },
  {
    question: "Is there a refund policy if I don't get placed?",
    answer:
      "Yes! All of our structured BFSI courses feature a written refund policy. If we are unable to secure a job placement for you within 3 months (or 5 months for the Complete BFSI Training) after course completion, we will refund your paid course fees (except basic enrollment charges).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <HelpCircle size={14} aria-hidden="true" />
              Frequently Asked Questions
            </span>

            <h2 className="section-title mt-5">
              Got Questions? We Have Answers
            </h2>

            <p className="section-description mx-auto mt-5">
              Find quick answers to common questions about our training
              charges, placement assurance, and salary expectations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/60 shadow-lg shadow-blue-900/5"
                      : "border-slate-200 bg-white hover:border-blue-100 hover:shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-blue-100 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}