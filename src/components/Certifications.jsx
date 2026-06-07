import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    title: "HackStrom Finale (Top 50 / 2500)",
    organization: "MMMUT Gorakhpur",
    description: "Placed among the top 50 teams out of 2,500 participating teams with Team BYTECODERS.",
    image: "/Hackstrom.jpeg",
    type: "Hackathon"
  },
  {
    id: 2,
    title: "HackFest 2025",
    organization: "GDG Cloud New Delhi & Agora",
    description: "Successfully participated in a 24-hour global online hackathon.",
    image: "/DElhi hackfest.jpeg",
    type: "Hackathon"
  },
  {
    id: 3,
    title: "Web Development Virtual Internship",
    organization: "CodSoft",
    description: "Successfully completed a 4 weeks virtual internship program in Web Development.",
    image: "/Codsoft.jpeg",
    type: "Internship"
  },
  {
    id: 4,
    title: "Technology Job Simulation",
    organization: "Deloitte",
    description: "Completed practical task modules in Coding and Development.",
    image: "/Deloitte.jpeg",
    type: "Certification"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
            Certifications & Achievements
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my continuous learning, hackathon participations, and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-dark-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-dark-700 shadow-sm hover:shadow-xl transition-all group flex flex-col sm:flex-row"
            >
              {/* Image Section */}
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative bg-slate-200 dark:bg-dark-700 p-2 flex items-center justify-center">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-xs font-semibold bg-white/90 dark:bg-dark-900/90 backdrop-blur-md text-primary-600 dark:text-primary-400 rounded-md shadow-sm">
                    {achievement.type}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {achievement.title}
                </h3>
                <h4 className="text-sm font-semibold text-accent-500 mb-3">
                  {achievement.organization}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
