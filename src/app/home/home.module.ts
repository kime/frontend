import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ThemeModule } from '../@theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageContainerComponent } from './gallery/image-container/image-container.component';
import { UploadContainerComponent } from './gallery/upload-container/upload-container.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, ThemeModule, NbIconModule],
  declarations: [HomeComponent, GalleryComponent, ImageContainerComponent, UploadContainerComponent],
  entryComponents: [ImageContainerComponent]
})
export class HomeModule {}
