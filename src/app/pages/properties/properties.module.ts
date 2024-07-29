import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PropertiesComponent } from './properties.component';
import { PropertiesRoutingModule } from './properties.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    PropertiesRoutingModule
  ],
  declarations: [PropertiesComponent],
  providers: [TranslateModule],
  exports: [TranslateModule]
})
export class PropertiesModule { }
