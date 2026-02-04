import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12
        rounded-lg
        bg-[#2a3a3a]/60
        text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition-all duration-300
      "
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;
