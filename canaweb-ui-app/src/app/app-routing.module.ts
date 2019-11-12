import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionPageComponent } from './version-page/version-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'version', component: VersionPageComponent },
  { path: '',   redirectTo: '/version', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
