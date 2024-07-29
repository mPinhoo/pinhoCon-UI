import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPropertiesComponent } from './add-properties.component';
import { AddPropertiesRoutingModule } from './add-properties.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    AddPropertiesRoutingModule
  ],
  declarations: [AddPropertiesComponent],
  providers: [TranslateModule],
  exports: [TranslateModule]
})
export class AddPropertiesModule { }
