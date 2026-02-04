import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* SOFT REVEAL VARIANTS */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PricingPlans() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Free",
      tag: "For Getting Started",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Limited interview sessions",
        "Basic performance feedback",
      ],
    },
    {
      name: "Pro",
      tag: "For Serious Interview Preparation",
      price: { monthly: 29, yearly: 249 },
      features: [
        "Unlimited interview sessions",
        "AI-driven technical & HR interviews",
        "Detailed performance feedback",
      ],
    },
  ];

  return (
    <section
      className="relative w-full py-32 overflow-hidden
      bg-gradient-to-br from-[#0a1f2b] via-[#1a3a4a] to-[#0a1f2b]"
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,125,154,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,154,0.12) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10"
      >
        {/* HEADER */}
        <motion.div
          variants={revealUp}
          className="text-center max-w-3xl mx-auto mb-16 px-6"
        >
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Pricing Plans
          </h2>
          <p className="text-white/60 mt-4">
            Start free and upgrade when you’re ready for unlimited
            real interview practice with Synclyft.
          </p>

          {/* TOGGLE */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex bg-black/40 backdrop-blur border border-white/10 rounded-lg p-1">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-md text-sm transition ${
                  billing === "monthly"
                    ? "bg-[#9fd9e5] text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-6 py-2 rounded-md text-sm transition ${
                  billing === "yearly"
                    ? "bg-[#9fd9e5] text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </motion.div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealUp}
              className="
                group relative rounded-2xl
                bg-black/60 backdrop-blur
                border border-[#9fd9e5]/50
                p-8
                transition-all duration-300 ease-out

                shadow-[0_0_40px_rgba(159,217,229,0.25)]

                hover:scale-[0.96]
                hover:border-[#9fd9e5]/80
                hover:shadow-[0_0_55px_rgba(159,217,229,0.45)]
              "
            >
              <h3 className="text-white text-xl font-semibold">
                {plan.name}
              </h3>
              <p className="text-white/50 text-sm mt-1">
                {plan.tag}
              </p>

              <div className="mt-8 mb-6">
                <span className="text-white text-4xl font-bold">
                  ${plan.price[billing]}
                </span>
                <span className="text-white/50 ml-1">
                  /{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>

              <button
                className="
                  w-full py-3 rounded-lg font-medium
                  bg-[#9fd9e5] text-black
                  transition-all duration-300
                  hover:bg-[#9fd9e5]/90
                  hover:shadow-[0_0_25px_rgba(159,217,229,0.6)]
                "
              >
                {plan.name === "Free" ? "Start Free" : "Upgrade to Pro"}
              </button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#9fd9e5]" />
                    <span className="text-white/70 text-sm">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
