import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
