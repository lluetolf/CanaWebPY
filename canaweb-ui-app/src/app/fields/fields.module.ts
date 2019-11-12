import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FieldsRoutingModule } from './fields-routing.module';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';


@NgModule({
  declarations: [FieldListComponent, FieldDetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    FieldsRoutingModule
  ]
})
export class FieldsModule { }
