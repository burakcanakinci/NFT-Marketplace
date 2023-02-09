import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAWalletComponent } from './connect-a-wallet.component';

describe('ConnectAWalletComponent', () => {
  let component: ConnectAWalletComponent;
  let fixture: ComponentFixture<ConnectAWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectAWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectAWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
