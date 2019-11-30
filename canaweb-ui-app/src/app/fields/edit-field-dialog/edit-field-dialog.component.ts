import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Field } from 'src/app/model/field';
import { FieldsService } from '../fields.service';

@Component({
  selector: 'app-edit-field-dialog',
  templateUrl: './edit-field-dialog.component.html',
  styleUrls: ['./edit-field-dialog.component.scss']
})
export class EditFieldDialogComponent implements OnInit {
  field: Field;

  constructor(
    public dialogRef: MatDialogRef<EditFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Field,
    private fieldService: FieldsService) {}

  ngOnInit() {
    console.log("Sent to Dialog: ", this.data);
    this.field = Object.assign({}, this.data);
  }

  save() {
    this.fieldService.updateField(this.field).subscribe(obs => {
      console.log("update:" + obs)
      this.data.ingenioId = this.field.ingenioId;
      this.data.acquisitionDate = this.field.acquisitionDate;
      this.data.name = this.field.name;
      this.data.owner = this.field.owner;
      this.data.size = this.field.size;
      this.data.cultivatedArea = this.field.cultivatedArea;
  
      this.dialogRef.close()
    });
  }

  dismiss() {
    this.dialogRef.close()
  }

}
