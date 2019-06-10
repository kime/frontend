import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { finalize, flatMap } from 'rxjs/operators';

import { ImageService } from '@app/core';
import { EnhanceRequestContext, ImageContext } from '@app/shared/interfaces';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss']
})
export class UploadContainerComponent implements OnInit {
  @Output() isComplete = new EventEmitter<ImageContext>();
  multiplier = 4;
  isProcessing = false;
  fixArtifacts = true;

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  processFile(imageFiles: FileList) {
    this.isProcessing = true;

    this.imageService
      .uploadImage(imageFiles[0])
      .pipe(
        flatMap(responseContext => {
          const requestContext = new EnhanceRequestContext(responseContext, this.multiplier, this.fixArtifacts);
          return this.imageService.enhanceImage(requestContext);
        })
      )
      .pipe(
        finalize(() => {
          this.isProcessing = false;
        }
      ))
      .subscribe((responseContext: ImageContext) => {
        this.isComplete.emit(responseContext);
      });
  }
}
