import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import { NightComponent } from './components/night/night.component';


@NgModule({
  declarations: [FileComponent, NightComponent],
  imports: [
    CommonModule,
    FileRoutingModule
  ]
})
export class FileModule { }
