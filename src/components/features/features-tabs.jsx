import { useState } from "react";
import { motion } from "framer-motion";

/* SOFT REVEAL ANIMATION */
const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const TABS = [
  {
    id: "tech-interview",
    title: "AI Tech Interview",
    heading: "Practice Interviews That Feel Real",
    desc: `Synclyft simulates real-world technical interviews using conversational AI.
The interviewer adapts questions based on your answers, switches topics naturally,
and asks follow-ups just like a human interviewer.

You practice role-based and experience-based interviews instead of memorizing
static questions.`,
    image: "/tech.jpg",
  },
  {
    id: "coding-round",
    title: "Coding Simulator",
    heading: "Real Coding Interview Environment",
    desc: `Experience a real coding round inspired by platforms like LeetCode and HackerRank.
Solve problems with time limits, test cases, and language support.

After submission, Synclyft provides AI-powered hints, explanations,
and improvement suggestions to strengthen your problem-solving skills.`,
    image: "/coding.jpg",
  },
  {
    id: "performance",
    title: "Performance Reports",
    heading: "Actionable Feedback That Builds Confidence",
    desc: `After every interview, Synclyft generates a detailed performance report
highlighting your strengths, weak areas, missed concepts, and communication quality.

You don’t just practice interviews —
you understand exactly how to improve for the next one.`,
    image: "/graph.jpg",
  },
];

export default function FeaturesTabs() {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section
      className="relative w-full py-36 overflow-hidden
      bg-gradient-to-br from-[#0a1f2b] via-[#1a3a4a] to-[#0a1f2b]"
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* ANIMATED GRID */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,125,154,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,154,0.12) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "gridMove 28s linear infinite",
        }}
      />

      <div className="relative z-10">
        {/* TOP HEADING */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto mb-28 px-6"
        >
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
            Practice Interviews That Feel <br />
            <span className="text-[#9fd9e5]">Real, Adaptive & Human</span>
          </h2>

          <p className="text-white/70 mt-6 leading-relaxed">
            Synclyft is an AI-powered interview and skill-practice platform
            built to simulate real hiring processes for students, freshers,
            and working professionals.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="max-w-7xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-[1.1fr_auto_1fr]
          gap-20 items-center"
        >
          {/* LEFT IMAGE */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden
              shadow-[0_50px_140px_rgba(0,0,0,0.8)]"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-[540px] object-cover transition-all duration-700"
            />
          </motion.div>

          {/* CENTER LINE */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[1px] h-[520px] bg-[#9fd9e5]" />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="space-y-14"
          >
            {/* TEXT */}
            <div className="relative pl-6">
              <h3 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                {active.heading}
              </h3>

              <p className="text-white/70 leading-relaxed max-w-xl whitespace-pre-line">
                {active.desc}
              </p>
            </div>

            {/* TABS */}
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {TABS.map((tab) => {
                const isActive = active.id === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab)}
                    className={`
                      relative px-6 py-3 rounded-xl text-sm font-medium
                      transition-all border backdrop-blur shrink-0
                      ${
                        isActive
                          ? "text-white border-[#9fd9e5]/60 bg-[#9fd9e5]/10 shadow-[0_0_30px_rgba(159,217,229,0.35)]"
                          : "text-white/60 border-white/15 hover:border-white/30 hover:text-white"
                      }
                    `}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* GRID ANIMATION */}
      <style>{`
        @keyframes gridMove {
          to {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
