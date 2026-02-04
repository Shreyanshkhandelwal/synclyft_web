import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
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
      { threshold: 0.2 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0a1f2b] via-[#1a3a4a] to-[#0a1f2b]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none overflow-hidden isolate">
        {/* GRID */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,125,154,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,154,0.12) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        {/* FLOATING ELEMENTS */}
        <div className="absolute inset-0 will-change-transform">
          <div className="absolute top-[15%] left-[15%] w-24 h-24 bg-[#1a4d5e]/60 backdrop-blur-lg rounded-3xl flex items-center justify-center animate-float1">
            <div className="flex flex-col gap-2 w-10">
              <span className="h-1 bg-white/70 rounded-sm" />
              <span className="h-1 bg-white/70 rounded-sm" />
              <span className="h-1 bg-white/70 rounded-sm" />
            </div>
          </div>

          <div className="absolute top-[18%] right-[12%] w-24 h-24 bg-[#1a4d5e]/60 backdrop-blur-lg rounded-3xl flex items-center justify-center animate-float2">
            <div className="flex flex-col gap-1.5">
              <div className="w-10 h-3 border-2 border-white/70 rounded-full" />
              <div className="w-10 h-3 border-2 border-white/70 rounded-full" />
              <div className="w-10 h-3 border-2 border-white/70 rounded-full" />
            </div>
          </div>

          <div className="absolute bottom-[22%] left-[12%] w-24 h-24 bg-[#1a4d5e]/60 backdrop-blur-lg rounded-3xl flex items-center justify-center animate-float3">
            <div className="flex flex-col gap-2 w-10">
              <div className="h-4 border-2 border-white/70 rounded" />
              <div className="h-4 border-2 border-white/70 rounded" />
            </div>
          </div>

          <div className="absolute bottom-[20%] right-[14%] w-24 h-24 bg-[#1a4d5e]/60 backdrop-blur-lg rounded-3xl flex items-center justify-center animate-float4">
            <svg
              className="w-10 h-10 text-white/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1
            ref={(el) => (revealRefs.current[0] = el)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 opacity-0 translate-y-10 transition-all duration-700"
          >
            Synclyft – AI-Powered <br />
            <span className="text-[#5dbcd2]">Hiring & Interview Platform</span>
          </h1>

          <p
            ref={(el) => (revealRefs.current[1] = el)}
            className="text-base sm:text-lg md:text-xl text-white/75 mb-10 leading-relaxed opacity-0 translate-y-10 transition-all duration-700 delay-150"
          >
            Synclyft is an AI-powered hiring and interview preparation platform
            designed to help students, freshers, and professionals prepare
            effectively, perform confidently, and get hired faster.
          </p>

          <div
            ref={(el) => (revealRefs.current[2] = el)}
            className="flex justify-center opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <Link
              to="/features"
              className="px-8 py-4 rounded-lg font-medium bg-white text-black hover:shadow-[0_0_25px_rgba(159,217,229,0.6)] hover:-translate-y-0.5 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          to { transform: translate(50px, 50px); }
        }
        .animate-float1 { animation: float1 15s ease-in-out infinite; }
        .animate-float2 { animation: float2 15s ease-in-out infinite; }
        .animate-float3 { animation: float3 15s ease-in-out infinite; }
        .animate-float4 { animation: float4 15s ease-in-out infinite; }

        @keyframes float1 { 50% { transform: translateY(-40px); } }
        @keyframes float2 { 50% { transform: translateX(-40px); } }
        @keyframes float3 { 50% { transform: translate(30px,30px); } }
        @keyframes float4 { 50% { transform: translate(-25px,-25px); } }
      `}</style>
    </section>
  );
};

export default HomeHero;
