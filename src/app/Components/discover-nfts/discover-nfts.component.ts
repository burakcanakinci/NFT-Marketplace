import { Component } from '@angular/core';
import { INftCard, INftCards } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-discover-nfts',
  templateUrl: './discover-nfts.component.html',
  styleUrls: ['./discover-nfts.component.scss']
})
export class DiscoverNftsComponent {
  secondaryOutlinedButton: string = "button__secondary--outlined discover-btn";
  nftCards: INftCards[] = [
    { title: 'Distant Galaxy',
      img: '../../../assets/NFT_cards/Image Placeholder11.png',
      avatar: '../../../assets/Avatars/asdf.png',
      name: 'MoonDancer'
    },
    { title: 'Life On Eden',
      img: '../../../assets/NFT_cards/Image Placeholder-12.png',
      avatar: '../../../assets/Avatars/adfgba.png',
      name: 'NebulaKid'
    },
    { title: 'AstroFiction',
      img: '../../../assets/NFT_cards/Image Placeholder-22.png',
      avatar: '../../../assets/Avatars/AvatarPlaceholder-9.png',
      name: 'Spaceone'
    },
    
  ]
}
