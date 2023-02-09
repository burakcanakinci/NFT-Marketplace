import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { from } from 'rxjs';

@Component({
  selector: 'app-nft-info',
  templateUrl: './nft-info.component.html',
  styleUrls: ['./nft-info.component.scss']
})
export class NftInfoComponent implements OnInit {
  color: string = 'button__secondary--outlined see-nft-btn';
  endTime: moment.Moment | undefined;
  timeLeft: number = 120;
  minutes: number | string = '00';
  seconds: number | string = '00';
  timeUp: boolean = false;
  isMessage: boolean = false;
  theInterval: any;
  aNumber: number = 3;


  ngOnInit() {
    console.log(this.timeUp)
  }
  startTimer() {
    this.endTime = moment().add(this.aNumber + 1, 'seconds');
    this.theInterval = setInterval(() => {
      this.timeLeft = moment(this.endTime).diff(moment(), 'seconds');
      if (this.timeLeft > 0) {
        this.minutes = (Math.floor(this.timeLeft / 60));
        this.seconds = (this.timeLeft % 60);
      } else {
        this.timeUp = true;
        setTimeout(() => {this.timeUp = false}, 4000);
        setTimeout(() => {this.isMessage = true}, 2800);
        setTimeout(() => {this.isMessage = false}, 4000);
        this.seconds = '00';
        clearInterval(this.theInterval);
        setTimeout(() => {this.startTimer()}, 4000)
      }
    });
  }
}
