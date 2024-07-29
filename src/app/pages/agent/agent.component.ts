import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/shared/interfaces/agent.interface';
import { AgentService } from 'src/app/shared/services/agents.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent {

 public columns: string[] = ['Name', 'Documentation', 'Creci', 'general.actions']
  resultData: any
  data: any[] = [];

  constructor(
    private agents: AgentService,
    private router: Router,) {
  }

  ngOnInit() {

    this.getPropertie()

  }

  getPropertie() {
    this.agents.read().subscribe(allLogs => {
      this.resultData = allLogs
      if (allLogs) {
        this.resultData = allLogs.map((logs: Agent) => {
          return {
            'id': logs.id,
            'Name': logs.name,
            'Documentation': logs.doc,
            'Creci': logs.creci,
            'general.actions': ''
          }
        })
      }
    })
  }

  editAgent(item: any) {
    console.log(item.id)
    this.router.navigate(['/edit-agent/', item.id]);
  }

  deleteAgent(item: any) {
    this.agents.deleteAgent(item.id).subscribe();
    this.data = this.data.filter((agents: Agent) => item.id !== agents.id)
    window.location.reload()

  }

}
