type Image = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

type MockImageOptions = {
  /** The height of the generated image. */
  height?: number;
  /** The width of the generated image. */
  width?: number;
};

/**
 * Generates a mock image for testing. Accepts a motif (array of strings) and
 * optional `options` for `height` and `width`.
 *
 * @note All images are sourced from Unsplash.
 * @see https://source.unsplash.com/
 */
export const generateImage = (
  motif: string,
  options?: MockImageOptions
): Image => {
  const { height = 1000, width = 1000 } = options ?? {};

  const baseURL = 'https://source.unsplash.com';
  const src = `${baseURL}/${width}x${height}/?${motif}`;

  const image: Image = {
    src,
    alt: 'Auto-generated mock image from Unsplash.',
    height,
    width,
  };

  return image;
};
