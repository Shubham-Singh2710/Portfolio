import React from "react";
import { motion } from "framer-motion";
import cloak from "../assets/cloak.jpg"; // Harry Potter cloak image
import videoConf from "../assets/videoConf.jpg"; // Video conferencing image

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Video Conferencing App",
      description:
        "A modern video conferencing platform that enables real-time meetings and collaboration with multiple participants.",
      image: videoConf,
      link: "#", // Add your project link or GitHub link here
    },
    {
      id: 2,
      title: "Harry Potter's Invisible Cloak",
      description:
        "A fun computer vision project using OpenCV that makes objects invisible — inspired by Harry Potter’s magic cloak!",
      image: cloak,
      link: "#", // Add your project link or GitHub link here
    },
  ];

  return (
    <section id="projects" className="bg-green-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-300 text-lg">
          Here are some of the exciting projects I’ve built using various
          technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="bg-green-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-900 font-semibold py-2 px-5 rounded-full hover:bg-green-700 hover:text-white transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}