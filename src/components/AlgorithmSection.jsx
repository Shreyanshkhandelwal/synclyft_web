import React, { useEffect, useRef, useState } from "react";

/* =========================
   SYNClyft TESTIMONIALS
========================= */
const testimonials = [
  {
    text: "Synclyft’s AI interviews felt surprisingly real. The follow-up questions and pressure were exactly like my campus placement interviews.",
    name: "Ananya Sharma",
    role: "Final Year Student",
    img: "client.avif",
  },
  {
    text: "I struggled with confidence in HR rounds. Synclyft helped me structure my answers and improve communication before the real interview.",
    name: "Rohit Mehta",
    role: "Fresher – Software Engineer",
    img: "client.avif",
  },
  {
    text: "The coding round simulator and performance reports showed me exactly where I was weak. That feedback made a huge difference.",
    name: "Kunal Verma",
    role: "Backend Developer",
    img: "client.avif",
  },
  {
    text: "Unlike other platforms, Synclyft adapts to your answers. It doesn’t feel like a quiz, it feels like a conversation.",
    name: "Sneha Iyer",
    role: "Data Analyst",
    img: "client.avif",
  },
  {
    text: "Preparing for a role switch was stressful. Practicing with AI interviews gave me clarity and confidence before applying.",
    name: "Amit Kulkarni",
    role: "Working Professional",
    img: "client.avif",
  },
  {
    text: "We use Synclyft for mock interviews at our institute. It saves time and gives students consistent, unbiased feedback.",
    name: "Neha Kapoor",
    role: "Placement Coordinator",
    img: "client.avif",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        w-full bg-black py-28 overflow-hidden
        transition-opacity duration-[1000ms] ease-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* ===== HEADING ===== */}
      <div
        className={`
          text-center mb-20
          transition-all duration-[900ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Trusted by <span className="text-[#9fc7cc]">Learners & Professionals</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          From students and freshers to working professionals, Synclyft helps
          candidates prepare confidently for real interviews.
        </p>
      </div>

      {/* ===== MARQUEE ROW 1 ===== */}
      <div className="relative mb-12">
        <div
          className={`flex gap-8 transition-opacity duration-700 delay-200 ${
            visible ? "animate-marquee opacity-100" : "opacity-0"
          }`}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={`row1-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ===== MARQUEE ROW 2 ===== */}
      <div className="relative">
        <div
          className={`flex gap-8 transition-opacity duration-700 delay-300 ${
            visible ? "animate-marqueeSlow opacity-100" : "opacity-0"
          }`}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={`row2-${i}`} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   TESTIMONIAL CARD
========================= */
function TestimonialCard({ item, index }) {
  const isBig = index % 2 === 0;

  return (
    <div
      className={`
        min-w-[320px]
        ${isBig ? "h-[320px] mt-0" : "h-[270px] mt-10"}
        bg-gradient-to-br from-[#1b2424] via-[#121818] to-[#0b0f0f]
        backdrop-blur-xl
        border border-white/10
        rounded-2xl p-6
        flex flex-col justify-between
        text-white
        transition-all duration-500 ease-out
        hover:scale-105 hover:-translate-y-3
        hover:shadow-[0_0_40px_rgba(159,199,204,0.15)]
      `}
    >
      <p className="text-sm text-white/80 leading-relaxed">
        “{item.text}”
      </p>

      <div className="flex items-center gap-4 mt-6">
        <img
          src={item.img}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-sm">{item.name}</h4>
          <p className="text-xs text-white/50">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
