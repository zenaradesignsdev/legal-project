interface ImageProps {
  src: string; // The base path to your PNG in src/assets
  alt: string;
  className?: string;
  priority?: boolean; // If true, it's for Hero images
}

export const SafeImage = ({ src, alt, className = '', priority = false }: ImageProps) => {
  // vite-imagetools generates a set of images at these specific widths
  // The output is a string you can plug directly into srcset
  const avifSet = `${src}?w=400;800;1200&format=avif&as=srcset`;
  const webpSet = `${src}?w=400;800;1200&format=webp&as=srcset`;

  return (
    <picture>
      <source srcSet={avifSet} type="image/avif" sizes="(max-width: 1200px) 100vw, 1200px" />
      <source srcSet={webpSet} type="image/webp" sizes="(max-width: 1200px) 100vw, 1200px" />
      <img
        src={`${src}?w=800`} // Fallback for browsers without srcset support
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={className || 'w-full h-auto'}
      />
    </picture>
  );
};
