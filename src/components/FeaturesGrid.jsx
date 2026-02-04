import React, { useEffect, useRef } from "react";

const ICON_COLOR = "#b9dde2";


const features = [
  {
    title: "AI Interview (Tech · HR · Behavioral)",
    desc: [
      "Role-specific AI interviews (Technical, HR, Behavioral)",
      "Dynamic questions based on resume, role, and experience",
      "Real-time follow-up questions",
      "Evaluation of technical skills, communication, confidence, and behavior",
      "Instant feedback and performance breakdown",
    ],
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
  },
  {
    title: "Resume Analyzer",
    desc: [
      "NLP-based resume parsing",
      "Extraction of skills, experience, projects, and education",
      "ATS compatibility and role-fit analysis",
      "Identification of skill gaps and optimization issues",
      "Actionable improvement suggestions",
    ],
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.8">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 10h8M8 14h6" />
      </svg>
    ),
  },
  {
    title: "Assessments (Mock + Reasoning)",
    desc: [
      "Aptitude, logical reasoning, quantitative, and domain-based tests",
      "Role-specific assessments with adaptive difficulty",
      "Timed real-exam experience",
      "Section-wise scoring and detailed solutions",
    ],
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.8">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Coding Test",
    desc: [
      "Real coding environment with multi-language support",
      "Automatic evaluation using test cases",
      "Time and space complexity checks",
      "Code quality and optimization feedback",
    ],
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.8">
        <path d="M8 6l-6 6 6 6" />
        <path d="M16 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "Live Interview",
    desc: [
      "AI-assisted or human-led live interviews",
      "Video and audio-based interaction",
      "Optional real-time guidance",
      "Interview recording and summary feedback",
    ],
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.8">
        <rect x="2" y="6" width="15" height="12" rx="2" />
        <path d="M17 8l5 4-5 4V8z" />
      </svg>
    ),
  },
  {
    title: "Build Your Resume",
    desc: [
      "AI-guided resume creation",
      "Role-based templates",
      "Smart bullet-point and project suggestions",
      "Real-time ATS score tracking",
      "Multiple download formats",
    ],
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </svg>
    ),
  },
];

const FeaturesGrid = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-30">
      <div
        ref={(el) => (revealRefs.current[0] = el)}
        className="max-w-7xl mx-auto text-center mb-24
        opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Get Better Result With{" "}
          <span className="text-[#b9dde2]">Stunning Features</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((item, index) => {
          const isGroupA = index === 0 || index === 2 || index === 4;

          return (
            <div
              key={index}
              ref={(el) => (revealRefs.current[index + 1] = el)}
              className={`
                group relative p-14 text-center
                ${isGroupA ? "bg-[#344646]" : "bg-[#1f2a2a]"}
                transition-all duration-700
                hover:-translate-y-2
                opacity-0 translate-y-10
              `}
            >

              <div
                className="
                  pointer-events-none absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-1000
                  bg-[radial-gradient(circle_at_top,rgba(160,230,255,0.22),transparent_60%)]
                "
              />

              <div className="relative z-10 flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <ul className="relative z-20 text-white/70 text-sm leading-relaxed space-y-2 text-left">
                {item.desc.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#b9dde2]">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesGrid;
