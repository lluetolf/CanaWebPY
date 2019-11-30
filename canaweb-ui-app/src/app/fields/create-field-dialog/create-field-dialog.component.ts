import { Component, OnInit, Inject } from '@angular/core';
import { Field } from 'src/app/model/field';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FieldsService } from '../fields.service';

@Component({
  selector: 'app-create-field-dialog',
  templateUrl: './create-field-dialog.component.html',
  styleUrls: ['./create-field-dialog.component.scss']
})
export class CreateFieldDialogComponent implements OnInit {
  field: Field;

  constructor(
    public dialogRef: MatDialogRef<CreateFieldDialogComponent>,
    private fieldService: FieldsService) {}

  ngOnInit() {
    this.field = new Field();
    console.log("Sent to CreateFieldDialogComponent: ");
  }

  save() {
    this.fieldService.addField(this.field).subscribe(field => {
      console.log("Create:" + field)

      this.dialogRef.close()
    });
  }

  dismiss() {
    this.dialogRef.close()
  }

}
