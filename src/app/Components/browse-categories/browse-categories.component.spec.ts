import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCategoriesComponent } from './browse-categories.component';

describe('BrowseCategoriesComponent', () => {
  let component: BrowseCategoriesComponent;
  let fixture: ComponentFixture<BrowseCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
