import { Component } from '@angular/core';
import { IArtist } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-top-rated-artists',
  templateUrl: './top-rated-artists.component.html',
  styleUrls: ['./top-rated-artists.component.scss']
})
export class TopRatedArtistsComponent {
  secondaryOutlinedButton: string = "button__secondary--outlined rankings-btn";
  artists: IArtist[] = [
    { name: 'Keepitreal',
      img: '/../assets/Avatars/AvatarPlaceholder11.png',
      sales: '34.53 ETH',
      id: '1'},
    { name: 'Digilab',
      img: '/../assets/Avatars/AvatarPlaceholder23.png',
      sales: '34.53 ETH',
      id: '2'},
    { name: 'Gravity One',
      img: '/../assets/Avatars/AvatarPlaceholder-1.png',
      sales: '34.53 ETH',
      id: '3'},
    { name: 'Gravity One',
      img: '/../assets/Avatars/AvatarPlaceholder-2.png',
      sales: '34.53 ETH',
      id: '4'},
    { name: 'BlueWhale',
      img: '/../assets/Avatars/AvatarPlaceholder-3.png',
      sales: '34.53 ETH',
      id: '5'},
    { name: 'Mr Fox',
      img: '/../assets/Avatars/AvatarPlaceholder-4.png',
      sales: '34.53 ETH',
      id: '6'},
    { name: 'Shroomie',
      img: '/../assets/Avatars/AvatarPlaceholder-5.png',
      sales: '34.53 ETH',
      id: '7'},
    { name: 'Robotica',
      img: '/../assets/Avatars/AvatarPlaceholder-6.png',
      sales: '34.53 ETH',
      id: '8'},
    { name: 'RustyRobot',
      img: '/../assets/Avatars/AvatarPlaceholder-7.png',
      sales: '34.53 ETH',
      id: '9'},
    { name: 'Animakid',
      img: '/../assets/Avatars/AvatarPlaceholder-8.png',
      sales: '34.53 ETH',
      id: '10'},
    { name: 'Dotgu',
      img: '/../assets/Avatars/AvatarPlaceholder-9.png',
      sales: '34.53 ETH',
      id: '11'},
    { name: 'Ghiblier',
      img: '/../assets/Avatars/AvatarPlaceholder-10.png',
      sales: '34.53 ETH',
      id: '12'},
    ]
  
  anotherFunction(x: any) {
    console.log(x);
  }
}