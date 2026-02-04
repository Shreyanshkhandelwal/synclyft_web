import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ===== SOFT SCROLL REVEAL ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CtaSection = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full py-40 overflow-hidden bg-black"
    >
      {/* ===== Background Grid ===== */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(93,188,210,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(93,188,210,0.18) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "gridMove 30s linear infinite",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ===== Floating Elements ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[12%] w-28 h-28 bg-[#1a4d5e]/60 backdrop-blur-xl rounded-3xl flex items-center justify-center animate-float1">
          <div className="flex flex-col gap-2 w-10">
            <span className="h-1 bg-white/70 rounded" />
            <span className="h-1 bg-white/70 rounded" />
            <span className="h-1 bg-white/70 rounded" />
          </div>
        </div>

        <div className="absolute top-[22%] right-[14%] w-28 h-28 bg-[#1a4d5e]/60 backdrop-blur-xl rounded-3xl flex items-center justify-center animate-float2">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-4 border-2 border-white/70 rounded-full" />
            <div className="w-10 h-4 border-2 border-white/70 rounded-full" />
            <div className="w-10 h-4 border-2 border-white/70 rounded-full" />
          </div>
        </div>

        <div className="absolute bottom-[28%] left-[16%] w-24 h-24 bg-[#1a4d5e]/60 backdrop-blur-xl rounded-3xl flex items-center justify-center animate-float3">
          <div className="flex flex-col gap-2 w-12">
            <div className="h-5 border-2 border-white/70 rounded" />
            <div className="h-5 border-2 border-white/70 rounded" />
          </div>
        </div>

        <div className="absolute bottom-[22%] right-[18%] w-28 h-28 bg-[#1a4d5e]/60 backdrop-blur-xl rounded-3xl flex items-center justify-center animate-float4">
          <svg
            className="w-12 h-12 text-white/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        </div>
      </div>

      {/* ===== CTA Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-black rounded-3xl border border-white/10 shadow-2xl px-12 py-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semi text-white">
            Practice Interviews That <br />
            <span className="text-[#9fc7cc]">Actually Feel Real</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Prepare for technical, coding, HR, and behavioral interviews with
            adaptive AI that listens, responds, and challenges you like a real
            interviewer. Build confidence before the real interview.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            {/* ✅ EXPLORE FEATURES → FEATURES PAGE */}
            <Link
              to="/features"
              className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:-translate-y-1 transition"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ===== Animations ===== */}
      <style>{`
        @keyframes gridMove {
          to { transform: translate(60px, 60px); }
        }

        @keyframes float1 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }

        @keyframes float2 {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(-60px); }
        }

        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(40px,40px); }
        }

        @keyframes float4 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-40px,-40px); }
        }

        .animate-float1 { animation: float1 14s ease-in-out infinite; }
        .animate-float2 { animation: float2 16s ease-in-out infinite; }
        .animate-float3 { animation: float3 18s ease-in-out infinite; }
        .animate-float4 { animation: float4 20s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
};

export default CtaSection;
