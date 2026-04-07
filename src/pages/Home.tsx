import GalleryCard from "../components/GalleryCard";
import gallery from "../utils/DataGallery";

import DestacadosCard from "../components/DestacadosCard";
import destacados from "../utils/DataDestacados";

export default function Home() {
  const serviceCards = [
    {
      title: "Estudio de Diseño Arquitectónico",
      description:
        "Propuestas formales y técnicas para proyectos residenciales, corporativos y de obra nueva.",
      points: [
        "Concepto y anteproyecto",
        "Definición espacial",
        "Documentación técnica",
      ],
    },
    {
      title: "Gestión de Obra y Construcción",
      description:
        "Acompañamiento en construcción, selección de materiales y coordinación de obra con claridad metodológica.",
      points: [
        "Planificación de etapas",
        "Supervisión de ejecución",
        "Control de calidad",
      ],
    },
    {
      title: "Visualización Arquitectónica",
      description:
        "Renders de alto nivel con foco en realismo, atmósfera y composición para comunicar cada proyecto con precisión.",
      points: [
        "Exterior e interior",
        "Narrativa visual",
        "Iluminación realista",
      ],
    },
  ];

  return (
    <div id="inicio" className="bg-slate-200 text-[var(--text-dark)]">
      <section className="relative min-h-[100dvh] flex items-center  text-white">
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                Estudio de Arquitectura
              </h1>
              <p className="mt-5 text-lg md:text-xl max-w-3xl text-slate-100/92">
                Proyectos integrales de arquitectura y espacios construidos con
                criterio técnico y estética racional.
              </p>
              <p className="mt-4 text-sm md:text-base max-w-2xl text-slate-100/70">
                Consultoría, diseño arquitectónico y visualización profesional
                con un enfoque de experiencia espacial y materialidad.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/fd758fcd-2f8b-4d7a-8bae-2dcdbdd48e4b-cd2ce5ec-5088-4b64-8abb-e57d594540a2-Iceland.jpg"
                alt="Espacio arquitectónico"
                className="w-full rounded-xl shadow-md mt-10 md:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="min-h-[420px] md:min-h-[520px] rounded-none bg-white shadow-xl border border-[var(--border)] p-8 flex flex-col gap-3"
              >
                <div className="h-[2px] w-14 bg-[var(--accent-color)]" />
                <h2 className="text-2xl font-semibold text-[var(--accent-color)]">
                  {card.title}
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {card.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
              src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/fd758fcd-2f8b-4d7a-8bae-2dcdbdd48e4b-cd2ce5ec-5088-4b64-8abb-e57d594540a2-Iceland.jpg"
              alt="Espacio arquitectónico"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="flex flex-col items-center p-8">
        <h2 className="mt-0 text-3xl font-bold">Galería</h2>
        <p className="max-w-3xl mx-auto mb-6 ">
          Revisa los proyectos seleccionados con estilo y presencia de marca.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className=""></section>

      <section id="destacados" className="bg-[var(--bg)] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold scroll-mt-16 text-[var(--text-dark)]">
              Destacados
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-[var(--text-muted)]">
              Arquitectura y construcción con enfoque profesional, estratégica y
              funcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacados.map((destacado) => (
              <DestacadosCard key={destacado.id} destacado={destacado} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
