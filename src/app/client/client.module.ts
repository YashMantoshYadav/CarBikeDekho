import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NextDirective } from '../Directive/next.directive';
import { PreviewsDirective } from '../Directive/previews.directive';



@NgModule({
  declarations: [
    HomeComponent,
    NextDirective,
    PreviewsDirective
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SlickCarouselModule

  ]
})
export class ClientModule { }
