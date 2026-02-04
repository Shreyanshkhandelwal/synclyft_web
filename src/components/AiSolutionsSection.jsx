'use client';

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "AI-Powered Mock Interviews",
    desc: "Practice real-world technical, HR, and behavioral interviews powered by AI. Get adaptive questions, instant feedback, and confidence insights tailored to your role.",
    img: "img1.webp",
    color: "#1f2a2a",
  },
  {
    title: "Coding & Technical Round Simulator",
    desc: "Simulate real coding interviews with live problem-solving, logic evaluation, and structured feedback to help you perform confidently in real hiring rounds.",
    img: "img2.jpg",
    color: "#1f2a2a",
  },
  {
    title: "Performance Analytics & Hiring Insights",
    desc: "Track interview performance, communication skills, technical strengths, and improvement areas with detailed AI-generated reports for candidates and recruiters.",
    img: "img3.webp",
    color: "#1f2a2a",
  },
];

export default function AiSolutionsSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.35 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <section ref={containerRef} className="bg-black py-40">
      {/* ===== HEADING ===== */}
      <div  ref={(el) => (refs.current[0] = el)} className="flex flex-col items-center text-center
          px-4 pt-12
          opacity-0 translate-y-6
          transition-all duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]">
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          AI-Powered Hiring & Interview <br />
          <span className="text-[#b9dde2]">Solutions by Synclyft</span>
        </h2>

        <p className="text-white/60 mt-4 max-w-2xl">
          Synclyft helps students, professionals, and recruiters prepare smarter,
          interview better, and hire faster using AI-driven interview technology.
        </p>
      </div>

      {/* ===== SCROLL STACK ===== */}
      <div className="relative h-[300vh]">
        {cards.map((card, i) => {
          const start = i / cards.length;
          const end = start + 1 / cards.length;

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [0.85, 1]
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [1, 1]
          );

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [80, 0]
          );

          return (
            <div
              key={i}
              className="sticky top-0 h-screen flex items-center justify-center"
            >
              <motion.div
                style={{ scale, opacity, y }}
                className="
                  max-w-[1400px] w-full h-[520px]
                  rounded-2xl overflow-hidden
                  border border-white/10
                  origin-top
                "
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* IMAGE */}
                  <div className={`relative ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                    <img
                      src={card.img}
                      alt={card.title}
                      className="absolute inset-0 w-full h-[115%] object-cover"
                    />
                    <div className="absolute inset-x-0 top-6 bottom-0 " />

                  </div>

                  {/* CONTENT */}
                  <div
                    className={`
                      flex items-center px-14
                      bg-[${card.color}]
                      bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]
                      bg-[size:100%_28px]
                      ${i % 2 !== 0 ? "md:order-1" : ""}
                    `}
                  >
                    <div>
                      <h3 className="text-4xl font-semibold text-white mb-6">
                        {card.title}
                      </h3>
                      <p className="text-white/70 max-w-lg leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
