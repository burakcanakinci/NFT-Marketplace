import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category.interface';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-connect-a-wallet',
  templateUrl: './connect-a-wallet.component.html',
  styleUrls: ['./connect-a-wallet.component.scss']
})
export class ConnectAWalletComponent {
  // @ViewChild('mydiv') mydiv! = ElementRef
  categories: ICategory[] = [
    { title: 'Art',
      img: '../../../assets/category-icons/Image Placeholder-7.png',
      icon: '../../../assets/category-icons/PaintBrush.png'},
    { title: 'Collectables',
      img: '../../../assets/category-icons/Image Placeholder-4.png',
      icon: '../../../assets/category-icons/Swatches.png'}, 
  ]

  constructor(private modalService: ModalService) {}

  open() {
    this.modalService.open();
  }

//   dragElement(mydiv);

//   dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e:any) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

}