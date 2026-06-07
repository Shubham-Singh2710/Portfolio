import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-primary-500 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-300 text-center"
          >
            <p>
              Hello! I'm <strong className="text-primary-500 dark:text-primary-400">Shubham Singh</strong>, a passionate AI/ML Engineer and Full Stack Developer based in India. I have a deep-rooted passion for solving real-world problems using technology.
            </p>
            
            <p>
              My journey began with a strong foundation in <strong className="text-slate-800 dark:text-white">Data Structures and Algorithms using C++</strong>, which taught me the importance of writing efficient, optimized code. Over time, I've expanded my toolkit to include Python and SQL, enabling me to build robust backend systems and handle complex data.
            </p>

            <p>
              I am particularly fascinated by <strong className="text-slate-800 dark:text-white">Artificial Intelligence and Machine Learning</strong>. I've worked on NLP models, prediction systems, and integrating AI APIs into practical applications to make them smarter and more intuitive.
            </p>

            <p>
              As a Full Stack Developer, I enjoy bridging the gap between data intelligence and user experience. Whether it's crafting a beautiful frontend with React or architecting a scalable backend with Node.js, I strive for excellence in every layer of the stack.
            </p>

            <div className="pt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                <span className="font-medium">C++ / DSA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                <span className="font-medium">AI / ML</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="font-medium">Full Stack Web</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
