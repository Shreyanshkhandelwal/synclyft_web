import { useEffect, useRef } from "react";

export default function FeaturesCapabilities() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "opacity-100",
            "translate-y-0"
          );
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden py-40">

      {/* ===== LEFT DIAGONAL STRIPES ===== */}
      <div className="absolute left-0 top-0 h-full w-[28%] pointer-events-none">
        <div
          className="h-full w-full opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(159,217,229,0.35) 0px, rgba(159,217,229,0.35) 4px, transparent 4px, transparent 14px)",
          }}
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div
        ref={ref}
        className="
          relative z-10
          max-w-7xl mx-auto px-6
          opacity-0 translate-y-12
          transition-all duration-[1000ms] ease-out
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">

          {/* ===== LEFT TEXT ===== */}
          <div className="space-y-6">
            <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
              Monitor <br />
              Secure Your <br />
              Real-Time
            </h2>
          </div>

          {/* ===== CENTER IMAGES ===== */}
          <div className="flex flex-col items-center gap-12">
            <img
              src="/graph.webp"
              alt="Real-time analytics"
              className="w-90 h-35 object-cover rounded-lg shadow-2xl"
            />
            <img
              src="/ai11.avif"
              alt="AI powered analysis"
              className="w-70 h-44 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* ===== RIGHT TEXT ===== */}
          <div className="space-y-6">
            <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
              Analyze, and <br />
              Secure Your <br />
              Application
            </h2>

            <h3 className="text-[#9fd9e5] text-5xl md:text-6xl font-semibold">
              Powered by <br /> AI
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
