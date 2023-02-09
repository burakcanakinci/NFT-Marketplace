import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  accountButton: string = "button__secondary--filled account-btn"
  constructor(private route: Router, private common: CommonService) {}
  ngOnInit() {
    this.common.isFaded.next(true);
  }
}
