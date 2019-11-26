import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldListComponent } from './fields/field-list/field-list.component';
import { VersionPageComponent } from './version-page/version-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fieldList', component: FieldListComponent },
  { path: 'payableList', component: FieldListComponent },
  { path: 'receivableList', component: FieldListComponent },
  { path: 'contact', component: FieldListComponent },
  { path: 'version', component: VersionPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

