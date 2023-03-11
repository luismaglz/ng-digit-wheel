import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDigitWheelComponent } from './ng-digit-wheel.component';

describe('NgDigitWheelComponent', () => {
  let component: NgDigitWheelComponent;
  let fixture: ComponentFixture<NgDigitWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDigitWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDigitWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
