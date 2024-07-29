import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    AgentRoutingModule
  ],
  declarations: [AgentComponent],
  providers: [TranslateModule],
  exports: [TranslateModule]
})
export class AgentModule { }
