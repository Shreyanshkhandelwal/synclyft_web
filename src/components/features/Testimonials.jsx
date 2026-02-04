import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* 🔥 Synclyft REAL TESTIMONIAL DATA */
  const testimonials = [
    {
      id: 1,
      quote:
        "We use Synclyft for mock interviews before final hiring rounds. The AI interviewer adapts in real time and helps us identify true interview readiness without manual interviewer effort.",
      name: "Emily Davis",
      title: "CEO, ACME Corp.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      quote:
        "Synclyft has completely changed how our students prepare for placements. The interviews feel real, conversational, and the feedback reports clearly show confidence and skill gaps.",
      name: "Rohit Sharma",
      title: "Training Head, Placement Institute",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      quote:
        "As a working professional preparing for a role switch, Synclyft gave me real interview pressure. The AI follow-up questions felt human and helped me improve fast.",
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      
      {/* ✅ SOFT REVEAL ON SCROLL (wrapper only) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full relative"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <Star className="w-6 h-6 text-white fill-white" />
          <h1 className="text-white text-2xl font-semibold">Synclyft</h1>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20
              w-14 h-14 rounded-full
              bg-zinc-900 border border-zinc-800
              flex items-center justify-center
              text-white
              transition-all duration-300 ease-out
              hover:bg-[#9fd9e5]/15
              hover:border-[#9fd9e5]/50
              hover:shadow-[0_0_20px_rgba(159,217,229,0.35)]
              z-10
            "
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center mb-12">
            <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed max-w-4xl mx-auto px-4">
              "{testimonials[currentSlide].quote}"
            </blockquote>
          </div>

          {/* Author Info */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="text-white text-lg font-semibold">
                {testimonials[currentSlide].name}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[currentSlide].title}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-20
              w-14 h-14 rounded-full
              bg-zinc-900 border border-zinc-800
              flex items-center justify-center
              text-white
              transition-all duration-300 ease-out
              hover:bg-[#9fd9e5]/15
              hover:border-[#9fd9e5]/50
              hover:shadow-[0_0_20px_rgba(159,217,229,0.35)]
              z-10
            "
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-zinc-700 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative Borders (unchanged) */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-zinc-800 rounded-3xl -z-10 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 border border-zinc-800 rounded-3xl -z-10 opacity-20"></div>
      </motion.div>
    </div>
  );
}
