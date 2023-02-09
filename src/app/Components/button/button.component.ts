import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: string | undefined;
  @Output() someEvent: any = new EventEmitter();

  constructor() {}

  someFunction(x: any): void {
    this.someEvent.next(x);
  }
}