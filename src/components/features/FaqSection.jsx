import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* SOFT REVEAL */
const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* FAQ DATA */
const FAQS = [
  {
    q: "What is Synclyft and how does it work?",
    a: "Synclyft is an AI-powered interview and skill practice platform that simulates real-world hiring interviews.",
  },
  {
    q: "Who is Synclyft designed for?",
    a: "Students, freshers, working professionals, institutes, and companies conducting mock interviews.",
  },
  {
    q: "How realistic are Synclyft’s AI interviews?",
    a: "The AI adapts questions, asks follow-ups, and evaluates you like a real interviewer.",
  },
  {
    q: "Does Synclyft support coding interviews?",
    a: "Yes. Coding rounds with time limits, test cases, and AI feedback are included.",
  },
  {
    q: "How is performance evaluated?",
    a: "Detailed reports on strengths, weak areas, communication, and improvement steps.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-36 bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4">
            FAQs
          </h2>
          <p className="text-white/60">
            Everything you need to know about Synclyft.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between px-6 py-5 text-left"
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <span
                    className={`text-white text-2xl transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/70">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-28"
        >
          <h3 className="text-white text-3xl font-semibold mb-4">
            Still have questions?
          </h3>
          <p className="text-white/60 mb-8">
            Our team is happy to help you.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:-translate-y-1 transition"
          >
            Contact
          </button>
        </motion.div>

      </div>
    </section>
  );
}
