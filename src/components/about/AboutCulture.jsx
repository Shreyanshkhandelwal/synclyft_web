import { useEffect, useRef } from "react";

export default function AboutCulture() {
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
    <section className="relative w-full bg-black overflow-hidden text-white">
      {/* ===== GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ===== GLOW ORBS ===== */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#9fc7cc]/50 rounded-full blur-[200px] animate-floatSlow pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#9fc7cc]/50 rounded-full blur-[180px] animate-floatSlow delay-2000 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#9fc7cc]/50 rounded-full blur-[160px] animate-floatSlow delay-4000 pointer-events-none" />

      {/* ===== INTRO ===== */}
      <div
        ref={(el) => (revealRefs.current[0] = el)}
        className="
          relative max-w-7xl mx-auto px-6 py-28
          grid grid-cols-1 md:grid-cols-2 gap-20 items-center
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
      >
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6">
            Our Culture & Mission
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Synclyft was built to bridge the gap between learning concepts and
            performing confidently in real interviews. We believe interview
            preparation should feel realistic, conversational, and pressure-driven
            — just like actual hiring processes.
          </p>

          {/* <button className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:-translate-y-1 transition">
            Start Practicing
          </button> */}
        </div>

        <div className="hidden md:flex justify-end">
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-[2px] w-64 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 1 ===== */}
      <div className="relative max-w-7xl mx-auto px-6 pb-40 space-y-40">
        <div
          ref={(el) => (revealRefs.current[1] = el)}
          className="
            grid grid-cols-1 md:grid-cols-2 gap-20 items-center
            opacity-0 translate-y-10
            transition-all duration-1000 ease-out
          "
        >
          <img
            src="ai9.webp"
            className="w-full h-[520px] object-cover rounded-2xl"
            alt="AI Interview Simulation"
          />

          <div>
            <h3 className="text-4xl font-semibold mb-6">
              Interviews That Feel Real
            </h3>
            <p className="text-white/70 leading-relaxed max-w-lg">
              Unlike traditional platforms that rely on static questions,
              Synclyft recreates real interview pressure using AI that listens,
              understands, and responds like a human interviewer — with natural
              follow-ups and topic switching.
            </p>
          </div>

        </div>

        {/* ===== SECTION 2 ===== */}
        <div
          ref={(el) => (revealRefs.current[2] = el)}
          className="
            grid grid-cols-1 md:grid-cols-2 gap-20 items-center
            opacity-0 translate-y-10
            transition-all duration-1000 ease-out
          "
        >
          <div>
            <h3 className="text-4xl font-semibold mb-6">
              Built for Learners & Professionals
            </h3>
            <p className="text-white/70 leading-relaxed max-w-lg">
              Whether you are a student preparing for placements, a fresher
              entering the job market, or a professional planning a role switch,
              Synclyft adapts interviews based on your experience and goals.
            </p>
          </div>

          <img
            src="/client2.jpg"
            className="w-full h-[520px] object-cover rounded-2xl"
            alt="Interview Practice"
          />
        </div>

        {/* ===== SECTION 3 ===== */}
        <div
          ref={(el) => (revealRefs.current[3] = el)}
          className="
            grid grid-cols-1 md:grid-cols-2 gap-20 items-center
            opacity-0 translate-y-10
            transition-all duration-1000 ease-out
          "
        >
          <img
            src="/ai10.jpg"
            className="w-full h-[520px] object-cover rounded-2xl"
            alt="Performance Reports"
          />

          <div>
            <h3 className="text-4xl font-semibold mb-6">
              Our Vision
            </h3>
            <p className="text-white/70 leading-relaxed max-w-lg">
              Our mission is to make interview preparation realistic,
              accessible, and confidence-building. Synclyft aims to become the
              most trusted AI-powered interview practice platform, helping
              candidates turn knowledge into real-world performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
