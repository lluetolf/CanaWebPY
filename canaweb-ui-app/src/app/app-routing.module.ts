import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldListComponent } from './fields/field-list/field-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: FieldListComponent },
  { path: 'detail/:id', component: FieldListComponent },
  { path: 'heroes', component: FieldListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

