import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModule } from '@app/@theme/theme.module';
import { ImageContainerComponent } from './image-container.component';
import { ImageContext } from '@app/shared/interfaces';

describe('ImageContainerComponent', () => {
  let component: ImageContainerComponent;
  let fixture: ComponentFixture<ImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ThemeModule ],
      declarations: [ ImageContainerComponent ],
      providers: [ { provide: ImageContext, useValue: null } ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
