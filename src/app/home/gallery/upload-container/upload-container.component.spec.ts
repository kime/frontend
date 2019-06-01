import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadContainerComponent } from './upload-container.component';

describe('UploadContainerComponent', () => {
  let component: UploadContainerComponent;
  let fixture: ComponentFixture<UploadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
