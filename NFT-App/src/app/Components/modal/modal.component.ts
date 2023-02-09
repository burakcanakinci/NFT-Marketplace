import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  display$?: Observable<'open' | 'close'>;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
}