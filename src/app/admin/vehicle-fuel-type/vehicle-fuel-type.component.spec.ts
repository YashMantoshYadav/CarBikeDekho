import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFuelTypeComponent } from './vehicle-fuel-type.component';

describe('VehicleFuelTypeComponent', () => {
  let component: VehicleFuelTypeComponent;
  let fixture: ComponentFixture<VehicleFuelTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleFuelTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleFuelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
