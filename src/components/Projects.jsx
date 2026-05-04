<div id="projects" className="min-h-screen ..."></div>
function Projects() {
  const projects = [
    {
      title: "Task Manager",
      desc: "Full-stack app with CRUD operations",
    },
    {
      title: "Chat App",
      desc: "Real-time chat using Socket.io",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-black text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>

            <button className="mt-4 px-4 py-2 bg-purple-500 rounded hover:bg-purple-600">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;