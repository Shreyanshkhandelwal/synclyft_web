import React from "react";

export default function HelpContactSection() {
  return (
    <section
      className="
        relative w-full flex justify-center px-4 py-10
        bg-[#0b0f14] overflow-hidden
      "
    >
      {/* GRID BACKGROUND (Hero same) */}
      <div className="absolute inset-0 hero-grid opacity-30" />

      {/* ANIMATED GLOW (Hero same) */}
      <div
        className="
          absolute top-[-200px] left-1/2
          w-[700px] h-[700px]
         
          rounded-full blur-[160px]
          hero-glow
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative w-full max-w-3xl
          bg-black/70 backdrop-blur-md
          rounded-3xl px-8 py-10 text-white
        "
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold mb-3">
            Tell us how we can help
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="
                w-full rounded-xl
                bg-[#1f1f1f]/80 border border-gray-700
                px-4 py-3 outline-none
                focus:border-gray-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="
                w-full rounded-xl
                bg-[#1f1f1f]/80 border border-gray-700
                px-4 py-3 outline-none
                focus:border-gray-500
              "
            />
          </div>

          {/* Radio */}
          <div>
            <p className="text-sm mb-4 text-gray-300">
              Which best describes you?
            </p>

            <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300">
              {[
                "Freelancer",
                "Small Business",
                "Startup",
                "Enterprise",
                "Non-Profit",
                "Other",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="type"
                    className="accent-gray-300"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="
                w-full rounded-xl
                bg-[#1f1f1f]/80 border border-gray-700
                px-4 py-3 outline-none
                focus:border-gray-500 resize-none
              "
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <input type="checkbox" className="accent-gray-300" />
            <span>
              I accept the{" "}
              <span className="underline cursor-pointer hover:text-white">
                Terms
              </span>
            </span>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-3">
            <button
              type="submit"
              className="
                px-8 py-3 rounded-lg
                bg-white text-black font-medium
                hover:-translate-y-1 transition
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
