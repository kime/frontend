import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { ThemeModule } from '../@theme/theme.module';
import { FooterComponent } from './footer/footer.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule, ThemeModule, NbIconModule],
  declarations: [HeaderComponent, ShellComponent, FooterComponent]
})
export class ShellModule {}
