import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineUserCircle,
  HiOutlineChartBar,
} from "react-icons/hi";
import { FiPackage } from "react-icons/fi";

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const Card = ({ children, hover = true }) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        border border-white/10 bg-[#0b0f12]
        ${hover ? "group transition-transform duration-500 hover:scale-[1.04]" : ""}
      `}
    >
      {hover && (
        <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(160,230,255,0.45)_0%,rgba(160,230,255,0.25)_35%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
      <div className="relative z-10 p-8 h-full">{children}</div>
    </div>
  );
};

const AiPlatformSection = () => {
  return (
    <motion.section
      className="bg-black px-8 py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
  
      <motion.div
        className="max-w-7xl mx-auto text-center mb-24"
        variants={reveal}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Experience Interviews That{" "}
          <span className="text-[#9fd9e5]">Adapt to You</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-3xl mx-auto">
          Human-like AI interviews that listen, respond, and challenge you just
          like a real interviewer.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        <motion.div variants={reveal}>
          <Card>
            <div className="rounded-xl bg-black border border-white/10 p-6 h-[260px] relative overflow-hidden">
              <pre className="text-[13px] text-white/70 leading-relaxed font-mono whitespace-pre-wrap">
{`AI Interview Session
Role: Backend Developer
Experience: 1–3 Years
Difficulty: Medium

Interviewer:
"Design a scalable API system."

Follow-up:
"How would you handle high traffic
and rate limiting?"

The AI adapts continuously based
on your responses.`}
              </pre>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-white flex justify-center items-center gap-2">
                <HiOutlineDocumentText className="text-[#9fc7cc] text-2xl" />
                AI Technical Interviews
              </h3>
              <p className="text-white/60 mt-2">
                Practice realistic technical interviews with adaptive,
                follow-up based questioning.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={reveal}>
          <Card>
            <div className="rounded-xl bg-black border border-white/10 p-6 h-[260px]">
              <div className="text-white/70 text-sm leading-relaxed">
                <p className="mb-4">
                  <span className="text-white font-medium">
                    HR Interview Question:
                  </span>
                  <br />
                  “Tell me about a challenging situation you faced.”
                </p>

                <p className="mb-3">
                  <span className="text-white font-medium">AI Evaluates:</span>
                </p>

                <ul className="list-disc ml-5 space-y-1">
                  <li>Clarity of response</li>
                  <li>Confidence level</li>
                  <li>Behavioral alignment</li>
                  <li>Communication structure</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-white flex justify-center items-center gap-2">
                <HiOutlineUserCircle className="text-[#9fc7cc] text-2xl" />
                HR & Behavioral Interviews
              </h3>
              <p className="text-white/60 mt-2">
                Improve confidence and communication through realistic HR
                interview simulations.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={reveal}>
          <Card>
            <div className="rounded-xl bg-black border border-white/10 p-6 h-[300px] relative overflow-hidden text-white/70 text-sm leading-relaxed">
              <p className="mb-4">
                <span className="text-white font-medium">
                  Live Interview Mode:
                </span>
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>Camera & microphone enabled</li>
                <li>AI interviewer in real-time</li>
                <li>Real interview pressure simulation</li>
              </ul>

              <p className="mt-6 text-white font-medium">
                Polite AI warnings for:
              </p>
              <ul className="list-disc ml-5 space-y-2 mt-2">
                <li>Camera distance issues</li>
                <li>Prohibited objects detected</li>
                <li>Multiple people in frame</li>
              </ul>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-white flex justify-center items-center gap-2">
                <FiPackage className="text-[#9fc7cc] text-2xl" />
                Voice & Video Interview Mode
              </h3>
              <p className="text-white/60 mt-2">
                Experience interviews with voice and camera for maximum realism.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={reveal}>
          <Card>
            <div className="rounded-xl bg-black border border-white/10 p-6 h-[300px] relative overflow-hidden text-white/70 text-sm leading-relaxed">
              <p className="mb-4 text-white font-medium">
                Performance Report Includes:
              </p>

              <ul className="list-disc ml-5 space-y-2">
                <li>Overall interview performance</li>
                <li>Strengths & weak areas</li>
                <li>Missed concepts</li>
                <li>Communication quality</li>
                <li>Actionable improvement tips</li>
              </ul>

              <p className="mt-6">
                Detailed feedback is generated after every interview session.
              </p>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-white flex justify-center items-center gap-2">
                <HiOutlineChartBar className="text-[#9fc7cc] text-2xl" />
                Performance Reports & Insights
              </h3>
              <p className="text-white/60 mt-2">
                Understand exactly where you stand and how to improve.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AiPlatformSection;
