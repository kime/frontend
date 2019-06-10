import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModule } from '@app/@theme/theme.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { MockModule } from 'ng-mocks';
import { UploadContainerComponent } from './upload-container.component';
import { AuthenticationService, ImageService, MockAuthenticationService } from '@app/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UploadContainerComponent', () => {
  let component: UploadContainerComponent;
  let fixture: ComponentFixture<UploadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemeModule, HttpClientTestingModule, RouterTestingModule, MockModule(ImageUploadModule)],
      declarations: [UploadContainerComponent],
      providers: [ImageService, { provide: AuthenticationService, useClass: MockAuthenticationService }]
    }).compileComponents();
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
