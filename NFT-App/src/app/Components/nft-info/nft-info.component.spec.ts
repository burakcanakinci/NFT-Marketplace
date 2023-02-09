import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftInfoComponent } from './nft-info.component';

describe('NftInfoComponent', () => {
  let component: NftInfoComponent;
  let fixture: ComponentFixture<NftInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
