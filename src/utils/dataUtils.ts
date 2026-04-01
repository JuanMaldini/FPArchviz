export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .slice(0, 40);

export const createIdFromUrl = (image: string) =>
  image
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");

export type ProjectInput = {
  title: string;
  description: string;
  // Now gallery supports multiple images by default. For backward compatibility,
  // `baseImage` is still accepted in data files.
  baseImage?: string;
  galleryImages?: string[];
};

export type GalleryData = {
  id: string;
  image: string;
};

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  gallery: string[];
};

export const buildProjects = (raw: ProjectInput[]): ProjectData[] =>
  raw.map((item) => {
    const id = slugify(`${item.title}-${item.description}`);
    const normalizedGallery =
      item.galleryImages && item.galleryImages.length > 0
        ? item.galleryImages
        : item.baseImage
          ? [item.baseImage]
          : [];

    return {
      id,
      title: item.title,
      description: item.description,
      gallery: normalizedGallery,
    };
  });

export const buildGallery = (raw: string[]): GalleryData[] =>
  raw.map((image) => ({
    id: createIdFromUrl(image),
    image,
  }));
