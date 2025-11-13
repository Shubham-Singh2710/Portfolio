import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiVite,
} from "react-icons/si";

export default function MySkills() {
  const controls = useAnimation();

  // Continuous left-right animation for icons
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: -400,
          transition: { duration: 10, ease: "linear" },
        });
        await controls.start({
          x: 0,
          transition: { duration: 10, ease: "linear" },
        });
      }
    };
    loop();
  }, [controls]);

  // Updated skills
  const skills = [
    { icon: <SiCplusplus size={45} />, name: "C++" },
    { icon: <FaPython size={45} />, name: "Python" },
    { icon: <FaJava size={45} />, name: "Java" },
    { icon: <FaJsSquare size={45} />, name: "JavaScript" },
    { icon: <FaReact size={45} />, name: "React" },
    { icon: <SiNextdotjs size={45} />, name: "Next.js" },
    { icon: <FaNodeJs size={45} />, name: "Node.js" },
    { icon: <SiMongodb size={45} />, name: "MongoDB" },
    { icon: <SiTailwindcss size={45} />, name: "Tailwind CSS" },
    { icon: <FaHtml5 size={45} />, name: "HTML5" },
    { icon: <FaCss3Alt size={45} />, name: "CSS3" },
    { icon: <FaGitAlt size={45} />, name: "Git" },
    { icon: <FaGithub size={45} />, name: "GitHub" },
    { icon: <SiVite size={45} />, name: "Vite" },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-linear-to-b from-black via-[#0a0a0a] to-[#050505] text-white text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00bf8f]/10 rounded-full blur-3xl" />

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#00bf8f] mb-10">
        My Skills
      </h2>
      <p className="text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
        Technologies and tools I work with to build modern, efficient, and
        user-focused applications.
      </p>

      {/* Animated Skill Icons Row */}
      <div className="overflow-hidden w-full flex justify-center">
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 text-gray-300 hover:text-[#00bf8f] transition-all duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <div className="p-4 bg-[#0f0f0f] rounded-2xl shadow-[0_0_25px_rgba(0,191,143,0.25)] hover:shadow-[0_0_40px_rgba(0,191,143,0.6)] transition-all duration-300">
                {skill.icon}
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}