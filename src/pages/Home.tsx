import Gallery from "./gallery/gallery";

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text-dark)]">
      <section className="relative min-h-[100dvh] flex items-center bg-[linear-gradient(135deg,rgba(51,150,211,0.92),rgba(235,203,144,0.85))] text-white">
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            FPArchviz Estudio de Arquitectura
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-3xl text-slate-100/92">
            Proyectos integrales de arquitectura y espacios construidos con
            criterio técnico y estética racional.
          </p>
          <p className="mt-4 text-sm md:text-base max-w-2xl text-slate-100/70">
            Consultoría, diseño arquitectónico y visualización profesional con
            un enfoque de experiencia espacial y materialidad.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <article className="rounded-2xl p-8 bg-white shadow-xl border border-[var(--border)]">
            <h2 className="text-3xl font-semibold mb-3 text-[var(--primary-blue)]">
              Estudio de Diseño Arquitectónico
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Propuestas formales y técnicas para proyectos residenciales,
              corporativos y de obra nueva.
            </p>
          </article>
          <article className="rounded-2xl p-8 bg-white shadow-xl border border-[var(--border)]">
            <h2 className="text-3xl font-semibold mb-3 text-[var(--primary-blue)]">
              Gestión de obra y construcción
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Acompañamiento en construcción, selección de materiales y
              coordinación de obra con claridad metodológica.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-3">FPArchviz por dentro</h2>
            <p className="text-slate-700 leading-relaxed">
              El proyecto nace para poner en valor propuestas claras con hero
              sections y diseño enfocado en usabilidad. Configuración simple,
              con foco en contenido, en arquitectura y experiencia de usuario.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1514995669114-ec9d6a2f7ae4?auto=format&fit=crop&w=1600&q=80"
              alt="Espacio arquitectónico"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold scroll-mt-20 mb-3">
            Galería Destacada
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-slate-100/90">
            Revisa los proyectos seleccionados con estilo y presencia de marca.
          </p>
          <div className="mt-8">
            <Gallery />
          </div>
        </div>
      </section>
    </div>
  );
}
