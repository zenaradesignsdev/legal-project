declare module '*&format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=avif' {
  const src: string;
  export default src;
}

declare module '*&format=avif&width=*' {
  const src: string;
  export default src;
}

declare module '*&format=webp&width=*' {
  const src: string;
  export default src;
}

declare module '*&w=*&format=avif&as=srcset' {
  const srcset: string;
  export default srcset;
}

declare module '*&w=*&format=webp&as=srcset' {
  const srcset: string;
  export default srcset;
}

declare module '*&w=*' {
  const src: string;
  export default src;
}
