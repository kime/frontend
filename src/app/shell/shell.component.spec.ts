import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService, CoreModule, MockAuthenticationService } from '@app/core';

import { ThemeModule } from '../@theme/theme.module';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, NbEvaIconsModule, ThemeModule.forRoot()],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }],
      declarations: [HeaderComponent, FooterComponent, ShellComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
