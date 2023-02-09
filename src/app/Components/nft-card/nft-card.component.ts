import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})

export class NftCardComponent implements OnInit {
  counter: number = 0;
  
  constructor(private common: CommonService, private http: HttpClient) {}

  ngOnInit() {
    this.common.counterUpdate.subscribe(x => {
      this.counter = x;
    })
  }
}
