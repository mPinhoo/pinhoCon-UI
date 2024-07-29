import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface ClientList {
  name: string;
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})

export class AutoCompleteComponent implements OnInit {

  @Input() label: string = '';
  @Input() myControl: FormControl;
  @Input() options: ClientList[] = [];
  @Input() filteredOptions: Observable<ClientList[]> | undefined;

  @Output() optionSelected = new EventEmitter<ClientList>();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myControl = this.formBuilder.control('')
    
  }

  ngOnInit() {
    this.filteredOptions = this.myControl?.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(option: ClientList): string {
    return option && option.name ? option.name : '';
  }

  private _filter(name: string): ClientList[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }

  public optionSelect(option: ClientList) {
    this.optionSelected.emit(option);
  }
}
