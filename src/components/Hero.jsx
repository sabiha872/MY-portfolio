import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white text-center">
   <a
  href="/resume.pdf"
  download
  className="border px-6 py-2 rounded hover:bg-white hover:text-black"
>
  Download Resume
</a>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        <a href="https://github.com/yourname">GitHub</a>
<a href="https://linkedin.com/in/yourname">LinkedIn</a>
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Your Name
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg text-gray-300 max-w-xl"
      >
        I build modern full-stack applications using React & Node.js.
      </motion.p>
<div id="home" className="h-screen ..."></div>

    </div>
  );
}

export default Hero;