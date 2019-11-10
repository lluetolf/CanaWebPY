import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [MaterialComponent, ToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
