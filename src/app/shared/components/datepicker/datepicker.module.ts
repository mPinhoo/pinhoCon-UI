import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],

})
export class DatepickerModule { }
