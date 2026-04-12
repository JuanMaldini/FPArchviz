import React from "react";

// --- COMPONENTES DE LA VERSIÓN A (fp_arch_viz_web_concept c.jsx) ---

function HeaderA() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="text-2xl font-semibold tracking-widest text-black">FP</div>
      <nav className="space-x-8 text-sm tracking-wide">
        <a href="#home-a" className="text-black hover:text-yellow-500">Home</a>
        <a href="#projects-a" className="text-black hover:text-yellow-500">Projects</a>
        <a href="#about-a" className="text-black hover:text-yellow-500">About</a>
        <a href="#contact-a" className="text-black hover:text-yellow-500">Contact</a>
      </nav>
    </header>
  );
}

function HomeA() {
  return (
    <section id="home-a" className="px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-light leading-tight mb-6 text-black">
          Architectural
          <br /> Visualization
        </h1>
        <div className="w-16 h-[2px] bg-yellow-400 mb-6"></div>
        <p className="text-gray-600 max-w-md">
          High-end architectural renderings focused on realism, atmosphere and precision.
        </p>
      </div>
      <div className="border border-gray-200 p-2">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="render"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}

function ProjectsA() {
  return (
    <section id="projects-a" className="px-10 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl tracking-wide mb-4 text-black">PROJECTS</h2>
        <div className="w-12 h-[2px] bg-yellow-400 mb-10"></div>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border border-gray-200 p-3 bg-white">
              <img
                src={`https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?sig=${item}`}
                className="w-full mb-6"
                alt="project"
              />
              <h3 className="text-xl mb-3 text-black">Project {item}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Exterior & interior visualization with a strong focus on lighting and composition.
              </p>
              <button className="px-5 py-2 bg-yellow-400 text-black text-xs tracking-wide hover:opacity-80">
                VIEW PROJECT
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutA() {
  return (
    <section id="about-a" className="px-10 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl tracking-wide mb-4 text-black text-center md:text-left">ABOUT</h2>
        <div className="w-12 h-[2px] bg-yellow-400 mb-8 mx-auto md:mx-0"></div>
        <p className="text-gray-600 leading-relaxed text-center md:text-left">
          FP ArchViz is a studio focused on high-quality architectural visualization.
          The work is driven by a balance between technical precision and atmospheric storytelling.
        </p>
      </div>
    </section>
  );
}

function ContactA() {
  return (
    <section id="contact-a" className="px-10 py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl tracking-wide mb-4 text-black">CONTACT</h2>
        <div className="w-12 h-[2px] bg-yellow-400 mb-8"></div>
        <form className="grid gap-6">
          <input type="text" placeholder="Name" className="border border-gray-300 p-3 bg-white text-black" />
          <input type="email" placeholder="Email" className="border border-gray-300 p-3 bg-white text-black" />
          <textarea placeholder="Message" rows="5" className="border border-gray-300 p-3 bg-white text-black"></textarea>
          <button className="w-fit px-6 py-3 bg-yellow-400 text-black text-sm tracking-wide hover:opacity-80">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}

function FooterA() {
  return (
    <footer className="px-10 py-10 border-t border-gray-200 text-sm text-gray-500 flex justify-between bg-white">
      <span>© FP ArchViz</span>
      <span>fp.archviz@email.com</span>
    </footer>
  );
}

const VersionA = () => (
  <div className="bg-white">
    <HeaderA />
    <HomeA />
    <ProjectsA />
    <AboutA />
    <ContactA />
    <FooterA />
  </div>
);

// --- COMPONENTE DE LA VERSIÓN B (fp_arch_viz_web_concept.jsx) ---

const VersionB = () => (
  <div className="bg-white text-black font-sans">
    <header className="flex justify-between items-center px-10 py-6 border-b border-gray-200">
      <div className="text-2xl font-semibold tracking-widest text-black">FP</div>
      <nav className="space-x-8 text-sm tracking-wide">
        <a href="#" className="text-black hover:text-yellow-500">Home</a>
        <a href="#" className="text-black hover:text-yellow-500">Projects</a>
        <a href="#" className="text-black hover:text-yellow-500">About</a>
        <a href="#" className="text-black hover:text-yellow-500">Contact</a>
      </nav>
    </header>

    <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-black">
          Architectural
          <br /> Visualization
        </h1>
        <div className="w-16 h-[2px] bg-yellow-400 mb-6"></div>
        <p className="text-gray-600 max-w-md">
          High-end architectural renderings focused on realism, atmosphere and precision.
        </p>
      </div>
      <div className="border border-gray-200 p-2">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="render"
          className="w-full object-cover"
        />
      </div>
    </section>

    <section className="px-10 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl tracking-wide mb-4 text-black text-center md:text-left">PROJECT HIGHLIGHT</h2>
        <div className="w-12 h-[2px] bg-yellow-400 mb-10 mx-auto md:mx-0"></div>
        <div className="border border-gray-200 p-3 bg-white">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            className="w-full mb-6"
            alt="project"
          />
          <h3 className="text-xl mb-3 text-black">Modern Villa</h3>
          <ul className="text-gray-600 mb-6 space-y-2 text-sm">
            <li>• Exterior & interior visualization</li>
            <li>• Clean modern design</li>
            <li>• Realistic lighting</li>
          </ul>
          <button className="px-6 py-3 bg-yellow-400 text-black text-sm tracking-wide hover:opacity-80">
            VIEW PROJECT
          </button>
        </div>
      </div>
    </section>

    <footer className="px-10 py-10 border-t border-gray-200 text-sm text-gray-500 flex justify-between bg-white">
      <span>© FP ArchViz</span>
      <span>fp.archviz@email.com</span>
    </footer>
  </div>
);

// --- COMPONENTE PRINCIPAL (STACKED) ---

export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Etiqueta Versión A */}
      <div className="bg-blue-600 text-white py-4 px-10 font-bold text-center uppercase tracking-[0.3em]">
        Versión: fp_arch_viz_web_concept c.jsx (Full Page)
      </div>
      
      <div className="shadow-2xl mb-20 overflow-hidden">
        <VersionA />
      </div>

      {/* Etiqueta Versión B */}
      <div className="bg-emerald-600 text-white py-4 px-10 font-bold text-center uppercase tracking-[0.3em]">
        Versión: fp_arch_viz_web_concept.jsx (Highlight Concept)
      </div>
      
      <div className="shadow-2xl">
        <VersionB />
      </div>

      <div className="py-20 text-center text-gray-400 text-xs">
        FIN DE LA COMPARATIVA
      </div>
    </div>
  );
}