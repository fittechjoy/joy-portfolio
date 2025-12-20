function App() {
  return (
    <div className="min-h-screen bg-black text-white">

  {/* NAVBAR */}
<header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
    <div className="text-lg font-bold text-cyan-400">
      Joy
    </div>

    <nav className="hidden md:flex gap-6 text-sm text-gray-200">
      <a href="#home" className="hover:text-cyan-400 transition">Home</a>
      <a href="#about" className="hover:text-cyan-400 transition">About</a>
      <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
      <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
      <a href="#services" className="hover:text-cyan-400 transition">Services</a>
      <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
    </nav>
  </div>
</header>

{/* HERO */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center text-center px-6
             bg-gradient-to-b from-black via-gray-900 to-black"
>
  <div className="max-w-3xl pt-20">
    <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
      Front-End Developer
    </p>

    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
      Joy <span className="text-cyan-400">Kiama</span>
    </h1>

    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10">
      I build clean, modern, and user-focused web interfaces using React and modern frontend tools.
    </p>

    <div className="flex justify-center gap-4">
      <a
        href="#projects"
        className="px-7 py-3 rounded-lg bg-cyan-400 text-black font-semibold
                   hover:bg-cyan-300 transition"
      >
        View My Work
      </a>

      <a
        href="#contact"
        className="px-7 py-3 rounded-lg border border-cyan-400 text-cyan-400
                   hover:bg-cyan-400 hover:text-black transition"
      >
        Get In Touch
      </a>
    </div>
  </div>
</section>


{/* ABOUT */}
<section id="about" className="py-24 px-6 bg-black">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">
      About <span className="text-cyan-400">Me</span>
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed">
      I’m a front-end developer with a strong focus on building clean,
      responsive, and accessible web interfaces. My journey into tech
      is rooted in discipline, consistency, and continuous learning.
      I enjoy turning ideas and designs into functional, user-friendly
      digital experiences.
    </p>
  </div>
</section>


      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-14">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <ProjectCard
  title="Momentum Tracker App"
  description="A productivity app focused on consistency and daily progress."
  tech="React • Tailwind"
  github="https://github.com/fittechjoy/momentum-tracker"
  live=""
/>

<ProjectCard
  title="GitHub User Search"
  description="Search GitHub users using the GitHub API with a clean UI."
  tech="React • API"
  github="https://github.com/fittechjoy/github-user-search"
  live=""
/>

<ProjectCard
  title="EHR System"
  description="A team-based healthcare system UI for managing patient records."
  tech="React • Team Project"
  github="https://github.com/fittechjoy/your-ehr-repo"
  live=""
/>

        </div>
      </section>

      {/* SKILLS */}
<section id="skills" className="py-24 px-6 bg-black">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-14">
      Skills & <span className="text-cyan-400">Tools</span>
    </h2>

    <div className="grid gap-10 md:grid-cols-3">

      {/* Frontend */}
      <div className="border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Frontend
        </h3>
        <ul className="space-y-2 text-gray-200">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
        </ul>
      </div>

      {/* Tools */}
      <div className="border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Tools
        </h3>
        <ul className="space-y-2 text-gray-200">
          <li>Git & GitHub</li>
          <li>Vite</li>
          <li>Figma (UI Implementation)</li>
          <li>VS Code</li>
          <li>REST APIs</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Soft Skills
        </h3>
        <ul className="space-y-2 text-gray-200">
          <li>Problem Solving</li>
          <li>Attention to Detail</li>
          <li>Communication</li>
          <li>Time Management</li>
          <li>Team Collaboration</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* SERVICES */}
<section id="services" className="py-24 px-6 bg-gray-900">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-14">
      Services I <span className="text-cyan-400">Offer</span>
    </h2>

    <div className="grid gap-10 md:grid-cols-3">

      {/* Service 1 */}
      <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">
          Front-End Development
        </h3>
        <p className="text-gray-300 mb-4">
          Building clean, responsive, and modern user interfaces using React and modern frontend tools.
        </p>
        <p className="text-cyan-400 text-sm">
          React • Tailwind • JavaScript
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">
          UI Implementation
        </h3>
        <p className="text-gray-300 mb-4">
          Converting Figma designs into pixel-perfect, accessible, and responsive web pages.
        </p>
        <p className="text-cyan-400 text-sm">
          Figma • HTML • CSS • Tailwind
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition">
        <h3 className="text-xl font-semibold mb-3 text-white">
          Website Improvements & Fixes
        </h3>
        <p className="text-gray-300 mb-4">
          Fixing layout issues, improving responsiveness, and refining existing front-end code.
        </p>
        <p className="text-cyan-400 text-sm">
          Bug Fixes • Refactors • Performance
        </p>
      </div>

    </div>
  </div>
</section>



      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s <span className="text-cyan-400">Work Together</span>
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          I’m open to remote roles, freelance projects, and collaborations.
        </p>

        <a
          href="mailto:kiama01joy@gmail.com"
          className="inline-block px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
}

function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-cyan-400 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-300 mb-4">
        {description}
      </p>

      <p className="text-cyan-400 text-sm mb-6">
        {tech}
      </p>

      <div className="flex gap-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition underline underline-offset-4"
          >
            GitHub
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition underline underline-offset-4"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}


export default App;
