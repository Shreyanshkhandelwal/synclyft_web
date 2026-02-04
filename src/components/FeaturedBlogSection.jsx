import React, { useEffect, useRef } from "react";


const blogs = [
  {
    // tag: "#Interviews",
    category: "Preparation",
    title: "Why Practicing Interviews with AI Feels More Real",
    desc: "Traditional interview prep focuses on static questions. Synclyft uses adaptive AI to simulate real interview pressure, follow-ups, and conversational flow.",
    img: "ai6.webp",
    author: "Synclyft Team",
    date: "October 4, 2025",
    read: "4 min read",
  },
  {
    // tag: "#Placements",
    category: "Students",
    title: "How Students Can Prepare Smarter for Campus Placements",
    desc: "From aptitude and coding rounds to HR interviews, learn how realistic mock interviews can improve confidence and on-campus performance.",
    img: "ai7.jpg",
    author: "Synclyft Team",
    date: "October 2, 2025",
    read: "5 min read",
  },
  {
    // tag: "#CareerGrowth",
    category: "Professionals",
    title: "Preparing for a Role Switch: Beyond Resume and Skills",
    desc: "Discover how interview practice, communication clarity, and structured answers play a critical role when switching jobs or domains.",
    img: "ai8.avif",
    author: "Synclyft Team",
    date: "September 28, 2025",
    read: "6 min read",
  },
];

export default function FeaturedBlogSection() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-black py-28">
      {/* ===== HEADING ===== */}
      <div
        ref={(el) => (revealRefs.current[0] = el)}
        className="
          text-center mb-20
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Insights & <span className="text-[#9fc7cc]">Guides</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Learn about interview preparation, confidence building, and how AI is
          reshaping the way candidates practice for real-world hiring.
        </p>
      </div>

      {/* ===== BLOG GRID ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              ref={(el) => (revealRefs.current[i + 1] = el)}
              className="
                opacity-0 translate-y-10
                transition-all duration-1000 ease-out
              "
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== VIEW ALL BUTTON ===== */}
      <div
        ref={(el) => (revealRefs.current[blogs.length + 1] = el)}
        className="
          flex justify-center mt-20
          opacity-0 translate-y-10
          transition-all duration-1000 ease-out
        "
        style={{ transitionDelay: "300ms" }}
      >
        {/* <button
          className="
            px-8 py-3 rounded-lg bg-white text-black font-medium hover:-translate-y-1 transition
          "
        >
          View all articles
          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </button> */}
      </div>
    </section>
  );
}


function BlogCard({ blog }) {
  return (
    <div className="group transition-all duration-300 cursor-pointer">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-2xl mb-5">
        <img
          src={blog.img}
          alt={blog.title}
          className="
            w-full h-[220px] object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-sm text-white">
            {blog.tag}
          </span>
        </span>
      </div>

      {/* CATEGORY */}
      <span
        className="
          inline-block mb-3 text-xs px-3 py-1 rounded-full
          bg-[#9fc7cc]/20 text-[#9fc7cc]
          transition-colors duration-300
          group-hover:bg-[#9fc7cc]/30
        "
      >
        {blog.category}
      </span>

      {/* TITLE */}
      <h3
        className="
          text-xl font-semibold leading-snug mb-3
          transition-all duration-300
          group-hover:text-[#9fc7cc]
          group-hover:translate-x-1
        "
      >
        {blog.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-sm text-white/70 mb-6
          transition-all duration-300
          group-hover:text-white
          group-hover:translate-x-1
        "
      >
        {blog.desc}
      </p>

      {/* AUTHOR */}
      <div className="flex items-center gap-3 transition-all duration-300 group-hover:translate-x-1">
        <img
          src="/client.avif"
          className="w-9 h-9 rounded-full object-cover"
          alt="author"
        />
        <div className="text-sm">
          <p className="font-medium transition-colors group-hover:text-[#9fc7cc]">
            {blog.author}
          </p>
          <p className="text-white/50 text-xs">
            {blog.date} • {blog.read}
          </p>
        </div>
      </div>
    </div>
  );
}
