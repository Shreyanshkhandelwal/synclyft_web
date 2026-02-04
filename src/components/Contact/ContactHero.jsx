import React from "react";

export default function ContactPage() {
  return (
    <section className="  relative min-h-screen overflow-hidden
    bg-gradient-to-br from-[#0a1f2b] via-[#1a3a4a] to-[#0a1f2b]
    pt-2 pb-6 px-4">

      {/* ===== HOME STYLE BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none ">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* animated grid */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,125,154,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,154,0.12) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 30s linear infinite",
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-white py-36 px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Contact us</h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Get in touch with <span className="text-white font-medium">Synclyft</span>.
            Whether you’re a student, professional, institute, or company —
            we’re here to help you practice better interviews, hire smarter,
            and move faster.
          </p>
        </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ===== SALES ===== */}
        <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors bg-black">
          <div className="bg-black border border-gray-800 rounded-xl p-6 mb-6">
            <svg className="w-12 h-12 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Sales</h2>

          <p className="text-gray-400 text-center mb-8 leading-relaxed">
            Talk to our sales team about <strong className="text-white">Synclyft Pro</strong>,
            enterprise hiring solutions, campus placements, and institutional plans.
            We help organizations conduct AI-powered interviews and scale hiring efficiently.
          </p>

          <button className="w-full flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <span>Contact Sales</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ===== HELP & SUPPORT ===== */}
        <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors bg-black">
          <div className="bg-black border border-gray-800 rounded-xl p-6 mb-6">
            <svg className="w-12 h-12 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Help & Support</h2>

          <p className="text-gray-400 text-center mb-8 leading-relaxed">
            Need help with mock interviews, performance reports, AI feedback,
            or your Synclyft account? Our support team is here to guide you
            through every step of your interview preparation journey.
          </p>

          <button className="w-full flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <span>Get Support</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ===== MEDIA & PRESS ===== */}
        <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors bg-black">
          <div className="bg-black border border-gray-800 rounded-xl p-6 mb-6">
            <svg className="w-12 h-12 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Media & Press</h2>

          <p className="text-gray-400 text-center mb-8 leading-relaxed">
            For media inquiries, partnerships, or press coverage related to
            <strong className="text-white"> Synclyft’s AI hiring platform</strong>,
            connect with our media team to access brand assets and announcements.
          </p>

          <button className="w-full flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <span>Get Press Kit</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
      </div>

      {/* GRID ANIMATION */}
      <style>{`
        @keyframes gridMove {
          to { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}
