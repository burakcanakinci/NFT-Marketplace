import { Component } from '@angular/core';
import { ITrend } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-trending-collection',
  templateUrl: './trending-collection.component.html',
  styleUrls: ['./trending-collection.component.scss']
})
export class TrendingCollectionComponent {
  trends: ITrend[] = [
    { primaryImg: '../../../assets/Trending-Collection/Primary Photo Placeholder.png',
      secondaryImg: '../../../assets/Trending-Collection/Secondary Photo Placeholder.png',
      tertiaryImg : '../../../assets/Trending-Collection/Secondary Photo Placeholder-1.png',
      infoTitle: 'DSGN Animals',
      artistAvatar: '../../../assets/Avatars/AvatarPlaceholder-4.png',
      artistName: 'MrFox'
    },
    { primaryImg: '../../../assets/Trending-Collection/Primary Photo Placeholder-1.png',
      secondaryImg: '../../../assets/Trending-Collection/Secondary Photo Placeholder-2.png',
      tertiaryImg : '../../../assets/Trending-Collection/Secondary Photo Placeholder-3.png',
      infoTitle: 'Magic Mushrooms',
      artistAvatar: '../../../assets/Avatars/AvatarPlaceholder-5.png',
      artistName: 'Shroomie'
    },
    { primaryImg: '../../../assets/Trending-Collection/Primary Photo Placeholder-2.png',
      secondaryImg: '../../../assets/Trending-Collection/Secondary Photo Placeholder-4.png',
      tertiaryImg : '../../../assets/Trending-Collection/Secondary Photo Placeholder-5.png',
      infoTitle: 'Disco Machines',
      artistAvatar: '../../../assets/Avatars/Avatar Placeholder.png',
      artistName: 'BeKind2Robots'
    },
  ]
}
