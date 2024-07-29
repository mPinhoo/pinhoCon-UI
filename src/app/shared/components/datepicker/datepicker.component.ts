import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormControlComponent } from '../../baseForm';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent extends BaseFormControlComponent implements OnInit{

  constructor(
    private router: Router
  ) { 
    super()
  }

  ngOnInit() {

  }


}
