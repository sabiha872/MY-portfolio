import { motion } from "framer-motion";

function Hero() {
  return (
    <section
  id="home"
  className=" bg-transparent text-white flex flex-col items-center justify-center text-center px-6 pt-20"
> 
      <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-6xl font-bold leading-tight"
>
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
    Sabiha Khan
  </span>
</motion.h1>
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
        I build modern full-stack applications using React & Node.js.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="https://github.com/sabiha872"
    target="_blank"
    className="min-w-[135px] px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] transition text-center"
  >
    💻 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/sabiha-khan-3575442a9/"
    target="_blank"
    className="min-w-[135px] px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] transition text-center"
  >
    🔗 LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/sabiha_8/"
    target="_blank"
    className="min-w-[135px] px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] transition text-center"
  >
    ⚡ LeetCode
  </a>

  <a
    href="https://github.com/sabiha872/my-resume"
    download
    className="min-w-[135px] px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] transition text-center"
  >
    📄 Resume
  </a>
</div>
    </section>
  );
}

export default Hero;