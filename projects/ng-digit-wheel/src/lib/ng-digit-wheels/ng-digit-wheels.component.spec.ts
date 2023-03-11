import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDigitWheelsComponent } from './ng-digit-wheels.component';

describe('NgDigitWheelsComponent', () => {
  let component: NgDigitWheelsComponent;
  let fixture: ComponentFixture<NgDigitWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDigitWheelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDigitWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
