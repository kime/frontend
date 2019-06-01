export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface EnhancedImage extends Image {
  multiplier: number;
  fixArtifacts: boolean;
}

export class ImageContext {
  id: number;
  name: string;
  uploaded: string;
  originalImage: Image;
  enhancedImage?: EnhancedImage;
}
