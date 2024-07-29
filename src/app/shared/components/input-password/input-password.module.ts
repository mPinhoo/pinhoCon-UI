import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';
import { InputPasswordComponent } from './input-password.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  exports: [InputPasswordComponent]
})
export class CustomInputPasswordModule {
}
