import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FieldsListComponent } from './fields-list/fields-list.component';
import { FieldEditDialogComponent } from './field-edit-dialog/field-edit-dialog.component';



@NgModule({
  declarations: [SidenavContentComponent, MainContentComponent, FieldsListComponent, FieldEditDialogComponent],
  imports: [
    CommonModule
  ]
})
export class FieldsModule { }
