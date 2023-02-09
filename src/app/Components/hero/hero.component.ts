import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { ICard } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
  export class HeroComponent {
  secondaryFilledButton: string = "button__secondary--filled";

  cards: ICard[] = [
    { title: 'Total Sale',
      likes: '240k+' },
    { title: 'Auctions',
      likes: '100k+' },
    { title: 'Artists',
      likes: '240k+' }
  ]

  constructor(private route: Router, private common: CommonService) {}

  redirectTo() {
    this.route.navigate(['/artist-page']);
  }
  increment() {
    this.common.counterUp()
  }
  decrement() {
    this.common.counterDown()
  }
}
