import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

/* ===== SOFT SCROLL REVEAL ANIMATION ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Footer = () => {
  /* ===== NEWSLETTER STATE ===== */
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    console.log("Subscribed Email:", email);
    alert("Thanks for subscribing to Synclyft!");
    setEmail("");
  };

  return (
    <footer className="bg-black text-white pt-30 overflow-hidden">
      
<div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-14">

    {/* ===== Brand Info ===== */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:col-span-2"
    >
      <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
        <span className="w-9 h-9 rounded-lg bg-[#9fc7cc]/20 flex items-center justify-center text-[#9fc7cc]">
          ▤
        </span>
        Synclyft
      </h2>

      <p className="text-white/60 text-sm leading-relaxed max-w-md">
        Synclyft is an AI-powered interview and skill-practice platform that
        simulates real technical, coding, HR, and behavioral interviews to help
        candidates build confidence and job-readiness.
      </p>

      <div className="mt-6 flex items-center gap-4 text-xs text-white/50">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          AI Interviews
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          Coding Rounds
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
          HR Prep
        </span>
      </div>
    </motion.div>

    {/* ===== Company ===== */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className="font-semibold mb-5 text-white">
        Company
      </h4>

      <ul className="space-y-3 text-white/70 text-sm">
        {[
          { name: "Home", path: "/" },
          { name: "About Synclyft", path: "/about" },
          { name: "Features", path: "/features" },
          // { name: "Pricing", path: "/pricing" },
          { name: "Contact", path: "/contact" },
        ].map((item, i) => (
          <li key={i}>
            <Link
              to={item.path}
              className="
                relative inline-block
                hover:text-white
                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0
                after:bg-[#9fc7cc]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* ===== Features ===== */}
    {/* <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className="font-semibold mb-5 text-white">
        Features
      </h4>

      <ul className="space-y-3 text-white/70 text-sm">
        {[
          "AI Technical Interviews",
          "Coding Round Simulator",
          "HR & Behavioral Interviews",
          "Voice & Video Interview Mode",
          "Performance Reports",
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 hover:text-white transition-colors"
          >
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#9fc7cc]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div> */}

    {/* ===== Legal ===== */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className="font-semibold mb-5 text-white">
        Legal
      </h4>

      <ul className="space-y-3 text-white/70 text-sm">
        {[
          { name: "Privacy Policy", path: "/privacy" },
          { name: "Terms of Service", path: "/terms" },
        ].map((item, i) => (
          <li key={i}>
            <Link
              to={item.path}
              className="
                hover:text-white
                transition-colors
                flex items-center gap-2
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>

  </div>

  {/* ===== Sub Divider ===== */}
  <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
</div>


      {/* ================= Bottom Bar ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex gap-6 flex-wrap">
            <span>© 2026 Synclyft. All rights reserved.</span>
            <Link to="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="underline hover:text-white">
              Terms of Service
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { icon: FaFacebookF, url: "https://facebook.com" },
              { icon: FaInstagram, url: "https://instagram.com" },
              { icon: FiTwitter, url: "https://twitter.com" },
              { icon: FaLinkedinIn, url: "https://linkedin.com" },
              { icon: FaYoutube, url: "https://youtube.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative w-12 h-12 rounded-full
                  flex items-center justify-center
                  bg-white/5 border border-white/10
                  transition-all duration-300
                  hover:scale-110 hover:bg-white/10
                "
              >
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#9fc7cc] blur-xl opacity-0 hover:opacity-100 transition-opacity" />
                <item.icon className="text-xl text-white z-10" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
