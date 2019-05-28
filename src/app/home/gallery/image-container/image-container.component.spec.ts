import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModule } from '../../../@theme/theme.module';
import { ImageContainerComponent } from './image-container.component';
import { ImageContext } from '../../../shared/interfaces';

describe('ImageContainerComponent', () => {
  let component: ImageContainerComponent;
  let fixture: ComponentFixture<ImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemeModule],
      declarations: [ImageContainerComponent],
      providers: [ImageContext]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
