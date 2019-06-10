import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService, CoreModule, ImageService, MockAuthenticationService } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageContainerComponent } from './gallery/image-container/image-container.component';
import { ThemeModule } from '../@theme/theme.module';
import { UploadContainerComponent } from '@app/home/gallery/upload-container/upload-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        ThemeModule,
        NbEvaIconsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [HomeComponent, GalleryComponent, ImageContainerComponent, UploadContainerComponent],
      providers: [ImageService, { provide: AuthenticationService, useClass: MockAuthenticationService }]
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
