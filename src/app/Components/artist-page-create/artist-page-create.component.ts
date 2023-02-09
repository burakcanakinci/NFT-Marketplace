import { Component } from '@angular/core';
import { INftCard } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-artist-page-create',
  templateUrl: './artist-page-create.component.html',
  styleUrls: ['./artist-page-create.component.scss']
})
export class ArtistPageCreateComponent {
  nftCards: INftCard[] = [
    { title: 'Distant Galaxy',
      img: '../../../assets/NFT_cards/Image Placeholder11.png',
    },
    { title: 'Life On Eden',
      img: '../../../assets/NFT_cards/Image Placeholder-12.png',
    },
    { title: 'AstroFiction',
      img: '../../../assets/NFT_cards/Image Placeholder-22.png',
    },
    { title: 'CryptoCity',
      img: '../../../assets/NFT_cards/Image Placeholder.png',
    },
    { title: 'ColorfulDog 0524',
      img: '../../../assets/NFT_cards/Image Placeholder-1.png',
    },
    { title: 'Space Tales',
      img: '../../../assets/NFT_cards/Image Placeholder-2.png',
    },
    { title: 'Cherry Blossom Girl 037',
      img: '../../../assets/NFT_cards/Image Placeholder-3.png',
    },
    { title: 'Dancing Robots 0987',
      img: '../../../assets/NFT_cards/Image Placeholder-4.png',
    },
    { title: 'IceCream Ape',
      img: '../../../assets/NFT_cards/Image Placeholder-5.png',
    },
  ]
}
