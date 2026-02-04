import React, { useEffect, useRef, useState } from "react";

const ScrollTextAnimation = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const texts = [
    "Intelligent Queries",
    "Adaptive Caching",
    "Collaboration",
    "Real-time Analytics",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const scrollStart = window.innerHeight;
      const scrollEnd = rect.height;


      const scrolled = Math.min(
        Math.max(scrollStart - rect.top, 0),
        scrollEnd
      );

      setProgress(scrollEnd > 0 ? scrolled / scrollEnd : 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <section
  ref={sectionRef}
  className="relative w-full bg-[#3a4d4d] pb-40"
>


      {/* SCROLL SPACE (like h-[300vh] in cards) */}
      <div className="relative h-[450vh]">

        {/* STICKY LOCKED VIEWPORT */}
        <div className="sticky top-0 h-screen flex items-center justify-center ">

          <div className="relative w-full max-w-6xl flex justify-center">

           {texts.map((text, index) =>
            { const step = 1 / texts.length; 
              const start = index * step;
               const end = start + step; 



               let y = 0; let opacity = 0;
                let blur = 0; let scale = 1; 
                if (progress < start) { y = 80; opacity = 0.25; }
                 else if (progress >= start && progress <= end)
                   { const local = (progress - start) / step;
                     y = 60 - local * 60;
                      opacity = 1; } 
                      else { y = -80;
                         opacity = 0;
                         blur = 6; 
                         scale = 0.60; }

                  return ( <div key={index} style={{ transform: `translateY(${y}px) scale(${scale})`, opacity, filter: `blur(${blur}px)`, transition: "all 0.3s ease-out", }} className="absolute inset-x-10 flex justify-center" > <h1 className=" font-bold text-white text-center leading-tight text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] " > {text} </h1> </div> );
                       })}


          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextAnimation;
