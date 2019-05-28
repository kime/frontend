import { Component, Injector, OnInit } from '@angular/core';

import { ImageContainerComponent } from './image-container/image-container.component';
import { ImageContext } from '../../shared/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  ImageContainerComponent = ImageContainerComponent;

  userImageContexts: ImageContext[] = [
    {
      id: 0,
      name: 'kamarpukur.jpg',
      uploaded: 'null',
      originalImage: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Kamarpukur_Ramakrishna_Hut.jpg',
        width: 0,
        height: 0
      },
      enhancedImage: {
        url: 'null',
        width: 0,
        height: 0,
        multiplier: 4,
        fixArtifacts: true
      }
    },
    {
      id: 1,
      name: 'panchavati.jpg',
      uploaded: 'null',
      originalImage: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Panchavati_Ramakrishna.jpg',
        width: 0,
        height: 0
      },
      enhancedImage: {
        url: 'null',
        width: 0,
        height: 0,
        multiplier: 4,
        fixArtifacts: false
      }
    }
  ];

  constructor(private imageContainerInjector: Injector) {}

  createInjector(context: ImageContext): Injector {
    return Injector.create([{ provide: ImageContext, useValue: context }], this.imageContainerInjector);
  }

  ngOnInit() {}
}
