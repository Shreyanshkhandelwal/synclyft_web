import React from "react";

const WaitlistModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70">

      {/* OUTSIDE CLICK */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-2xl bg-[#0a1f2b] border border-[#9fd9e5]/40 rounded-3xl p-10 z-10">

        {/* TITLE */}
        <h2 className="text-white text-3xl font-semibold mb-8 text-center">
          Join the Synclyft Waitlist
        </h2>

        {/* INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            placeholder="Your Full Name"
            className="bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-white text-base outline-none focus:border-[#9fd9e5]"
          />
          <input
            placeholder="Your Email Address"
            className="bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-white text-base outline-none focus:border-[#9fd9e5]"
          />
        </div>

        <input
          placeholder="Phone Number (Optional)"
          className="w-full mb-6 bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-white text-base outline-none focus:border-[#9fd9e5]"
        />

        <select
          className="w-full mb-8 bg-black/40 border border-white/20 rounded-xl px-5 py-4 text-white text-base outline-none focus:border-[#9fd9e5]"
        >
          <option>Select your role</option>
          <option>Student</option>
          <option>Fresher</option>
          <option>Professional</option>
          <option>Recruiter</option>
          <option>Institute</option>
        </select>

        {/* CTA */}
        <button className="w-full py-4 rounded-xl bg-[#9fd9e5] text-black text-lg font-medium hover:shadow-[0_0_30px_rgba(159,217,229,0.6)] transition">
          Click me to stay tuned
        </button>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default WaitlistModal;
