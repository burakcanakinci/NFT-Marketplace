import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCollectionComponent } from './trending-collection.component';

describe('TrendingCollectionComponent', () => {
  let component: TrendingCollectionComponent;
  let fixture: ComponentFixture<TrendingCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
