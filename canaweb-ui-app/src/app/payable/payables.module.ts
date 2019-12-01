import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayablesRoutingModule } from './payables-routing.module';
import { PayableListComponent } from './payable-list/payable-list.component';
import { EditPayableComponent } from './edit-payable/edit-payable.component';
import { CreatePayableComponent } from './create-payable/create-payable.component';


@NgModule({
  declarations: [PayableListComponent, EditPayableComponent, CreatePayableComponent],
  imports: [
    CommonModule,
    PayablesRoutingModule
  ]
})
export class PayablesModule { }
