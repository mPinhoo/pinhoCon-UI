import { Component, Input } from '@angular/core';
import { BaseFormControlComponent } from '../../baseForm';


@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent extends BaseFormControlComponent {

  public isVisible: boolean = false;

  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() value: string = '';


  constructor(){
    super();
  }


  public hiddenPassword() {
    this.isVisible = !this.isVisible;
  }

}



