import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModule } from '../../@theme/theme.module';
import { GalleryComponent } from './gallery.component';
import { ImageContainerComponent } from './image-container/image-container.component'

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ThemeModule ],
      declarations: [ GalleryComponent, ImageContainerComponent]
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
