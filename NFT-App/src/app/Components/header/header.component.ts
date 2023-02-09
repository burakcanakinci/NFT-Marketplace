import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() class: string | undefined;
  headerButton: string = "button__secondary--filled header-button";
  faded: string = "";

  constructor(private route: Router, private common: CommonService) {}

  ngOnInit() {
    this.common.isFaded.subscribe(x => {
      console.log(x);
      if (x) {
        return this.faded = "faded";
      }
      return this.faded = "";
    })
  }

  navigateTo() {
    this.route.navigate(['/create-account-page']);
  }

  homePage(e: Event) {
    this.route.navigate(['']);
    console.log(e);
  }

  formsPage() {
    this.route.navigate(['/forms-page']);
  }

  rankingsPage() {
    this.route.navigate(['/rankings-page']);
  }

  walletPage() {
    this.route.navigate(['/wallet-page']);
  }

  doSomething() {
    alert('hello');
  }
}
