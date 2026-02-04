import { useEffect, useRef } from "react";

export default function FeaturesIntelligence() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-black py-32 overflow-hidden">

      {/* CONTENT */}
      <div
        ref={ref}
        className="
          relative z-10
          max-w-7xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-2 gap-20 items-center
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
      >

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div className="relative overflow-visible">

  {/* OUTER 3D GLOW (IMAGE KE BAHAR) */}
  <div
    className="
      absolute -inset-4
      rounded-3xl
      bg-gradient-to-br from-[#9fd9e5]/40 via-[#5dbcd2]/25 to-transparent
      blur-3xl
      opacity-80
    "
  />

  {/* IMAGE CONTAINER */}
  <div className="relative rounded-2xl overflow-hidden">
    <img
      src="ai12.jpg"
      alt="Synclyft AI Intelligence"
      className="
        w-full h-[500px] object-cover rounded-2xl
        shadow-[0_25px_70px_rgba(0,0,0,0.65)]
      "
    />
  </div>
</div>



          {/* Synclyft Text */}
          <p className="text-white/70 leading-relaxed max-w-lg">
            <strong>Synclyft’s AI engine</strong> continuously learns from every
            interview session. It adapts questions in real time, analyzes
            candidate responses, and simulates real hiring scenarios —
            helping users improve clarity, confidence, and problem-solving
            skills with every practice round.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <button className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:-translate-y-1 transition">
              Start Practicing
            </button>

            {/* <button className="flex items-center gap-2 text-white/70 hover:text-white transition">
              Log In
              <span className="text-xl">→</span>
            </button> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-10">
            Intelligent Interviews <br />
            That Adapt, Respond, <br />
            and Evaluate — <br />
            Just Like Real Hiring <br />
            <span className="text-[#9fd9e5]">Powered by AI</span>
          </h2>

          <div className="relative overflow-visible">

  {/* OUTER 3D GLOW (IMAGE KE BAHAR) */}
  <div
    className="
      absolute -inset-4
      rounded-3xl
      bg-gradient-to-br from-[#9fd9e5]/40 via-[#5dbcd2]/25 to-transparent
      blur-3xl
      opacity-80
    "
  />

  {/* IMAGE CONTAINER */}
  <div className="relative rounded-2xl overflow-hidden w-full">
    <img
      src="ai13.jpg"
      alt="Synclyft AI Intelligence"
      className="
        w-full h-[500px] object-cover rounded-2xl
        shadow-[0_25px_70px_rgba(0,0,0,0.65)]
      "
    />
  </div>
</div>

        </div>

      </div>
    </section>
  );
}
