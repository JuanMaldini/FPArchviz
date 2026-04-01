import GalleryCard from "../../components/GalleryCard";
import gallery from "./data";

export default function Gallery() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-slate-600">
          Mira los proyectos de galería con el mismo comportamiento de
          card/modal.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
