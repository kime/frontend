import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { FileHolder, ImageUploadComponent } from 'angular2-image-upload';

import { ImageService } from '@app/core';
import { EnhanceRequestContext, ImageContext } from '@app/shared/interfaces';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss']
})
export class UploadContainerComponent implements OnInit {
  @ViewChild('uploadBox', { static: true }) uploadBox: ImageUploadComponent;
  @Output() isComplete = new EventEmitter<ImageContext>();
  multiplier = 4;
  isLoading = false;
  fixArtifacts = false;

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  onUploadFinished($event: FileHolder) {
    this.isLoading = true;
    this.imageService
      .uploadImage($event.file)
      .pipe(
        flatMap(responseContext => {
          this.uploadBox.deleteAll();
          const requestContext = new EnhanceRequestContext(responseContext, this.multiplier, this.fixArtifacts);
          return this.imageService.enhanceImage(requestContext);
        })
      )
      .subscribe((responseContext: ImageContext) => {
        this.isComplete.emit(responseContext);
        this.uploadBox.deleteAll();
      });
    this.isLoading = false;
  }
}
