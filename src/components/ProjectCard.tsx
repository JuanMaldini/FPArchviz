import React, { useState } from "react";
import { ProjectData } from "../utils/dataUtils";

type Props = {
  project: ProjectData;
};

export default function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const onPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLoaded(false);
    setCurrentIndex((i) => (i <= 0 ? project.gallery.length - 1 : i - 1));
  };

  const onNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLoaded(false);
    setCurrentIndex((i) => (i >= project.gallery.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <article
        className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <div className="relative h-64 md:h-80 lg:h-96">
          <img
            src={project.gallery[0]}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-slate-800 text-base leading-relaxed">
            {project.description}
          </p>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-full max-h-[90vh] overflow-hidden rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full text-center flex flex-col">
              <div className="relative flex-1 bg-slate-900">
                <img
                  src={project.gallery[currentIndex]}
                  alt={`${project.title} ${currentIndex + 1}`}
                  className="h-full w-full object-cover"
                />
                {project.gallery.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                      onClick={onPrev}
                    >
                      ‹
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                      onClick={onNext}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              <div className="p-4 text-left overflow-auto">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <pre className="whitespace-pre-wrap text-sm text-slate-700">
                  {project.description}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
