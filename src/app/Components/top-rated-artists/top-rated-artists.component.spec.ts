import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedArtistsComponent } from './top-rated-artists.component';

describe('TopRatedArtistsComponent', () => {
  let component: TopRatedArtistsComponent;
  let fixture: ComponentFixture<TopRatedArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
