import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverNftsComponent } from './discover-nfts.component';

describe('DiscoverNftsComponent', () => {
  let component: DiscoverNftsComponent;
  let fixture: ComponentFixture<DiscoverNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverNftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
