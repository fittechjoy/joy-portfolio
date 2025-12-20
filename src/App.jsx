import { useEffect } from "react";

function App() {
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  if (!("IntersectionObserver" in window)) {
    // Fallback: show everything
    elements.forEach(el => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-lg font-bold text-cyan-400">
            Joy
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
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
             bg-gradient-to-b from-black via-gray-900 to-black
             animate-fadeIn"
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
          />

          <ProjectCard
            title="GitHub User Search"
            description="Search GitHub users using the GitHub API with a clean UI."
            tech="React • API"
            github="https://github.com/fittechjoy/github-user-search"
          />

          <ProjectCard
            title="EHR System"
            description="A team-based healthcare system UI for managing patient records."
            tech="React • Team Project"
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
            <SkillBox title="Frontend" items={["HTML5", "CSS3", "JavaScript", "React", "Tailwind"]} />
            <SkillBox title="Tools" items={["Git & GitHub", "Vite", "Figma", "VS Code"]} />
            <SkillBox title="Soft Skills" items={["Problem Solving", "Communication", "Teamwork"]} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-14">
          Services I <span className="text-cyan-400">Offer</span>
        </h2>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <ServiceCard title="Front-End Development" />
          <ServiceCard title="UI Implementation" />
          <ServiceCard title="Website Fixes & Improvements" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">

          {/* CTA CARD */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-10 text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">
              Let’s Build Something <span className="text-cyan-400">Great Together</span>
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              I’m open to remote roles, freelance projects, and collaborations.
              If you have an idea or opportunity, let’s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kiama01joy@gmail.com"
                className="px-8 py-4 rounded-lg bg-cyan-400 text-black font-semibold
                           hover:bg-cyan-300 transition"
              >
                Send Me an Email
              </a>

              <a
                href="https://www.linkedin.com/in/joy-kiama-7a709a171"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border border-gray-600 text-gray-200
                           hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid gap-12 md:grid-cols-3 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Get In Touch</h3>
              <p>Email: kiama01joy@gmail.com</p>
              <p>Location: Nairobi, Kenya</p>
              <p className="text-cyan-400">Available for Work</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/fittechjoy" className="hover:text-cyan-400">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/joy-kiama-7a709a171" className="hover:text-cyan-400">LinkedIn</a></li>
                <li><a href="mailto:kiama01joy@gmail.com" className="hover:text-cyan-400">Email</a></li>
              </ul>
            </div>
          </div>

        {/* FOOTER */}
<div className="mt-20 text-center text-sm text-gray-500">
  © 2025 Joy Kiama. All rights reserved.
</div>


        </div>
      </section>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function ProjectCard({ title, description, tech, github }) {
  return (
  <div
  className="fade-in bg-black border border-gray-700 rounded-lg p-6
             transition transform duration-300 ease-out
             hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-cyan-400 text-sm mb-4">{tech}</p>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="underline">
          GitHub
        </a>
      )}
    </div>
  );
}

function SkillBox({ title, items }) {
  return (
    <div
      className="border border-gray-700 rounded-lg p-6
                 transition duration-300 ease-out
                 hover:border-cyan-400 hover:bg-gray-900"
    >
      <h3 className="text-xl font-semibold mb-4 text-cyan-400">{title}</h3>
      <ul className="space-y-2 text-gray-200">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}


function ServiceCard({ title }) {
  return (
    <div
      className="bg-black border border-gray-700 rounded-lg p-6
                 transition duration-300 ease-out
                 hover:border-cyan-400 hover:bg-gray-900"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}


export default App;
