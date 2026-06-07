import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiRefreshCw, FiTool, FiZap, FiMessageCircle } from 'react-icons/fi';

const strengthsData = [
  {
    title: "Teamwork",
    description: "Collaborating effectively with diverse teams to achieve common goals.",
    icon: <FiUsers size={24} />
  },
  {
    title: "Adaptability",
    description: "Quickly adjusting to new technologies, environments, and project requirements.",
    icon: <FiRefreshCw size={24} />
  },
  {
    title: "Problem Solving",
    description: "Analyzing complex issues and devising effective, efficient solutions.",
    icon: <FiTool size={24} />
  },
  {
    title: "Quick Learning",
    description: "Rapidly acquiring new skills and knowledge to stay ahead of the curve.",
    icon: <FiZap size={24} />
  },
  {
    title: "Communication",
    description: "Articulating ideas clearly and actively listening to feedback and requirements.",
    icon: <FiMessageCircle size={24} />
  }
];

const Strengths = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
            My Strengths
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-accent-500 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {strengthsData.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white dark:bg-dark-900 rounded-2xl p-6 border border-slate-100 dark:border-dark-700 shadow-sm hover:shadow-md transition-shadow group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-accent-50 dark:bg-accent-900/20 text-accent-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                {strength.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
