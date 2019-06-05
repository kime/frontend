import { Component, Injector, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ImageContainerComponent } from './image-container/image-container.component';
import { ImageContext } from '@app/shared/interfaces';
import { ImageService } from '@app/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  ImageContainerComponent = ImageContainerComponent;
  isLoading: boolean;
  userImageContexts: ImageContext[];

  constructor(private imageContainerInjector: Injector, private imageService: ImageService) {}

  createInjector(context: ImageContext): Injector {
    return Injector.create([{ provide: ImageContext, useValue: context }], this.imageContainerInjector);
  }

  ngOnInit() {
    this.isLoading = true;
    this.imageService
      .getUserImages()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((userImageContexts: ImageContext[]) => {
        this.userImageContexts = userImageContexts;
      });
  }

  onUploadCompletion(responseContext: ImageContext) {
    this.userImageContexts.push(responseContext);
  }
}
