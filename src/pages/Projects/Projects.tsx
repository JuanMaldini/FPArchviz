import ProjectCard from "../../components/ProjectCard";
import projects from "./data";

export default function Projects() {
  return (
    <section className="bg-[var(--bg)] py-16">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold scroll-mt-16 text-[var(--text-dark)]">
            Proyectos
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--text-muted)]">
            Arquitectura y construcción con enfoque profesional, estratégica y
            funcional.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
