import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HelloComponent } from './components/hello/hello.component';
import { WorldComponent } from './components/hello/world/world.component';

@NgModule({
  declarations: [HomeComponent, HelloComponent,WorldComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
