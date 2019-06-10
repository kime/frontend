import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ImageService } from '@app/core';
import { ImageContext } from '@app/shared/interfaces';
import { finalize } from 'rxjs/operators';

const errorImageContext: ImageContext = {
  id: 0,
  name: 'warning-icon.png',
  uploaded: 'error',
  originalImage: {
    url: 'assets/images/warning-icon.png',
    width: 640,
    height: 640
  }
};

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  @Input() context: ImageContext = errorImageContext;
  @Output() isRemoved = new EventEmitter<ImageContext>();
  isLoading = false;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  downloadImage() {
    window.open(this.context.enhancedImage.url);
  }

  deleteImage() {
    this.isLoading = true;

    this.imageService
      .deleteImage(this.context)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }))
      .subscribe(() => {
        this.isRemoved.emit(this.context);
      });
  }
}
