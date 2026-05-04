import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (id) =>
    active === id ? "text-purple-400" : "text-white";

  return (
    <div className="fixed top-0 w-full bg-black text-white p-4 flex justify-center space-x-6 z-50">
      <a href="#home" className={linkStyle("home")}>Home</a>
      <a href="#about" className={linkStyle("about")}>About</a>
      <a href="#projects" className={linkStyle("projects")}>Projects</a>
      <a href="#contact" className={linkStyle("contact")}>Contact</a>
    </div>
  );
}

export default Navbar;