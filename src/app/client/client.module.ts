import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SlickCarouselModule
    
  ]
})
export class ClientModule { }
