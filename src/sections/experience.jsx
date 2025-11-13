import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Web Development Certification",
    subtitle: "Codsoft",
    period: "2025",
    description:
      "Completed a hands-on web development certification from Codsoft. Learned to build responsive and interactive websites using HTML, CSS, JavaScript, and React. Strengthened practical skills through real-world projects.",
    link: "#", // optional link to certificate
  },
  {
    id: 2,
    title: "Technology Job Simulation",
    subtitle: "Deloitte",
    period: "2025",
    description:
      "Successfully completed Deloitte’s Technology Job Simulation, gaining practical experience with problem-solving, client communication, and software solution implementation in a professional environment.",
    link: "#",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.25,
      duration: 0.8,
    },
  }),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <section id="experience" className="w-full py-20 bg-[#0f0f10] text-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div ref={ref} className="relative flex flex-col items-center justify-center">
          {/* Timeline Line (animated fill) */}
          <div className="relative w-full max-w-3xl h-1 bg-white/20 rounded overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white rounded"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Floating animated dot */}
          <motion.div
            className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-5 w-5 shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.4)",
                "0 0 12px rgba(255,255,255,0.8)",
                "0 0 0px rgba(255,255,255,0.4)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Experience Cards */}
          <div className="mt-16 w-full max-w-4xl grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                className="relative bg-linear-to-br from-[#1a1a1d] to-[#141416] p-6 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.04] hover:shadow-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                  y: -6,
                }}
              >
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-lg bg-white/10">
                    <FaCertificate className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-sm text-white/60 mt-1">
                      {exp.subtitle} • {exp.period}
                    </p>
                    <p className="mt-3 text-white/70 text-sm leading-6">{exp.description}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}