import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemekRoutingModule } from './remek-routing.module';
import { RemekComponent } from './remek.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [RemekComponent],
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
    RemekRoutingModule
  ]
})
export class RemekModule { }
