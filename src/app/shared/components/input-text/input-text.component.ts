import { Component, Input } from '@angular/core';
import { BaseFormControlComponent } from '../../baseForm';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent extends BaseFormControlComponent{

  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() value: string = '';

  @Input() iconName: string = '';

  @Input() inputClass: string = 'input-system';

  @Input() editable: boolean = true

  constructor(){
    super();
  }


}
