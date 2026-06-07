import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SparklesCore } from './ui/sparkles';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Shubham Singh</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
            AI/ML Engineer & Full Stack Developer
          </h2>
          
          {/* Typing Effect Simulation */}
          <div className="h-8">
            <motion.p 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="text-lg text-slate-600 dark:text-slate-400 overflow-hidden whitespace-nowrap border-r-2 border-primary-500"
            >
              "Building intelligent systems and scalable web applications"
            </motion.p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
            I specialize in developing end-to-end applications, leveraging my strong foundation in algorithms and passion for AI.
          </p>

          <div className="flex gap-4 pt-4">
            <a 
              href="#contact"
              className="px-6 py-3 rounded-md bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a 
              href="#projects"
              className="px-6 py-3 rounded-md bg-white dark:bg-dark-800 text-slate-900 dark:text-white border border-slate-200 dark:border-dark-700 hover:bg-slate-50 dark:hover:bg-dark-700 font-medium transition-all hover:-translate-y-1"
            >
              View Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <a 
              href="https://github.com/Shubham-Singh2710" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-white dark:bg-dark-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 shadow-sm border border-slate-100 dark:border-dark-700 transition-colors"
            >
              <FiGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shubham-singh-20b6a2306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-white dark:bg-dark-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 shadow-sm border border-slate-100 dark:border-dark-700 transition-colors"
            >
              <FiLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:shubhamsingh270218@gmail.com" 
              className="p-3 bg-white dark:bg-dark-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 shadow-sm border border-slate-100 dark:border-dark-700 transition-colors"
            >
              <FiMail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 dark:border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm group">
            <img 
              src="/profile photo.jpeg" 
              alt="Shubham Singh" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
