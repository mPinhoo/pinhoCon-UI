import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';
import { AutoCompleteComponent } from './auto-complete.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  exports: [AutoCompleteComponent]
})
export class AutoCompleteModule {
}
