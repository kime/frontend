import { Component, Input, OnInit } from '@angular/core';

import { ImageContext } from '@app/shared/interfaces';

const errorImageContext: ImageContext = {
  id: 0,
  name: 'warning-icon.png',
  uploaded: 'error',
  originalImage: {
    url: 'assets/images/warning-icon.png',
    width: 640,
    height: 640,
  }
};

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  isLoading = false;
  @Input() context: ImageContext = errorImageContext;

  constructor() {}

  ngOnInit() {}

  getAccentColor(): string {
    if (this.context.uploaded === 'error') {
      return 'warning';
    } else {
      return 'disabled';
    }
  }
}
