import { useEffect, useRef } from "react";

export default function AboutHero() {
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
    <section className="relative w-full overflow-hidden bg-[#0b0f14]">
      {/* ===== GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ===== TOP CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-40">
        {/* LEFT TITLE */}
        <div
          ref={(el) => (revealRefs.current[0] = el)}
          className="
            opacity-0 translate-y-10
            transition-all duration-1000 ease-out
          "
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Building Confidence <br />
            Through <br />
            <span className="text-[#9fd9e5]">
              Real Interview Practice
            </span>
          </h1>
        </div>

        {/* RIGHT DESCRIPTION */}
        <div
          ref={(el) => (revealRefs.current[1] = el)}
          className="
            text-white/70 text-base leading-relaxed
            opacity-0 translate-y-10
            transition-all duration-1000 ease-out delay-150
          "
        >
          <p>
            Synclyft is an AI-powered interview and skill-practice platform
            created to solve one core problem — the gap between learning
            concepts and performing confidently in real interviews.
          </p>

          <p className="mt-6">
            Traditional preparation relies on static questions, but real
            interviews are dynamic, conversational, and adaptive. Synclyft
            recreates that experience using human-like AI interviews that
            listen, respond, and challenge candidates in real time.
          </p>
        </div>
      </div>

      {/* ===== IMAGE SECTION ===== */}
      <div
        ref={(el) => (revealRefs.current[2] = el)}
        className="
          relative w-full px-6
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
      >
        <img
          src="img2.jpg"
          alt="Synclyft Interview Practice"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>
    </section>
  );
}
