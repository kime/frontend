import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ThemeModule } from '@app/@theme/theme.module';
import { GalleryComponent } from './gallery.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { AuthenticationService, HttpCacheService, ImageService, MockAuthenticationService } from '@app/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UploadContainerComponent } from '@app/home/gallery/upload-container/upload-container.component';
import { MockModule } from 'ng-mocks';
import { ImageUploadModule } from 'angular2-image-upload';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ThemeModule, HttpClientTestingModule, MockModule(ImageUploadModule) ],
      declarations: [ GalleryComponent, ImageContainerComponent, UploadContainerComponent ],
      providers: [ ImageService, HttpTestingController, HttpCacheService,
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [ ImageContainerComponent ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
