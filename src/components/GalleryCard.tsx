import React, { useState } from "react";
import { GalleryData } from "../utils/dataUtils";

type Props = {
  item: GalleryData;
};

export default function GalleryCard({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <div className="relative h-64 md:h-72 lg:h-80">
          <img
            src={item.image}
            alt={item.id}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-full max-h-[90vh] overflow-hidden rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.id}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
