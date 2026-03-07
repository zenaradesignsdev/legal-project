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
  // For background images, we optimize to a reasonable max width (1920px for desktop)
  // CSS background images don't support srcset, so we use a single optimized size
  // Format optimization (AVIF/WebP) still provides significant savings
  const avif = `${src}?w=1920&format=avif`;
  const webp = `${src}?w=1920&format=webp`;
  const fallback = `${src}?w=1920`; // Optimized PNG fallback

  // Use CSS image-set() for modern browsers with format selection
  // Fallback to original for older browsers
  const backgroundImageStyle: CSSProperties = {
    backgroundImage: `image-set(
      url("${avif}") type("image/avif"),
      url("${webp}") type("image/webp"),
      url("${fallback}") type("image/png")
    )`,
    // Fallback for browsers that don't support image-set
    ...(typeof window !== 'undefined' && CSS.supports && !CSS.supports('background-image', 'image-set(url("test.avif") type("image/avif"))')
      ? { backgroundImage: `url("${fallback}")` }
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
