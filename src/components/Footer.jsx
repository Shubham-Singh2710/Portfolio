import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 dark:bg-dark-900/50 backdrop-blur-md border-t border-slate-200 dark:border-dark-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            SS.
          </a>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear} Shubham Singh. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/Shubham-Singh2710" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/shubham-singh-20b6a2306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="mailto:shubhamsingh270218@gmail.com" 
            className="p-2 text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiMail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
