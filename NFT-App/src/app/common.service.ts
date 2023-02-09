import { EventEmitter, Injectable } from '@angular/core';
import { Chart } from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isFaded = new EventEmitter();
  
  counter = 0;
  counterUpdate = new EventEmitter();

  chart: Chart | undefined;
  chartEmitter = new EventEmitter();

  constructor() {}
  
  addData(data:number[]) {
    this.chartEmitter.emit(data);
  }
  counterUp() {
    this.counter += 1;
    this.counterUpdate.next(this.counter);
  }
  counterDown() {
    this.counter -= 1;
    this.counterUpdate.next(this.counter);
  }
}