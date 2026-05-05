import { useState } from "react";
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Background theme={theme} />
      <CursorGlow />

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-5 right-5 z-[999] px-4 py-2 rounded-xl bg-black/70 text-white border border-white/20"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>

      <div
  className={
    theme === "dark"
      ? "text-white"
      : "text-pink-500"
  }
>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;