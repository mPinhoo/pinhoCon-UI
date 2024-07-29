import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, FormControl, UntypedFormGroup } from "@angular/forms";

@Component({
    template: '',
  })
  export class BaseFormControlComponent implements ControlValueAccessor {

    @Input() formGroup!: UntypedFormGroup;

    @Input() controlName: any

    onTouched: any;

      get control(): FormControl {
        return this.formGroup.get(this.controlName) as FormControl;
      }
    
      writeValue(value: any): void {
        this.control.setValue(value, { emitEvent: false });
      }
    
      registerOnChange(fn: any): void {
        this.control.valueChanges.subscribe(fn);
      }
    
      registerOnTouched(fn: any): void {
        this.onTouched = fn;
      }
  }