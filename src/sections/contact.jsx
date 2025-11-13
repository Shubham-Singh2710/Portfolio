import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Astra from "../assets/Astra.png";

export default function Contact() {
  // Initialize tsParticles with slim version (optimized)
  useEffect(() => {
    loadSlim();
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black text-white overflow-hidden px-6 md:px-12">
      {/* Moving Background Particles */}
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full -z-10"
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 70 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: 3 },
          },
          detectRetina: true,
        }}
      />

      {/* Contact Section Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl z-10">
        {/* Left Side: Floating Astro Image */}
        <motion.div
          className="flex justify-center md:justify-start w-full md:w-1/2"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={Astra} alt="Astronaut" className="w-72 md:w-96" />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">
            Get in Touch 🚀
          </h1>

          <form className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm mb-2 text-gray-300">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Explain Your Ideas
              </label>
              <textarea
                rows="5"
                placeholder="Share your project ideas..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-4 bg-cyan-500 text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
