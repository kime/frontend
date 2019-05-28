import { Component, OnInit } from '@angular/core';

import { ImageContext } from '../../../shared/interfaces';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  url: string;
  isLoading: boolean = false;

  constructor(context?: ImageContext) {
    if (context) {
      this.url = context.originalImage.url;
    }
    else {
      this.url = 'https://angular.io/assets/images/support/angular-404.svg';
    }
  }

  ngOnInit() {}
}
