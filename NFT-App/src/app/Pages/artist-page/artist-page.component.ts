import { Component } from '@angular/core';
import { ICard } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent {
  copyWallet: string = "button__secondary--filled copy-wallet-btn";
  follow: string = 'button__secondary--outlined follow-btn';
  cards: ICard[] = [
    { title: 'Volume',
      likes: '250k+' },
    { title: 'NFTs Sold',
      likes: '50k+' },
    { title: 'Followers',
      likes: '3000+' }
  ]
}
