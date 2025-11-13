import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-14 overflow-hidden">
      {/* 🌌 Subtle Floating Particle Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          opacity: 0.1,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🌟 Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center space-y-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Name */}
        <h2 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Shubham Singh
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            whileHover={{ scale: 1.3, color: "#0077b5" }}
            href="https://www.linkedin.com/in/shubham-singh-20b6a2306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3, color: "#ffffff" }}
            href="https://github.com/Shubham-Singh2710"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Divider Line */}
        <motion.div
          className="h-0.5 w-32 bg-linear-to-r from-cyan-400 to-blue-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Quote */}
        <motion.p
          className="text-gray-400 italic text-sm sm:text-base max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          “Success is when preparation meets opportunity.”
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          © 2025 Shubham Singh. All rights reserved.
        </motion.p>
      </motion.div>

      {/* 💫 Glowing Cyan & Blue Orbs */}
      <motion.div
        className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[140px]"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[160px]"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
}
