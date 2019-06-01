import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService, CoreModule, MockAuthenticationService } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageContainerComponent } from './gallery/image-container/image-container.component';
import { ThemeModule } from '../@theme/theme.module';
import { ImageService } from '../core/image.service';
import { MockModule } from 'ng-mocks';
import { ImageUploadModule } from 'angular2-image-upload';
import { UploadContainerComponent } from '@app/home/gallery/upload-container/upload-container.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
        ThemeModule,
        MockModule(ImageUploadModule)
      ],
      declarations: [
        HomeComponent,
        GalleryComponent,
        ImageContainerComponent,
        UploadContainerComponent
      ],
      providers: [
        ImageService,
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [ImageContainerComponent]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
