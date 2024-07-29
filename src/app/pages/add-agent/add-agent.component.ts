import { Component, Injector } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agent } from 'src/app/shared/interfaces/agent.interface';
import { Propertie } from 'src/app/shared/interfaces/propertie.interface';
import { AgentService } from 'src/app/shared/services/agents.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent {

 public id: any;

  formGroup!: UntypedFormGroup;
  formBuilder: UntypedFormBuilder;

  constructor(
    private route: ActivatedRoute,
    private injector: Injector,
    private agentsService: AgentService,

  ) {
    this.formBuilder = injector.get<UntypedFormBuilder>(UntypedFormBuilder)

    this.formGroup = this.formBuilder.group({
      Name: [''],
      Doc: [''],
      Creci: ['']
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getSelectedAgent()
    } else {
      this.formGroup.patchValue({
        Name: '',
        Doc: '',
        Creci: '',
      })
    }
  }

  saveAgent() {
    if (this.id) {
      this.editAgent()
    } else {
      this.createAgent();
    }
  }

  editAgent() {
    const item: Agent = {
      name: this.formGroup.value.Name,
      doc: this.formGroup.value.Doc,
      creci: this.formGroup.value.Creci,
    };

    this.agentsService.editCurrency(this.id, item).subscribe(resp => {
      if (resp) {
        window.history.back();
      }
    })
  }
  createAgent() {
    const item: Agent = {
      name: this.formGroup.value.Name,
      doc: this.formGroup.value.Doc,
      creci: this.formGroup.value.Creci,
    };

    this.agentsService.create(item).subscribe(resp => {
      if (resp) {
        window.history.back();
      }
    })
  }

  getSelectedAgent() {
    this.agentsService.readById(this.id).subscribe(resp => {
      if (resp) {
        this.formGroup.patchValue({
          Name: resp.name,
          Doc: resp.doc,
          Creci: resp.creci
        })
      }
    })
  }

}
