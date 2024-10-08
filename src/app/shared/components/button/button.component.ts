import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
 
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() buttonClass: string = 'button-default';
  @Output() sendClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.sendClick.emit();
  }

}
