import { motion } from "framer-motion";

/* SOFT REVEAL VARIANT */
const softReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function PricingHero() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center
      overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner2.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* VERTICAL STRIPES */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 90px)",
        }}
      />

      {/* CONTENT */}
      <motion.div
        variants={softReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Choose the Right Plan For Real <br />
          <span className="text-[#9fd9e5]">
            Interview Practice
          </span>
        </h1>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
          Synclyft offers flexible pricing for students, freshers, working
          professionals, institutes, and companies. Practice interviews,
          conduct mock hiring rounds, and track performance — all with
          plans that scale as you grow.
        </p>
      </motion.div>
    </section>
  );
}
