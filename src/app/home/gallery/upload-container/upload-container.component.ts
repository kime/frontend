import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { finalize, flatMap } from 'rxjs/operators';

import { ImageService } from '@app/core';
import { EnhanceRequestContext, ImageContext } from '@app/shared/interfaces';
import { NbCheckboxComponent } from '@nebular/theme';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss']
})
export class UploadContainerComponent implements OnInit {
  @Output() isComplete = new EventEmitter<ImageContext>();
  multiplier = '2x';
  fixArtifacts = 'true';
  isProcessing = false;

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  processFile(imageFiles: FileList) {
    this.isProcessing = true;

    this.imageService
      .uploadImage(imageFiles[0])
      .pipe(
        flatMap(responseContext => {
          const requestContext = new EnhanceRequestContext(responseContext, this.multiplier,
            this.fixArtifacts === 'true');
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
