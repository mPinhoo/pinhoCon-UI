import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';
import { TableComponent } from './table.component'; 

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  exports: [TableComponent]
})
export class CustomTableModule {
}
