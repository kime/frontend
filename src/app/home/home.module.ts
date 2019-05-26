import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImageService } from './image.service';
import { ThemeModule } from '../@theme/theme.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageContainerComponent } from './gallery/image-container/image-container.component'

@NgModule({
  imports:
  [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    ThemeModule
  ],
  declarations: [HomeComponent, GalleryComponent, ImageContainerComponent],
  providers: [ImageService]
})
export class HomeModule {}
