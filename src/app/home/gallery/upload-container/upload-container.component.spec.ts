import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModule } from '@app/@theme/theme.module';
import { UploadContainerComponent } from './upload-container.component';
import { AuthenticationService, ImageService, MockAuthenticationService } from '@app/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('UploadContainerComponent', () => {
  let component: UploadContainerComponent;
  let fixture: ComponentFixture<UploadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemeModule, NbEvaIconsModule, HttpClientTestingModule, RouterTestingModule],
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
