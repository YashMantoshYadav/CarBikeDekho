import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';


import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehicleBrandComponent } from './vehicle-brand/vehicle-brand.component';
import { VehicleLaunchYearComponent } from './vehicle-launch-year/vehicle-launch-year.component';
import { VehicleFuelTypeComponent } from './vehicle-fuel-type/vehicle-fuel-type.component';
import { VehicleColorComponent } from './vehicle-color/vehicle-color.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    HeaderComponent,
    SideNavComponent,
    VehicleTypeComponent,
    VehicleBrandComponent,
    VehicleLaunchYearComponent,
    VehicleFuelTypeComponent,
    VehicleColorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
