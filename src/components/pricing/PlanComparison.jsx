import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* SOFT REVEAL */
const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PlanComparison() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-black">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,125,154,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,154,0.12) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* HEADER */}
        <motion.div
          variants={revealUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Plan <span className="text-[#9fd9e5]">Comparison</span>
          </h2>
          <p className="text-white/60 mt-4">
            Compare Synclyft plans and choose what fits your interview
            preparation or hiring needs.
          </p>
        </motion.div>

        {/* TABLE */}
        <motion.div
          variants={revealUp}
          className="rounded-3xl border border-white/10
          bg-black/60 backdrop-blur overflow-hidden"
        >
          {/* HEADER ROW */}
          <div className="grid grid-cols-4 border-b border-white/10">
            <div className="p-6 text-white font-semibold">Features</div>
            <div className="p-6 text-center text-white font-semibold">Free</div>
            <div className="p-6 text-center text-white font-semibold">Pro</div>
            <div className="p-6 text-center text-white font-semibold">
              Enterprise
            </div>
          </div>

          <Section title="Interview Practice" />
          <Row label="AI Interview Sessions" free="Limited" pro="Unlimited" enterprise="Unlimited" />
          <Row label="Technical, HR & Behavioral Interviews" free={false} pro enterprise />
          <Row label="Coding Round Simulator" free={false} pro enterprise />
          <Row label="Voice & Video Interviews" free={false} pro enterprise />

          <Section title="Performance & Feedback" />
          <Row label="Basic Performance Feedback" free pro enterprise />
          <Row label="Detailed Performance Reports" free={false} pro enterprise />
          <Row label="Confidence & Communication Scoring" free pro enterprise />

          <Section title="Institutes & Companies" />
          <Row label="Bulk Mock Interviews" free={false} pro={false} enterprise />
          <Row label="Recruiter / Institute Dashboard" free={false} pro={false} enterprise />
          <Row label="Unlimited Candidates" free={false} pro={false} enterprise />
          <Row label="Custom Interview Workflows" free={false} pro={false} enterprise />
        </motion.div>

        {/* CTA BUTTONS — SAME GLOW FOR ALL */}
        <motion.div
          variants={revealUp}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <CTA text="Start Free" />
          <CTA text="Upgrade to Pro" />
          <CTA text="Contact Sales" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* SECTION TITLE */
function Section({ title }) {
  return (
    <div className="p-6 text-white font-semibold bg-white/5 border-t border-white/10">
      {title}
    </div>
  );
}

/* ROW */
function Row({ label, free, pro, enterprise }) {
  return (
    <div className="grid grid-cols-4 items-center border-t border-white/5">
      <div className="p-6 text-white/70 text-sm">{label}</div>
      <Cell value={free} />
      <Cell value={pro} />
      <Cell value={enterprise} />
    </div>
  );
}

/* CELL */
function Cell({ value }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-[#9fd9e5]" />
      </div>
    );

  if (value === false)
    return <div className="text-center text-white/30">—</div>;

  return (
    <div className="text-center text-white/70 text-sm">{value}</div>
  );
}

/* CTA BUTTON – SAME ACTIVE STYLE */
function CTA({ text }) {
  return (
    <button
      className="
        px-10 py-3 rounded-lg font-medium
        bg-[#9fd9e5] text-black
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(159,217,229,0.65)]
      "
    >
      {text}
    </button>
  );
}
