import { motion } from "framer-motion";
function About() {
  const items = [
    {
      title: "Who I Am",
      desc: "I’m Sabiha Khan 👋, a Computer Science student passionate about building modern web applications.",
    },
    {
      title: "What I Do",
      desc: "I focus on Web Development, DSA (C++), and UI/UX design to create clean and interactive experiences.",
    },
    {
      title: "My Passion",
      desc: "I love building user-friendly digital products that are both functional and visually appealing 🚀",
    },
    {
      title: "Current Focus",
      desc: "Improving problem-solving skills and building full-stack projects for placements.",
    },
  ];

  return (
    <section
      id="about"
      className=" bg-transparent text-white px-6 py-24 text-center"
    >
    <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
 className="text-4xl md:text-5xl font-bold mb-12 
text-pink-500 drop-shadow-[0_0_15px_rgba(255,105,180,0.8)]"
>
  About Me
</motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;