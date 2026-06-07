import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: "Harry Potter Clock Project",
    category: "Web",
    description: "A creative, themed clock UI inspired by the magical world of Harry Potter, featuring custom animations and interactive elements.",
    techStack: ["HTML", "CSS", "JavaScript","Python"],
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" }
  },
  {
    id: 2,
    title: "Video Conferencing App",
    category: "Full Stack",
    description: "Real-time video calling application utilizing WebRTC and Socket.io for seamless communication. Includes chat, screen sharing, and media sharing.",
    techStack: ["React", "Node.js", "WebRTC", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" }
  },
  {
    id: 3,
    title: "AI Chat Application",
    category: "AI",
    description: "An intelligent chatbot integrating advanced AI APIs (like Gemini/OpenAI) to deliver real-time responses through a user-friendly interface.",
    techStack: ["React", "Node.js", "AI APIs"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" }
  },
  {
    id: 4,
    title: "AI-Based Disease Prediction",
    category: "ML",
    description: "Machine learning model to predict diseases based on user symptoms, featuring comprehensive data preprocessing and robust model evaluation.",
    techStack: ["Python", "Scikit-Learn", "Pandas"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "#" }
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    category: "ML",
    description: "A content-based recommendation system employing Natural Language Processing to suggest movies tailored to user preferences and history.",
    techStack: ["Python", "NLP", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    links: { github: "#", live: "https://huggingface.co/spaces/Shubhamsingh2710/movie-rec" }
  }
];

const categories = ["All", "Web", "Full Stack", "AI", "ML"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary-500 rounded-full"></span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group bg-slate-50 dark:bg-dark-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-dark-700 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col ${project.links.live !== "#" ? "cursor-pointer" : ""}`}
                onClick={(e) => {
                  // Do not open link if clicking a link or button inside the card
                  if (e.target.closest('a')) {
                    return;
                  }
                  if (project.links.live !== "#") {
                    window.open(project.links.live, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-dark-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md text-white rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-medium px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-dark-700 mt-auto">
                    {project.links.github !== "#" ? (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-600 cursor-not-allowed">
                        <FiGithub /> Code
                      </span>
                    )}

                    {project.links.live !== "#" ? (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-600 cursor-not-allowed">
                        <FiExternalLink /> Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
