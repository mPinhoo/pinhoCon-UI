import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  exports: [ButtonComponent]
})
export class CustomPrimaryButtonModule {
}
