import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
