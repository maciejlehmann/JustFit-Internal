import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PawelRoutingModule } from './pawel-routing.module';
import { PawelComponent } from './pawel.component';


@NgModule({
  declarations: [PawelComponent],
  imports: [
    CommonModule,
    PawelRoutingModule
  ]
})
export class PawelModule { }
