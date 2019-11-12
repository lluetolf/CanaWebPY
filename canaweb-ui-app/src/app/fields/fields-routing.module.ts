import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';


const routes: Routes = [
  { path: 'fields',  component: FieldListComponent },
  { path: 'field/:id', component: FieldDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldsRoutingModule { }
