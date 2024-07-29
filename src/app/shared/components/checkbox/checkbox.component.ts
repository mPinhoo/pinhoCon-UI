import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],

})
export class CheckboxComponent {

  @Input() label: string = '';
  @Input() checkboxValue: boolean = false;
  @Input() myControl: FormControl;

  @Output() checkboxValueChange = new EventEmitter<boolean>();


  constructor(private formBuilder: FormBuilder) {
    this.myControl = this.formBuilder.control('');
  }


  public onCheckboxChange(event: any) {
    this.checkboxValue = event.checked;
    this.checkboxValueChange.emit(this.checkboxValue);

    this.myControl.disabled ? this.myControl.enable() : this.myControl.disable()
  }

 
  




 
}
