import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, ThemeModule, LoginRoutingModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
