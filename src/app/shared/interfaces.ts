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
  multiplier: string;
  fixArtifacts: boolean;
  originalImage: Image;

  constructor(context: ImageContext, multiplier: string, fixArtifacts: boolean) {
    this.id = context.id;
    this.name = context.name;
    this.uploaded = context.uploaded;
    this.originalImage = context.originalImage;
    this.multiplier = multiplier;
    this.fixArtifacts = fixArtifacts;
  }
}

export interface Credentials {
  username: string;
  token: string;
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
