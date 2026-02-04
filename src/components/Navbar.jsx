import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import WaitlistModal from "./common/WaitlistModal";

const Navbar = () => {
  const navRef = useRef(null);
  const [openWaitlist, setOpenWaitlist] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ================= ENTRY ANIMATION ================= */
  useEffect(() => {
    if (!navRef.current) return;

    navRef.current.classList.remove("opacity-0", "-translate-y-6");
    navRef.current.classList.add("opacity-100", "translate-y-0");
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={navRef}
        className="
          fixed top-0 inset-x-0
          z-[9999]
          backdrop-blur-xl bg-black/40
          border-b border-white/10
          overflow-visible
          opacity-0 -translate-y-6
          transition-all duration-700 ease-out
        "
      >
        {/* INNER CONTAINER */}
        <div
          className="
            w-full
            max-w-[1280px]
            mx-auto
            px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
            py-3 sm:py-4
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 text-white font-semibold">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9fd9e5"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <span className="text-lg tracking-wide">Synclyft</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-6 lg:gap-10 text-sm text-white">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Features", path: "/features" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-white/80 hover:text-white transition
                     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                     after:w-0 after:bg-[#9fd9e5] after:transition-all
                     hover:after:w-full ${
                       isActive
                         ? "after:w-full text-white font-semibold"
                         : ""
                     }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setOpenWaitlist(true)}
              className="
                px-8 py-3 rounded-lg
                bg-white text-black font-medium
                transition-all
                hover:shadow-[0_0_25px_rgba(159,217,229,0.6)]
              "
            >
              Join Waitlist
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h20M3 13h20M3 20h20" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div
          className="
            fixed inset-0
            z-[9998]
            bg-black/95 backdrop-blur-xl
            flex flex-col
            px-6
          "
        >
          {/* CLOSE */}
          <div className="flex justify-end pt-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-4xl leading-none"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* LINKS */}
          <ul className="flex flex-col items-center gap-7 text-white text-lg mt-16">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Features", path: "/features" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#9fd9e5]"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => {
              setOpenWaitlist(true);
              setMobileOpen(false);
            }}
            className="
              mt-auto mb-12 mx-auto
              w-full max-w-xs
              px-12 py-4
              rounded-xl
              bg-white text-black font-semibold
            "
          >
            Join Waitlist
          </button>
        </div>
      )}

      {/* ================= MODAL ================= */}
      {openWaitlist && (
        <WaitlistModal onClose={() => setOpenWaitlist(false)} />
      )}
    </>
  );
};

export default Navbar;
