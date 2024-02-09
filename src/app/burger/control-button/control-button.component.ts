import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Behaviour } from '../constants/behaviour.enum';

@Component({
  selector: 'app-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css'],
})
export class ControlButtonComponent implements OnInit, OnChanges {
  @Input()
  behaviour!: Behaviour;

  @Output()
  controlEvent!: EventEmitter<Behaviour>;

  buttonColor!: string;

  constructor() {
    this.controlEvent = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buttonColor =
      changes['behaviour'].currentValue === Behaviour.ADD ? 'primary' : 'warn';
  }

  ngOnInit(): void {}

  handleOnClick() {
    this.controlEvent.emit(this.behaviour);
  }
}
