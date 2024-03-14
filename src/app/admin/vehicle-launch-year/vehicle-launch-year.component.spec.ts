import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLaunchYearComponent } from './vehicle-launch-year.component';

describe('VehicleLaunchYearComponent', () => {
  let component: VehicleLaunchYearComponent;
  let fixture: ComponentFixture<VehicleLaunchYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleLaunchYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleLaunchYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
