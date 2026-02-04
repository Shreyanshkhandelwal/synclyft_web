import { useEffect, useRef } from "react";

export default function FeaturesHero() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#0a1f2b] via-[#1a3a4a] to-[#0a1f2b]">
      {/* ===== DARK OVERLAY + ANIMATED GRID ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,125,154,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,154,0.12) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 28s linear infinite",
          }}
        />
      </div>

      {/* ===== LEFT CONTENT ===== */}
      <div
        ref={(el) => (revealRefs.current[0] = el)}
        className="
          relative z-10
          min-h-[100svh]
          max-w-7xl mx-auto
          px-6 sm:px-8 lg:px-24
          flex items-center
          pb-16 sm:pb-20
          opacity-0 translate-y-10 scale-95
          transition-all duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        <div className="max-w-xl">
          <h1
            className="
              text-white font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl xl:text-7xl
            "
          >
            Practice Interviews <br />
            Like Real Hiring <br />
            <span className="text-[#9fd9e5]">Not Like a Quiz</span>
          </h1>

          <p className="text-white/70 mt-5 sm:mt-6 leading-relaxed text-sm sm:text-base">
            <strong>Synclyft</strong> is an AI-powered interview and skill-practice
            platform designed to simulate real-world hiring processes.
            It helps students, freshers, and professionals practice{" "}
            <span className="text-white">
              technical, coding, HR, and behavioral interviews
            </span>{" "}
            in a realistic, conversational environment.
          </p>

          <p className="text-white/60 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
            Unlike static MCQ platforms, Synclyft adapts in real-time,
            asks follow-up questions, changes topics intelligently,
            and provides detailed performance feedback after every interview.
          </p>

          {/* ===== CTA BUTTON (MOBILE SAFE) ===== */}
          <div className="mt-8 sm:mt-10 flex gap-5 flex-wrap">
            <button
              className="
                w-full sm:w-auto
                px-8 py-3
                rounded-lg
                bg-white text-black
                font-medium
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]
                transition
              "
            >
              Start Practicing Free
            </button>
          </div>
        </div>
      </div>

      {/* ===== RIGHT IMAGE (LAPTOP SPACE FIXED) ===== */}
      <div
        ref={(el) => (revealRefs.current[1] = el)}
        className="
          absolute top-0 right-0 h-full
          hidden lg:block
          lg:w-[38%]
          xl:w-[42%]
          2xl:w-[48%]
          opacity-0 translate-y-10 scale-95
          transition-all duration-[1100ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          delay-150
        "
      >
        <img
          src="/banner1.jpg"
          alt="Synclyft feature preview"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ===== GRID ANIMATION ===== */}
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
