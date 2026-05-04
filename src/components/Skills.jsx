function Skills() {
  return (
    <div id="skills" className="p-10 bg-black text-white text-center">
      <h2 className="text-3xl mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {["React", "Node.js", "MongoDB", "JavaScript", "C++"].map((skill) => (
          <span className="px-4 py-2 bg-white/10 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Skills;