import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-browse-categories',
  templateUrl: './browse-categories.component.html',
  styleUrls: ['./browse-categories.component.scss']
})
export class BrowseCategoriesComponent {
  categories: ICategory[] = [
    { title: 'Art',
      img: '../../../assets/category-icons/Image Placeholder-7.png',
      icon: '../../../assets/category-icons/PaintBrush.png'},
    { title: 'Collectables',
      img: '../../../assets/category-icons/Image Placeholder-4.png',
      icon: '../../../assets/category-icons/Swatches.png'},
    { title: 'Music',
      img: '../../../assets/category-icons/Image Placeholder.png',
      icon: '../../../assets/category-icons/MusicNotes.png'},
    { title: 'Photography',
      img: '../../../assets/category-icons/Image Placeholder-1.png',
      icon: '../../../assets/category-icons/Camera.png'},
    { title: 'Video',
      img: '../../../assets/category-icons/Image Placeholder-2.png',
      icon: '../../../assets/category-icons/VideoCamera.png'},
    { title: 'Utility',
      img: '../../../assets/category-icons/Image Placeholder-3.png',
      icon: '../../../assets/category-icons/MagicWand.png'},
    { title: 'Sport',
      img: '../../../assets/category-icons/Image Placeholder-5.png',
      icon: '../../../assets/category-icons/Basketball.png'},
    { title: 'Virtual Worlds',
      img: '../../../assets/category-icons/Image Placeholder-6.png',
      icon: '../../../assets/category-icons/Planet.png'},
  ]
}
