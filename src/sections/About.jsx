import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; // ✅ your image path

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505] text-white overflow-hidden px-6 py-16"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd82d] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side - Profile Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00bf8f]/40 to-[#1cd82d]/30 blur-3xl opacity-60"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-[0_0_60px_rgba(0,191,143,0.4)] border-2 border-[#00bf8f] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00bf8f] mb-4">
            Shubham Singh
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
            Full Stack Developer
          </h3>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
            I build scalable, modern applications with a strong focus on clean
            architecture, delightful UX, and performance. My toolkit spans{" "}
            <span className="text-[#00bf8f] font-medium">
              Java, React, Next.js, TypeScript, Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="text-[#00bf8f] font-medium">RESTful APIs</span> —
            bringing ideas to life from concept to production with robust APIs
            and smooth interfaces.
          </p>

          {/* Info Boxes */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-10">
            <div className="px-6 py-4 border border-gray-700 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <p className="font-semibold text-[#00bf8f]">Experience</p>
              <p className="text-sm text-gray-400">1+ Years</p>
            </div>

            <div className="px-6 py-4 border border-gray-700 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <p className="font-semibold text-[#00bf8f]">Specialty</p>
              <p className="text-sm text-gray-400">Full Stack</p>
            </div>

            <div className="px-6 py-4 border border-gray-700 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <p className="font-semibold text-[#00bf8f]">Focus</p>
              <p className="text-sm text-gray-400">Performance & UX</p>
            </div>
          </div>

          {/* About Me Section */}
          <div className="bg-[#0a0a0a]/60 p-6 rounded-2xl border border-gray-700 shadow-lg backdrop-blur-md">
            <h4 className="text-2xl font-semibold mb-3 text-white">
              About Me
            </h4>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I’m a Full Stack Developer skilled in building scalable and user-focused web applications using React, Node.js, and Tailwind CSS. I also have a strong foundation in C++ and am currently practicing DSA to sharpen my problem-solving and coding efficiency.  
            </p>
            <p className="text-gray-400 mt-3">
              Beyond coding, I enjoy designing, learning new technologies, and
              inspiring others by sharing what I build.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
