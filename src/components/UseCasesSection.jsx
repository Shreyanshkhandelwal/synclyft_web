import React, { useState, useEffect, useRef } from "react";

/* =========================
   SYNClyft REAL USE CASES
========================= */
const useCases = [
  {
    title: "Placement Preparation",
    heading: "Practice real interviews before the real one",
    desc: "Students preparing for campus placements can practice technical, HR, aptitude, and coding interviews in a realistic environment that mirrors actual hiring processes.",
    img: "ai.jpg",
  },
  {
    title: "Fresher Interview Readiness",
    heading: "Build confidence for your first job interview",
    desc: "Freshers gain hands-on interview exposure through adaptive AI questions, follow-ups, and structured feedback instead of memorizing static answers.",
    img: "ai2.webp",
  },
  {
    title: "Role Switch Preparation",
    heading: "Prepare smarter for your next career move",
    desc: "Working professionals can practice role-specific interviews, refresh concepts, and improve communication while preparing for company switches.",
    img: "ai3.jpg",
  },
  {
    title: "Skill Gap Analysis",
    heading: "Identify strengths, weaknesses, and missed concepts",
    desc: "Detailed performance reports help users understand where they stand, what concepts need revision, and how to improve interview performance.",
    img: "ai4.webp",
  },
  {
    title: "Mock Interviews for Hiring",
    heading: "Conduct scalable mock interviews with AI",
    desc: "Institutes, training centers, and companies can use Synclyft to conduct consistent, unbiased mock interviews at scale with real-time feedback.",
    img: "ai5.jpg",
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-x-hidden
        bg-gradient-to-b
        from-[#3a4d4d] 
        via-black
        to-black
        pt-20
        pb-20
      "
    >
      {/* ===== HEADING ===== */}
      <div
        className={`
          relative z-10
          pb-16 sm:pb-20
          text-center
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
            Real-World Use Cases{" "}
            <span className="text-white/80">That Build</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
            <span className="text-[#b9dde2]">Interview Confidence</span>
          </h2>

          <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
            Synclyft is designed for real interview preparation — helping
            students, freshers, professionals, and organizations practice,
            evaluate, and improve interview performance.
          </p>
        </div>
      </div>

      {/* ===== USE CASES PANEL ===== */}
      <div
        className={`
          relative max-w-7xl mx-auto rounded-2xl overflow-hidden
          border border-white/10
          transition-all duration-[900ms] delay-150 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] min-h-[420px]">
          {/* LEFT LIST */}
          <div className="bg-black flex md:flex-col flex-row md:divide-y divide-x md:divide-x-0 divide-white/10">
            {useCases.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                  flex-1 px-4 sm:px-6 md:px-8
                  py-4 md:py-0
                  text-left text-sm sm:text-base md:text-lg
                  transition-all duration-300
                  ${
                    active === index
                      ? "bg-[#3a4a4a] text-white"
                      : "text-white/80 hover:bg-white/5"
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative h-[420px] sm:h-[460px] md:h-full">
            <img
              src={useCases[active].img}
              alt={useCases[active].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-14">
              <div
                key={useCases[active].heading}
                className="max-w-xl transition-all duration-[600ms] ease-out"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6">
                  {useCases[active].heading}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  {useCases[active].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
