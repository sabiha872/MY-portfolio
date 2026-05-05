import { motion } from "framer-motion";

function Skills() {
  const skills = ["React", "Node.js", "JavaScript", "C++", "DSA", "UI/UX", "HTML", "CSS"];

  return (
    <section id="skills" className=" bg- text-white px-6 py-25 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-pink-500 drop-shadow-[0_0_15px_rgba(255,105,180,0.8)]"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 rounded-2xl py-5 text-lg font-medium hover:border-purple-400 hover:scale-105 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;