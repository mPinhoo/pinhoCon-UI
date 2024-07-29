import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  exports: [CardComponent]
})
export class CustomCardModule {
}
