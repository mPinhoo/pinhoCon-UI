import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAgentRoutingModule } from './add-agent.rounting.module';
import { AddAgentComponent } from './add-agent.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    AddAgentRoutingModule
  ],
  declarations: [AddAgentComponent],
  providers: [TranslateModule],
  exports: [TranslateModule]
})
export class AddAgentModule { }
