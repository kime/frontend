import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageContainerComponent } from './gallery/image-container/image-container.component';
import { ThemeModule } from '../@theme/theme.module';
import { ImageService } from './image.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule, SharedModule, HttpClientTestingModule, ThemeModule ],
      declarations: [ HomeComponent, GalleryComponent, ImageContainerComponent ],
      providers: [ ImageService ]
    }).compileComponents();
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
