import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Behaviour } from '../constants/behaviour.enum';

@Component({
  selector: 'app-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css'],
})
export class ControlButtonComponent implements OnInit {
  @Input()
  behaviour!: Behaviour;

  @Output()
  controlEvent!: EventEmitter<Behaviour>;

  constructor() {
    this.controlEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  handleOnClick() {
    this.controlEvent.emit(this.behaviour);
  }
}
