import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehicleBrandComponent } from './vehicle-brand/vehicle-brand.component';
import { VehicleColorComponent } from './vehicle-color/vehicle-color.component';
import { VehicleFuelTypeComponent } from './vehicle-fuel-type/vehicle-fuel-type.component';
import { VehicleLaunchYearComponent } from './vehicle-launch-year/vehicle-launch-year.component';


const routes: Routes = [
{path: '', component:AdminHomeComponent},
{path:'type',component:VehicleTypeComponent},
{path:'brand',component:VehicleBrandComponent},
{path:'color',component:VehicleColorComponent},
{path:'fuel',component:VehicleFuelTypeComponent},
{path:'year',component:VehicleLaunchYearComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
