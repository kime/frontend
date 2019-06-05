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

export class EnhanceRequestContext {
  id: number;
  name: string;
  uploaded: string;
  multiplier: number;
  fixArtifacts: boolean;
  originalImage: Image;

  constructor(context: ImageContext, multiplier: number, fixArtifacts: boolean) {
    this.id = context.id;
    this.name = context.name;
    this.uploaded = context.uploaded;
    this.originalImage = context.originalImage;
    this.multiplier = multiplier;
    this.fixArtifacts = fixArtifacts;
  }
}
