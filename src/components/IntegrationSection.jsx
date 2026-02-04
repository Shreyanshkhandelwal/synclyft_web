import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { icon: "Integration-1.png", x: -420, y: -300 },
  { icon: "Integration-2.png", x:  420, y: -300 },
  { icon: "Integration-3.png", x: -360, y:  280 },
  { icon: "Integration-4.png", x:  360, y:  280 },
];

const IntegrationSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 140%", "end 80%"],
  });

  const textOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.8],
    [0, 0.6, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-[220vh] overflow-visible"
    >
      <div className="sticky top-5 h-screen flex items-center justify-center">

        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute z-10 text-center max-w-3xl px-10 pointer-events-none"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Get Hired Faster
          </h2>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#9fc7cc] mt-2">
            With AI-Driven Career Support
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            Accelerate your job search with intelligent tools designed to
            prepare, guide, and position you for success.
          </p>

          <ul className="mt-6 space-y-3 text-white/70 text-left inline-block">
            <li className="flex items-start gap-2">
              <span className="text-[#9fc7cc]">•</span>
              Personalized resume tips
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9fc7cc]">•</span>
              AI-powered job recommendations with match percentage
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9fc7cc]">•</span>
              Role-specific mock interviews with live guidance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9fc7cc]">•</span>
              Hiring readiness and confidence insights
            </li>
          </ul>
        </motion.div>

        {cards.map((card, i) => {
          const x = useTransform(
            scrollYProgress,
            [0, 0.35, 0.85],
            [0, 0, card.x]
          );

          const y = useTransform(
            scrollYProgress,
            [0, 0.35, 0.85],
            [0, 0, card.y]
          );

          const scale = useTransform(
            scrollYProgress,
            [0, 0.3, 0.85],
            [1, 1, 0.94] 
          );

          return (
            <motion.div
              key={i}
              style={{
                x,
                y,
                scale,
                willChange: "transform",
              }}
              className="
                absolute z-20 w-56 h-36 rounded-xl
                bg-gradient-to-br from-[#1f2a2a] to-[#0e1313]
                border border-white/10
                flex items-center justify-center
                shadow-xl
              "
            >
              <img src={card.icon} className="w-16 opacity-90" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default IntegrationSection;
