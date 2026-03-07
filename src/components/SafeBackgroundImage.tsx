import { CSSProperties, ReactNode } from "react";

interface BackgroundImageProps {
  src: string; // The base path to your PNG in src/assets
  className?: string;
  children?: ReactNode;
  priority?: boolean; // If true, preload the image
  style?: CSSProperties;
}

export const SafeBackgroundImage = ({ 
  src, 
  className, 
  children,
  priority = false,
  style = {}
}: BackgroundImageProps) => {
  // These are handled by vite-imagetools at build time
  const avif = `${src}?format=avif`;
  const webp = `${src}?format=webp`;

  // Use CSS image-set() for modern browsers with format selection
  // Fallback to original for older browsers
  const backgroundImageStyle: CSSProperties = {
    backgroundImage: `image-set(
      url("${avif}") type("image/avif"),
      url("${webp}") type("image/webp"),
      url("${src}") type("image/png")
    )`,
    // Fallback for browsers that don't support image-set
    ...(typeof window !== 'undefined' && CSS.supports && !CSS.supports('background-image', 'image-set(url("test.avif") type("image/avif"))')
      ? { backgroundImage: `url("${src}")` }
      : {}),
    ...style,
  };

  return (
    <div 
      className={className}
      style={backgroundImageStyle}
    >
      {children}
    </div>
  );
};
