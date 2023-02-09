import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageCreateComponent } from './artist-page-create.component';

describe('ArtistPageCreateComponent', () => {
  let component: ArtistPageCreateComponent;
  let fixture: ComponentFixture<ArtistPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPageCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
