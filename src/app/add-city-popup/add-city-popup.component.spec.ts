import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityPopupComponent } from './add-city-popup.component';

describe('AddCityPopupComponent', () => {
  let component: AddCityPopupComponent;
  let fixture: ComponentFixture<AddCityPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCityPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
