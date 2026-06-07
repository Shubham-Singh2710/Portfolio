import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { 
  SiCplusplus, SiPython, SiMysql, SiScikitlearn, SiPandas, 
  SiJavascript, SiExpress, SiMongodb, SiGit, SiGithub,
  SiNumpy, SiPytorch, SiTensorflow, SiHuggingface, SiDocker
} from 'react-icons/si';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCode,
  FaChartLine, FaChartBar, FaBrain, FaNetworkWired
} from 'react-icons/fa';

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Maps cursor coordinates to degrees of rotation (subtle tilt limit)
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };
  
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
    ]
  },
  {
    title: "Data Science & Viz",
    skills: [
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
      { name: "Matplotlib", icon: <FaChartLine className="text-[#11557C]" /> },
      { name: "Seaborn", icon: <FaChartBar className="text-[#377CC8]" /> },
    ]
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "Deep Learning", icon: <FaNetworkWired className="text-[#3B82F6]" /> },
      { name: "NLP", icon: <FaBrain className="text-[#EC4899]" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="text-[#FFD21E]" /> },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-slate-900 dark:text-white" /> },
    ]
  },
  {
    title: "Databases & MLOps",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-slate-900 dark:text-white" /> },
      { name: "VS Code", icon: <FaCode className="text-[#007ACC]" /> },
    ]
  }
];

const skillSummaries = {
  // Programming
  "C++": "A powerful, high-performance programming language used extensively in systems programming, game development, and competitive programming.",
  "Python": "A versatile, high-level language celebrated for readability, widely used in Data Science, Machine Learning, Web Development, and Automation.",
  "SQL": "Structured Query Language, used to query, manage, and manipulate relational databases efficiently.",
  
  // Data Science & Viz
  "Pandas": "A core Python library providing high-performance data structures and data analysis tools for tabular data.",
  "NumPy": "The fundamental library for scientific computing in Python, offering powerful support for multi-dimensional arrays and mathematical functions.",
  "Matplotlib": "A comprehensive 2D plotting library for creating static, animated, and interactive visualizations in Python.",
  "Seaborn": "A Python data visualization library based on Matplotlib that provides a high-level, beautiful interface for drawing statistical graphics.",

  // Machine Learning & AI
  "Scikit-Learn": "A robust machine learning library in Python offering simple and efficient tools for predictive data analysis, classification, and regression.",
  "PyTorch": "An open-source machine learning library developed by Meta, widely preferred for deep learning research and dynamic neural network architectures.",
  "TensorFlow": "An end-to-end open-source platform for machine learning developed by Google, optimized for high-performance deep learning models.",
  "Deep Learning": "A subset of machine learning based on artificial neural networks, capable of learning representation from unstructured data like images and audio.",
  "NLP": "Natural Language Processing, the branch of AI concerned with helping computers understand, interpret, and manipulate human language.",
  "Hugging Face": "A platform and community offering state-of-the-art pre-trained models, libraries, and tools for NLP and Machine Learning.",

  // Web Development
  "HTML": "HyperText Markup Language, the standard structure and skeletal foundation of all web pages.",
  "CSS": "Cascading Style Sheets, used to style, lay out, and design responsive web pages.",
  "JavaScript": "A dynamic programming language that enables interactive elements, complex client-side logic, and web application functionality.",
  "React": "A popular open-source frontend library for building highly interactive, component-based user interfaces.",
  "Node.js": "A JavaScript runtime built on Chrome's V8 engine that allows developers to write backend server-side applications in JavaScript.",
  "Express": "A minimal, flexible web application framework for Node.js, used to design and build RESTful APIs and backend services.",

  // Databases & MLOps
  "MongoDB": "A popular NoSQL document-based database designed for scalability, flexibility, and high-volume data storage using JSON-like documents.",
  "MySQL": "A widely-used open-source relational database management system (RDBMS) based on SQL.",
  "Docker": "A containerization platform that packages applications and their dependencies together into containers for seamless deployment across environments.",

  // Tools
  "Git": "A distributed version control system designed to track changes in source code and coordinate collaborative software development.",
  "GitHub": "A web-based platform for hosting code repositories, enabling collaborative version control, pull requests, and CI/CD pipelines.",
  "VS Code": "A lightweight, powerful source code editor developed by Microsoft, highly customizable with extensions for modern developers."
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary-500 rounded-full"></span>
          </h2>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life. Click on any skill card to view a short definition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <TiltCard className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-dark-700 hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-dark-700 pb-2">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, idx) => {
                      const floatDuration = 3 + (idx % 3) * 0.8;
                      const floatDelay = idx * 0.15;
                      return (
                        <motion.div
                          key={idx}
                          onClick={() => setSelectedSkill(skill)}
                          animate={{
                            y: [0, -6, 0],
                          }}
                          transition={{
                            duration: floatDuration,
                            delay: floatDelay,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -10,
                            z: 30,
                            boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.15), 0 4px 6px -2px rgba(99, 102, 241, 0.05)",
                            borderColor: "rgba(99, 102, 241, 0.3)",
                          }}
                          className="flex items-center gap-3 p-3 bg-slate-50/50 dark:bg-dark-800/40 rounded-xl border border-slate-100 dark:border-dark-800 cursor-pointer transition-all hover:bg-slate-100/50 dark:hover:bg-dark-800/80 shadow-sm"
                        >
                          <div className="text-2xl flex-shrink-0 w-8 flex justify-center">
                            {skill.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Summary Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-white dark:bg-dark-900 rounded-3xl p-8 border border-slate-150 dark:border-dark-700 shadow-2xl z-10 overflow-hidden"
            >
              {/* Decorative glows inside modal */}
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-50 dark:hover:bg-dark-800 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>

              <div className="flex flex-col items-center text-center mt-2">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 text-4xl text-slate-800 dark:text-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-dark-800">
                  {selectedSkill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-slate-850 dark:text-white">
                  {selectedSkill.name}
                </h3>
                <span className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2.5 mb-6" />

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base px-2">
                  {skillSummaries[selectedSkill.name] || "A key technology used in my projects to build high-performance solutions."}
                </p>

                {/* Bottom button */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-colors shadow-md hover:shadow-lg"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
