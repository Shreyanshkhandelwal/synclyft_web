/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0a1f2b",
          medium: "#1a3a4a",
          teal: "#1a4d5e",
          cyan: "#5dbcd2",
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },

      animation: {
       
        marquee: "marquee 35s linear infinite",
        marqueeSlow: "marquee 45s linear infinite",
        float1: "float1 15s ease-in-out infinite",
        float2: "float2 15s ease-in-out infinite 2s",
        float3: "float3 15s ease-in-out infinite 4s",
        float4: "float4 15s ease-in-out infinite 6s",

        floatSlow: "floatSlow 18s ease-in-out infinite",

        cyanGlow: "cyanGlow 16s ease-in-out infinite",
        cyanPulse: "cyanPulse 6s ease-in-out infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        float1: {
          "0%,100%": { transform: "translate(0,0) rotate(0deg)" },
          "25%": { transform: "translate(30px,-30px) rotate(5deg)" },
          "50%": { transform: "translate(0,-60px) rotate(0deg)" },
          "75%": { transform: "translate(-30px,-30px) rotate(-5deg)" },
        },
        float2: {
          "0%,100%": { transform: "translate(0,0) rotate(0deg)" },
          "25%": { transform: "translate(-40px,30px) rotate(-5deg)" },
          "50%": { transform: "translate(-80px,0) rotate(0deg)" },
          "75%": { transform: "translate(-40px,-30px) rotate(5deg)" },
        },
        float3: {
          "0%,100%": { transform: "translate(0,0) rotate(0deg)" },
          "33%": { transform: "translate(40px,40px) rotate(3deg)" },
          "66%": { transform: "translate(20px,-20px) rotate(-3deg)" },
        },
        float4: {
          "0%,100%": { transform: "translate(0,0) rotate(0deg)" },
          "33%": { transform: "translate(-30px,-40px) rotate(-4deg)" },
          "66%": { transform: "translate(30px,-20px) rotate(4deg)" },
        },

        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(30px, -40px)" },
        },

        cyanGlow: {
          "0%,100%": {
            transform: "translate(0,0) scale(1)",
            opacity: "0.35",
          },
          "50%": {
            transform: "translate(40px,-30px) scale(1.15)",
            opacity: "0.6",
          },
        },

        cyanPulse: {
          "0%,100%": { opacity: "0.2" },
          "50%": { opacity: "0.45" },
        },
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".pause": {
          animationPlayState: "paused",
        },
      });
    },
  ],
};
