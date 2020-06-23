import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@app/@shared';
import {Component} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    AboutRoutingModule,],
  declarations: [AboutComponent],
})
export class AboutModule {}



