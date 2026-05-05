import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React, Tailwind & Node.js",
      category: "React",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/sabiha872/MY-portfolio",
      live: "#"
    },
    {
      title: "Peer Notes Sharing",
      desc: "Platform to share and access notes among students",
      category: "FullStack",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      github: "https://github.com/sabiha872",
      live: "#"
    },
    {
      title: "Sahaay",
      desc: "Mental health support app with resources and self-help tools",
      category: "FullStack",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      github: "https://github.com/sabiha872/Sahaay",
      live: "#"
    },
    {
      title: "Weather App",
      desc: "Weather forecasting app using API integration",
      category: "React",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/sabiha872/WHEATHER-APP",
      live: "#"
    }
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-transparent text-white px-6 py-20 text-center">

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
       className="text-4xl md:text-5xl font-bold mb-12 
text-pink-500 drop-shadow-[0_0_15px_rgba(255,105,180,0.8)]"
      >
        My Projects
      </motion.h2>

      {/* 🔥 Filter */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "React", "FullStack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg border ${
              filter === cat
                ? "bg-purple-500"
                : "border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔥 Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
            rounded-2xl overflow-hidden 
            hover:scale-105 hover:border-purple-400 
            hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
            transition duration-300"
          >

            {/* 🔥 Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-transparent/40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                <span className="text-white font-semibold">
                  View Project
                </span>
              </div>
            </div>

            {/* 🔥 Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple-400">
                🚀 {project.title}
              </h3>

              <p className="mt-2 text-gray-300">
                {project.desc}
              </p>

              {/* 🔥 Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-white/20 rounded hover:border-purple-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded hover:scale-105 transition"
                >
                  Live
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;