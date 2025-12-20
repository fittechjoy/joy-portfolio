function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Front-End Developer
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I’m <span className="text-cyan-400">Joy Kiama</span>
        </h1>

        <p className="text-white text-lg max-w-2xl mb-8">
          I build clean, modern, and user-focused web interfaces using React and modern frontend tools.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg">
            View Projects
          </button>
          <button className="px-6 py-3 border border-white rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <ProjectCard
            title="Momentum Tracker App"
            description="A productivity app focused on consistency and daily progress."
            tech="React • Tailwind"
          />
          <ProjectCard
            title="GitHub User Search"
            description="Search GitHub users using the GitHub API with a clean UI."
            tech="React • API"
          />
          <ProjectCard
            title="EHR System"
            description="A team-based healthcare system UI for managing patient records."
            tech="React • Team Project"
          />
        </div>
      </section>

    </div>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-black border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <p className="text-cyan-400 text-sm">{tech}</p>
    </div>
  );
}

export default App;
