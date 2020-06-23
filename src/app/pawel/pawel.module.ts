import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PawelRoutingModule } from './pawel-routing.module';
import { PawelComponent } from './pawel.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [PawelComponent],
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
    PawelRoutingModule
  ]
})
export class PawelModule { }
