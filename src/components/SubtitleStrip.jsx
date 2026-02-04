import React, { useEffect, useRef, useState } from "react";

const ScrollTextSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const texts = [
    "Intelligent Queries",
    "Adaptive Caching",
    "Collaboration",
    "Real-time Analytics",
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const current = Math.min(Math.max(-rect.top, 0), total);

      setProgress(total > 0 ? current / total : 0);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#3a4d4d] w-full overflow-hidden"
    >
      {/* 🔥 SCROLL HEIGHT (CONTROLLED, NO EXTRA SPACE) */}
      <div className="relative h-[140vh] sm:h-[150vh]">

        {/* 🔥 STICKY CONTAINER (NO BOTTOM GAP) */}
        <div
          className="
            sticky top-0
            min-h-[65vh]
            flex items-start justify-center
            px-4
            pt-8
            pb-2
          "
        >
          <div className="relative w-full max-w-5xl">

            {texts.map((text, index) => {
              const step = 1 / texts.length;
              const start = index * step;
              const end = start + step;

              let y = 0;
              let opacity = 0;
              let blur = 0;
              let scale = 1;

              if (progress < start) {
                y = 60;
                opacity = 0.35;
              } else if (progress >= start && progress <= end) {
                const local = (progress - start) / step;
                y = 60 - local * 60;
                opacity = 1;
              } else {
                y = -60;
                opacity = 0;
                blur = 6;
                scale = 0.96;
              }

              return (
                <div
                  key={index}
                  style={{
                    transform: `translateY(${y}px) scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                    transition: "all 0.3s ease-out",
                  }}
                  className="absolute inset-x-0 flex justify-center"
                >
                  <h1
                    className="
                      font-bold text-white text-center leading-tight
                      text-[2.2rem]
                      sm:text-[3.2rem]
                      md:text-[4.5rem]
                      lg:text-[6rem]
                    "
                  >
                    {text}
                  </h1>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextSection;
